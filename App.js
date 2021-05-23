import React from 'react';
import { Appearance } from 'react-native';
import { AppearanceProvider } from 'react-native-appearance';
import { DefaultTheme, DarkTheme, NavigationContainer } from '@react-navigation/native';
import Drawer from './android/app/src/config/navigator/DrawerNavigator';

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
