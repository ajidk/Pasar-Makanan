import {NavigationContainer} from '@react-navigation/native';
import {extendTheme, NativeBaseProvider} from 'native-base';
import React from 'react';

import StackNavigation from './src/routes/Stack';

const config = {
  useSystemColorMode: false,
  initialColorMode: '_light',
};

// extend the theme
const customTheme = extendTheme({config});

export default function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
