import React from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class DrawerButton extends React.Component {
  /**
  * Renders the Button. It's onPress function is using props to open the Drawer Navigator.
  */
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableWithoutFeedback
          onPress={() => this.props.navigation.openDrawer()}>
          <Animated.View style={[styles.button, styles.menu]}>
            <Icon name="ios-menu" size={24} color="#fff" />
          </Animated.View>
        </TouchableWithoutFeedback>
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
    backgroundColor: '#2a2a2a',
  },
});
