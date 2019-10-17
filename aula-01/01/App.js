import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends Component {
  
  render() {
    let i = [0, 1, 2, 3,4, 5];
    return (
      <View style={styles.container}>
        {  i.map((j) => 
             (<Text>OLaH mundo! {j}</Text>)
	   )
	}
        <Button title="Pressione"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
