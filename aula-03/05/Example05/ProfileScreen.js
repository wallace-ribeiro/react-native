 
import React, {Component} from 'react';
import {StyleSheet,
  Text,
  View,
  TextInput,
  Button} from 'react-native';

 
export default class App extends Component {

  static navigationOptions = {
    title: 'Profile',
  };

  state = {name: ''}

  render() {
    return (
      <View style={styles.container}>
        <Text>Pagina de profile: {this.props.navigation.state.params.name}</Text>
        <Button
          title="Go to home"
          onPress={() => this.props.navigation.navigate('Home')}
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
//user headerBackImage instead headerLeft