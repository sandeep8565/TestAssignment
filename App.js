import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import AppNavigator from './src/navigations/BottomTabNavigation'

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />

    );
  }
};