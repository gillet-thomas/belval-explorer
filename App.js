import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Navigation from "./app/config/Navigation";

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
