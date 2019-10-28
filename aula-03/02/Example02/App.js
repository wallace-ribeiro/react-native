import React, {Component} from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';

export default class App extends Component {

  state = {valor: false}

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.valor ? 'On' : 'Off'}</Text>
        <Switch
          value={this.state.valor}
          thumbColor="green"
          trackColor={{false: 'red', true: 'black'}}
          onValueChange={(v) => this.setState({valor: v})}
        />  
      </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  }
});
