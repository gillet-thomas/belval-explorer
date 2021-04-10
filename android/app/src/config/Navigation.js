import {createStackNavigator} from '@react-navigation/stack';
import StartScreen from '../screens/StartScreen';
import React from 'react';
import MapScreen from '../screens/MapScreen';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Start">
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="Main" component={MapScreen} />
    </Stack.Navigator>
  );
}
