import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Navigation from "./android/app/src/config/Navigation";

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
