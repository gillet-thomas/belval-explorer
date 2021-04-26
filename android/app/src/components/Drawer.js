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

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Art"
        style={{
          backgroundColor: 'red',
        }}
        itemStyle={{
          icon: ({color}) => (
            <MaterialCommunityIcons
              name="map"
              color={color}></MaterialCommunityIcons>
          ),
        }}
        onPress={() => alert('Toggle Art')}
      />
      <DrawerItem label="Culture" onPress={() => alert('Toggle Culture')} />
      <DrawerItem label="Science" onPress={() => alert('Toggle Science')} />
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
          drawerIcon: ({color, size}) => (
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
          drawerIcon: ({color, size}) => (
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
