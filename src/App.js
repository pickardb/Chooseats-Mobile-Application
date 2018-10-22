import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { store, persistor } from './store';
import Router from './Router';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router navigationBarStyle={styles.navBar} titleStyle={styles.navTitle} />
        </PersistGate>
      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red', // changing navbar color
  },
  navTitle: {
    color: 'white', // changing navbar title color
  },
})
