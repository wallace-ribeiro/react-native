import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class App extends Component {



  state = {count: 0}

  componentDidMount() {
    AsyncStorage.getItem('contador').then((v) => this.setState({count: Number(v) || 0}))
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.count}</Text>
        <Button title="Add" onPress={() => {
            this.setState({count: this.state.count + 1})
            AsyncStorage.setItem('contador', (this.state.count + 1).toString())
          }}>
        </Button>
      </View>
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
