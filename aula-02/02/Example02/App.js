import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';

export default class App extends Component {



  state = {count: 0}
  
  render() {
    return (
      <ImageBackground source={require('./background-2633962_960_720.jpg')} style={{width: '90%', height: '90%'}}>
        <Text>{this.state.count}</Text>
        <Button title="Add" onPress={() => {
            this.setState({count: this.state.count + 1})
          }}>
        </Button>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
