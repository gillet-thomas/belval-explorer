import React, {Component} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Navigation from '../config/Navigation';
import About from '../screens/AboutScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet} from 'react-native';

import GLOBAL from './global.js';

class Drawer extends Component {
  state = {
    drawer: createDrawerNavigator(),
    artStatus: true,
  };

  _onPressArt() {
    if (this.state.artStatus) {
      this.setState({artStatus: false});
    } else {
      this.setState({artStatus: true});
    }
  }

  render() {
    return (
      <this.state.drawer.Navigator
        drawerContent={props => (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
              label="Art"
              style={
                this.state.artStatus
                  ? styles.artToggledON
                  : styles.artToggledOFF
              }
              itemStyle={{
                icon: ({color}) => (
                  <MaterialCommunityIcons
                    name="map"
                    color={color}></MaterialCommunityIcons>
                ),
              }}
              onPress={() => {
                this._onPressArt();
                GLOBAL.categories.setState({art: !GLOBAL.categories.state.art});
              }}
            />
            <DrawerItem
              label="Culture"
              style={{
                backgroundColor: 'orange',
                marginTop: 20,
              }}
              onPress={() =>
                GLOBAL.categories.setState({
                  culture: !GLOBAL.categories.state.culture,
                })
              }
            />
            <DrawerItem
              label="Science"
              style={{
                backgroundColor: 'lightblue',
                marginTop: 20,
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
              }}
              onPress={() =>
                GLOBAL.categories.setState({
                  science: !GLOBAL.categories.state.science,
                })
              }
            />
          </DrawerContentScrollView>
        )}>
        <this.state.drawer.Screen
          name="Map"
          component={Navigation}
          options={{
            swipeEnabled: false,
            drawerLabel: 'Belval Navigator',
            drawerIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="google-maps"
                size={size}
                color={color}></MaterialCommunityIcons>
            ),
          }}
        />
        <this.state.drawer.Screen
          name="About"
          component={About}
          options={{
            swipeEnabled: true,
            drawerLabel: 'About us',
            drawerIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="microsoft-teams"
                size={size}
                color={color}></MaterialCommunityIcons>
            ),
          }}
        />
      </this.state.drawer.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  artToggledON: {
    backgroundColor: 'red',
    marginTop: 20,
  },
  artToggledOFF: {
    backgroundColor: 'white',
    marginTop: 20,
  },
});

export default Drawer;
