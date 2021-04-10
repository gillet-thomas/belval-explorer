import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from "../screens/MainScreen";
import StartScreen from "../screens/StartScreen";


const DrawerNavigator = createDrawerNavigator();

export default function Drawer(){
    return (
          <DrawerNavigator.Navigator initialRouteName ="Main">
            <DrawerNavigator.Screen name="Art" component = {StartScreen}/>
            <DrawerNavigator.Screen name="Culture" component = {StartScreen}/>
            <DrawerNavigator.Screen name="Science" component = {StartScreen}/>
          </DrawerNavigator.Navigator>
      );
}