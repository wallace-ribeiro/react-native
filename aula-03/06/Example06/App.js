import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import { Image } from 'react-native';

const MainNavigator = createBottomTabNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
}, {

  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      return (<Image
        style={{width: 25, height: 25}}
        source={require('./tiny_logo.png')}/>)
  }}),
  tabBarOptions: {
    activeTintColor: 'blue',
    inactiveTintColor: 'gray',
}});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
