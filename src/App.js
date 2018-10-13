import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Platform, StyleSheet, Text, View } from 'react-native';
//import { createStackNavigator } from 'react-navigation';

import store from './store';
import Lobby from './components/Lobby/';
import Authentication from './components/Authentication';
import Router from './Router';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router/>
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


