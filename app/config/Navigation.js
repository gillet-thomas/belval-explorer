import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";
import StartScreen from "../screens/StartScreen";
import React from "react";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Start"
    >
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  );
}
