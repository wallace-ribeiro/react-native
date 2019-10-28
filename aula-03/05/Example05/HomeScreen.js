 
import React, {Component} from 'react';
import {StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button} from 'react-native';

 
export default class App extends Component {

  static navigationOptions = {
    title: 'Welcome',
    headerStyle: {backgroundColor: 'blue'},
    headerTitleStyle: {color: 'green'},
    headerRight: <Button title="Open"/>,
    headerLeft: <Image
    style={{width: 25, height: 25}}
    source={require('./tiny_logo.png')}/>
  };

  state = {name: ''}

  render() {
    return (
      <View style={styles.container}>
        <Text>OLHA MUNDO</Text>
        <TextInput onChangeText={text => this.setState({name: text})}
          value={this.state.name}
        />
        <Button
          title="Go to profile"
          onPress={() => this.props.navigation.navigate('Profile', {name: this.state.name})}
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
