import {NavigationContainer} from '@react-navigation/native';
import {extendTheme, NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';

import React from 'react';

import StackNavigation from './src/routes/Stack';
import {store} from './src/app/store';
import {LogBox} from 'react-native';

// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);

// Ignore all log notifications:
LogBox.ignoreAllLogs();

const config = {
  useSystemColorMode: false,
  initialColorMode: '_light',
};

// extend the theme
const customTheme = extendTheme({config});

export default function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <Provider store={store}>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </Provider>
    </NativeBaseProvider>
  );
}
