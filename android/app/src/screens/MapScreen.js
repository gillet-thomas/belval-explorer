import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, AnimatedRegion, Callout} from 'react-native-maps';
import WaypointModal from '../components/Modal';
import DrawerButton from '../components/DrawerButton';

import firebase from '../config/firebaseConfig';
import Geolocation from '@react-native-community/geolocation';
import GLOBAL from '../components/global.js';

const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;

class MapScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      coordinate: new AnimatedRegion({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: 0.0,
        longitudeDelta: 0.0
      })
    };
  }

  componentDidMount() {

    const { coordinate } = this.state;

    this.watchID = Geolocation.watchPosition(
      position => {
        const { latitude, longitude } = position.coords;

        const newCoordinate = {
          latitude,
          longitude
        };

        if (Platform.OS === "android") {
          if (this.marker) {
            this.marker._component.animateMarkerToCoordinate(
              newCoordinate,
              500
            );
          }
        } else {
          coordinate.timing(newCoordinate).start();
        }

        this.setState({
          latitude,
          longitude,
        });
      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 10
      }
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
              isVisible: [
                ...this.state.isVisible,
                {key: entry.key, value: false},
              ],
            });
          });
          this.setState({waypoints: data});
          // console.log(this.state.waypoints);
        }
      });

    //Get intial region from the database
    firebase
      .database()
      .ref()
      .child('initialRegion')
      .get()
      .then(snapshot => {
        this.setState({initialRegion: snapshot.val()});
      });
  }
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  getMapRegion = () => ({
    latitude: parseFloat(this.state.latitude),
    longitude: parseFloat(this.state.longitude),
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
  });

  displayModal(state, componentKey) {
    var index = this.state.isVisible.findIndex(x => x.key === componentKey);
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

  render() {
    const waypoints = () => {
      if (this.state.waypoints) {
        return this.state.waypoints.map((waypoint, index) => {
          if (this.state[waypoint.category]) {
            return (
              <Marker
                key={index}
                coordinate={waypoint.coordinates}
                onPress={() => this.displayModal(true, waypoint.key)}>
                <Callout>
                  <WaypointModal
                    isVisible={
                      this.state.isVisible.find(x => x.key === waypoint.key)
                        .value
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
        >
          {waypoints()}
        </MapView>
        <DrawerButton
          style={{top: 20, left: 40}}
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
