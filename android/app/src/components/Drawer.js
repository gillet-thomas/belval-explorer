import * as React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Navigation from '../config/Navigation';
import About from '../screens/AboutScreen';
import Icon from '../screens/MapScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import GLOBAL from './global.js'

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Art"
        style={{
          backgroundColor: 'red',
          marginTop: 20,
        }}
        itemStyle={{
          icon: ({ color }) => (
            <MaterialCommunityIcons
              name="map"
              color={color}></MaterialCommunityIcons>
          ),
        }}
        onPress={() => GLOBAL.categories.setState({ art: !GLOBAL.categories.state.art })}
      />
      <DrawerItem
        label="Culture"
        style={{
          backgroundColor: 'orange',
          marginTop: 20,
        }}
        onPress={() => GLOBAL.categories.setState({ culture: !GLOBAL.categories.state.culture })}
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
        onPress={() => GLOBAL.categories.setState({ science: !GLOBAL.categories.state.science })}
      />
    </DrawerContentScrollView>
  );
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Map"
        component={Navigation}
        options={{
          swipeEnabled: false,
          drawerLabel: 'Belval Navigator',
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="google-maps"
              size={size}
              color={color}></MaterialCommunityIcons>
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          swipeEnabled: true,
          drawerLabel: 'About us',
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="microsoft-teams"
              size={size}
              color={color}></MaterialCommunityIcons>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
