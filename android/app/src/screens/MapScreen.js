import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import WaypointModal from '../components/Modal';

import firebase from "../config/firebaseConfig";

class MapScreen extends Component {
  state = {
    isVisible: false
  }

  componentDidMount() {

    //Get the waypoints positions from the database
    firebase.database().ref().child("waypoints").get().then((snapshot) => {
      if (snapshot.exists()) {
        var data = [];
        snapshot.forEach((entry) => {
          data.push({
            key: entry.key,
            value: snapshot.child(entry.key).child("coordinates").val()
          });
        });
        this.setState({ waypoints: data })
      }
    })

    //Get intial region from the database
    firebase.database().ref().child("initialRegion").get().then((snapshot) => {
      this.setState({ initialRegion: snapshot.val() })
    });
  }

  displayModal(state) {
    this.setState({ isVisible: state })
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={this.state.initialRegion}
        >
          {this.state.waypoints && this.state.waypoints.map((waypoint, index) => (
            <Marker
              key={index}
              coordinate={waypoint.value}
              title={waypoint.key}
              onPress={() => this.displayModal(true)}
            >
              <Callout>
                <WaypointModal isVisible={this.state.isVisible} hideModal={() => this.displayModal(false)} />
              </Callout>
            </Marker>
          ))}
        </MapView>
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
  }
});

export default MapScreen;
