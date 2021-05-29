import React, {Component} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import About from '../../screens/AboutScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet} from 'react-native';

import GLOBAL from '../global.js';

class Drawer extends Component {
  state = {
    drawer: createDrawerNavigator(),
    artStatus: true,
    cultureStatus: true,
    scienceStatus: true,
  };
  
  /**
   * Toggle Art Boolean
   */
  _onPressArt() {
    if (this.state.artStatus) {
      this.setState({artStatus: false});
    } else {
      this.setState({artStatus: true});
    }
  }

  /**
   * Toggle Culture Boolean
   */
  _onPressCulture() {
    if (this.state.cultureStatus) {
      this.setState({cultureStatus: false});
    } else {
      this.setState({cultureStatus: true});
    }
  }

  /**
   * Toggle Science Boolean
   */
  _onPressScience() {
    if (this.state.scienceStatus) {
      this.setState({scienceStatus: false});
    } else {
      this.setState({scienceStatus: true});
    }
  }

  /**
   * Render all Items inside the Drawer.
   * Render all Screens to navigate to from the Drawer.
   * @returns the Drawer
   */
  render() {
    return (
      <this.state.drawer.Navigator
        drawerContent={props => (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
              label="Art"
              labelStyle={{color: 'black'}}
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
              labelStyle={{color: 'black'}}
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
              labelStyle={{color: 'black'}}
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
          component={StackNavigator}
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
