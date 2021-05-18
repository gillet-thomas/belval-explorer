import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import Drawer from './android/app/src/components/Drawer';
import {DefaultTheme, DarkTheme} from '@react-navigation/native';
import {Appearance} from 'react-native';

export default function App() {
  return (
    <AppearanceProvider>
      <NavigationContainer
        theme={
          Appearance.getColorScheme() === 'dark' ? DarkTheme : DefaultTheme
        }>
        <Drawer />
      </NavigationContainer>
    </AppearanceProvider>
  );
}
