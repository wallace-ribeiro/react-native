 
import React, {Component} from 'react';
import {StyleSheet,
  View} from 'react-native';

 
export default class App extends Component {

  static navigationOptions = {
    title: 'INICIO',
  };

  state = {name: ''}

  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
 
 
