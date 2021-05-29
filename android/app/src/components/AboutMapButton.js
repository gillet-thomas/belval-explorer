import React from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class AboutMapButton extends React.Component {
  /**
  * Renders the Button. It's onPress function is using props to navigate to the Map.
  */
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableNativeFeedback
          onPress={() => this.props.navigation.navigate('Map')}>
          <Animated.View style={[styles.button, styles.menu]}>
            <Icon name="return-down-back" size={24} color="#fff" />
          </Animated.View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
  },
  button: {
    position: 'absolute',
    width: 45,
    height: 45,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 10,
    shadowColor: '#2a2a2a',
    shadowOpacity: 0.3,
    shadowOffset: { height: 10 },
  },
  menu: {
    backgroundColor: '#474747',
  },
});
