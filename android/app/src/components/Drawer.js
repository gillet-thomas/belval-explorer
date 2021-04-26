import * as React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Navigation from '../config/Navigation';
import About from '../screens/AboutScreen';
import Map from '../screens/MapScreen';

const DrawerNavigator = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Art" onPress={() => alert('Toggle Art')} />
      <DrawerItem label="Culture" onPress={() => alert('Toggle Culture')} />
      <DrawerItem label="Science" onPress={() => alert('Toggle Science')} />
    </DrawerContentScrollView>
  );
}

export default function Drawer() {
  return (
    <DrawerNavigator.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <DrawerNavigator.Screen
        name="Belval Navigator"
        component={Navigation}
        options={{swipeEnabled: false}}
      />
      <DrawerNavigator.Screen
        name="About"
        component={About}
        options={{swipeEnabled: true}}
      />
    </DrawerNavigator.Navigator>
  );
}
