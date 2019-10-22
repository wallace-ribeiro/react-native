import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class App extends Component {
  
  state = {text: '', currentText: ''}
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.text}</Text>
        <TextInput
          placeholder="Escreva aqui"
          onChangeText={(text) => this.setState({currentText: text})}
          value={this.state.currentText}
        />
        <Button title="Add" onPress={() => this.setState({text: this.state.currentText})}></Button>
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
