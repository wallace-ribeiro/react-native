import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends Component {
  
  state = {count: 0}
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.count}</Text>
        <Button title="Add" onPress={() => this.setState({count: this.state.count + 1})}></Button>
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
