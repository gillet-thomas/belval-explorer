import React, { Component } from 'react';
import { View, StyleSheet, Image, Appearance } from 'react-native';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  AnimatedRegion,
  Callout,
} from 'react-native-maps';
import WaypointModal from '../components/Modal';
import DrawerButton from '../components/DrawerButton';

import firebase from '../config/firebaseConfig';
import DarkMode from '../config/darkmode.json';
import GLOBAL from '../config/global.js';

navigator.geolocation = require('@react-native-community/geolocation');

const LATITUDE_DELTA = 0.007;
const LONGITUDE_DELTA = 0.007;
const LATITUDE = 49.503271;
const LONGITUDE = 5.948635;

class MapScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: [],
      latitude: LATITUDE,
      longitude: LONGITUDE,
      coordinate: new AnimatedRegion({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: 0.0,
        longitudeDelta: 0.0,
      }),
    };
  }

  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition(
      position => {
        const { coordinate } = this.state;
        const { latitude, longitude } = position.coords;
        const newCoordinate = { latitude, longitude };

        if (Platform.OS === "android") {
          if (this.marker) {
            this.marker.animateMarkerToCoordinate(newCoordinate, 500);
          }
        } else {
          coordinate.timing(newCoordinate).start();
        }
        this.setState({ latitude, longitude });
      },
      error => console.log(error), { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );

    //Define a global state used to (un)toggle categories
    GLOBAL.categories = this;
    GLOBAL.categories.setState({
      art: true,
      culture: true,
      science: true,
    });

    //Get the waypoints positions from the database
    firebase
      .database()
      .ref()
      .child('waypoints')
      .get()
      .then(snapshot => {
        if (snapshot.exists()) {
          var data = [];
          snapshot.forEach(entry => {
            data.push({
              key: entry.key,
              coordinates: snapshot.child(entry.key).child('coordinates').val(),
              modal: snapshot.child(entry.key).child('modal').val(),
              title: snapshot.child(entry.key).child('title').val(),
              category: snapshot.child(entry.key).child('category').val(),
            });
            this.setState({
              isVisible: [...this.state.isVisible, { key: entry.key, value: false }],
            });
          });
          this.setState({ waypoints: data });
          // console.log(this.state.waypoints);
        }
      })
      .catch(error => {
        console.error(error);
      });

    //Get intial region from the database
    firebase
      .database()
      .ref()
      .child('initialRegion')
      .get()
      .then(snapshot => {
        this.setState({ initialRegion: snapshot.val() });
      })
      .catch(error => {
        console.error(error);
      });
  }
  //Function used to initialize the map location
  getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  /**
   * Change a modal visibility in order to display/hide it
   * @param {boolean} state - The new visibility state of the modal
   * @param {int} componentKey - The index of the modal
   */
  displayModal(state, componentKey) {
    var index = this.state.isVisible.findIndex(x => x.key === componentKey);

    //Update the state by switching the componentKey visibility to state
    this.setState({
      isVisible: [
        ...this.state.isVisible.slice(0, index),
        Object.assign({}, this.state.isVisible[index], {
          key: componentKey,
          value: state,
        }),
        ...this.state.isVisible.slice(index + 1),
      ],
    });
  }

  /**
   * Get the color corresponding to the category
   * @param {string} category
   * @returns the corresponding color
   */
  markerColor(category) {
    switch (category) {
      case 'art':
        return '#FF8359';
      case 'culture':
        return '#00FFFF';
      case 'science':
        return '#33FF99';
      default:
        return '#000000';
    }
  }

  render() {
    /**
     * Creates Marker components for each waypoint
     * @returns a list with the waypoints components
     */
    const waypoints = () => {
      if (this.state.waypoints) {
        return this.state.waypoints.map((waypoint, index) => {
          //If the waypoint category is toggled
          if (this.state[waypoint.category]) {
            return (
              <Marker
                key={index}
                pinColor={this.markerColor(waypoint.category)}
                coordinate={waypoint.coordinates}
                onPress={() => this.displayModal(true, waypoint.key)}>
                <Callout>
                  <WaypointModal
                    isVisible={
                      this.state.isVisible.find(x => x.key === waypoint.key).value
                    }
                    hideModal={() => this.displayModal(false, waypoint.key)}
                    title={waypoint.title}
                    modal={waypoint.modal}
                  />
                </Callout>
              </Marker>
            );
          }
        });
      }
    };
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          showUserLocation
          followUserLocation
          loadingEnabled
          region={this.getMapRegion()}
          customMapStyle={Appearance.getColorScheme() === 'dark' ? DarkMode : []}>

          {waypoints()}
          <Marker.Animated
            ref={marker => { this.marker = marker; }}
            coordinate={this.state.coordinate}>
            <Image
              source={{ uri: 'custom_pin' }}
              style={{ height: 15, width: 15 }}
            />
          </Marker.Animated>
        </MapView>
        <DrawerButton
          style={{ top: 20, left: 40 }}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;
