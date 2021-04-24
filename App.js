import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Drawer from './android/app/src/components/Drawer';

export default function App() {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}
