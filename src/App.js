import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { store, persistor } from './store';
import Lobby from './components/Lobby/';
import Authentication from './components/Authentication';
import Router from './Router';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>

    );
  }
}

/*const RootStack = createStackNavigator(
  {
    Authentication: Authentication,
    Lobby: Lobby,
  },
  {
    initialRouteName: 'Authentication',
  }
);*/


