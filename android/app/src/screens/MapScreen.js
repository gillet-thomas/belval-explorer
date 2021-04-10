import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import WaypointModal from '../components/Modal';

import config from "../config/config";

class MapScreen extends Component {
  state = {
    isVisible: false,
  }
  displayModal(state){
    this.setState({ isVisible: state })
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={config.initialRegion}
        >
          {config.markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.coordinates}
              title={marker.title}
            />
          ))}

          <Marker coordinate={config.initialRegion} onPress={ () => this.displayModal(true) }>
            <Callout>
                <WaypointModal isVisible={this.state.isVisible} hideModal={() => this.displayModal(false)}/>
            </Callout>
          </Marker>

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
