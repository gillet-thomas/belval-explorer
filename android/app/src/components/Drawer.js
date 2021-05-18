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

import GLOBAL from '../config/global.js';

class Drawer extends Component {
  state = {
    drawer: createDrawerNavigator(),
    artStatus: true,
    cultureStatus: true,
    scienceStatus: true,
  };

  _onPressArt() {
    if (this.state.artStatus) {
      this.setState({artStatus: false});
    } else {
      this.setState({artStatus: true});
    }
  }

  _onPressCulture() {
    if (this.state.cultureStatus) {
      this.setState({cultureStatus: false});
    } else {
      this.setState({cultureStatus: true});
    }
  }

  _onPressScience() {
    if (this.state.scienceStatus) {
      this.setState({scienceStatus: false});
    } else {
      this.setState({scienceStatus: true});
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
              onPress={() => {
                this._onPressArt();
                GLOBAL.categories.setState({art: !GLOBAL.categories.state.art});
              }}
            />
            <DrawerItem
              label="Culture"
              style={
                this.state.cultureStatus
                  ? styles.cultureToggledON
                  : styles.cultureToggledOFF
              }
              onPress={() => {
                this._onPressCulture();
                GLOBAL.categories.setState({
                  culture: !GLOBAL.categories.state.culture,
                });
              }}
            />
            <DrawerItem
              label="Science"
              style={
                this.state.scienceStatus
                  ? styles.scienceToggledON
                  : styles.scienceToggledOFF
              }
              onPress={() => {
                this._onPressScience();
                GLOBAL.categories.setState({
                  science: !GLOBAL.categories.state.science,
                });
              }}
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
            swipeEnabled: false,
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
    backgroundColor: '#FF8359',
    marginTop: 20,
  },
  artToggledOFF: {
    backgroundColor: 'lightgrey',
    marginTop: 20,
  },
  cultureToggledON: {
    backgroundColor: '#00FFFF',
    marginTop: 20,
  },
  cultureToggledOFF: {
    backgroundColor: 'lightgrey',
    marginTop: 20,
  },
  scienceToggledON: {
    backgroundColor: '#33FF99',
    marginTop: 20,
  },
  scienceToggledOFF: {
    backgroundColor: 'lightgrey',
    marginTop: 20,
  },
});

export default Drawer;
