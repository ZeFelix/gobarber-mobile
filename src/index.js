import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'react-native';

import '~/config/ReactotronConfig';
import { NavigationContainer } from '@react-navigation/native';
import { persistor, store } from './store';

import Routes from '~/routes';

export default function app() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
          <Routes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
