import React, {Component} from 'react';
import {StatusBar, View, Text} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View>
        <StatusBar hidden={false} backgroundColor="blue" barStyle="default" 
	  translucent={false}
	/>
	<Text style={{fontSize: 28}}>OLAH MUNDO!</Text>
      </View>
    );
  }
}
/*
 barStyle:
 'default', 'light-content', 'dark-content'
 */