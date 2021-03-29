import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Navigation from "./app/config/Navigation";
import AboutScreen from "./app/screens/AboutScreen";

export default function App() {
  return (
    // <NavigationContainer>
    //   <Navigation />
    // </NavigationContainer>
    <AboutScreen></AboutScreen>
  );
}
