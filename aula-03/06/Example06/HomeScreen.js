 
import React, {Component} from 'react';
import {StyleSheet,
  Text,
  View,
  Button} from 'react-native';

 
export default class App extends Component {

  static navigationOptions = {
    title: 'Welcome',
  };

  state = {name: ''}

  render() {
    return (
      <View style={styles.container}>
        <Text>OLHA MUNDO</Text>
        <Button
          title="Go to profile"
          onPress={() => this.props.navigation.navigate('Profile')}
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
