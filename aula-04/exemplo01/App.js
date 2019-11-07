import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import TelaInicial from './TelaInicial';
import Confirmacao from './Confirmacao';

const MainNavigator = createStackNavigator({
  Confirmacao: {screen: Confirmacao},
  TelaInicial: {screen: TelaInicial},
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}


/*
yarn add react-navigation
yarn add react-native-gesture-handler
yarn add react-navigation-stack
yarn add react-native-reanimated
yarn add react-native-screens
 */
