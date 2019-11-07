 
import React, {Component} from 'react';
import {StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button} from 'react-native';

 
export default class App extends Component {

  static navigationOptions = {
    title: 'Tela Inicial'
  };

  state = {name: ''}

  render() {
    return (
      <View style={styles.container}>
        <Text>EASY TAXI</Text>
        <TextInput onChangeText={text => this.setState({name: text})}
          value={this.state.name}
        />
        <Button
          title="Go to profile"
          onPress={() => this.props.navigation.navigate('Confirmacao', {name: this.state.name})}
        />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
 
