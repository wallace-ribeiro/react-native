import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends Component {
  
  render() {
    let i = [0, 1, 2, 3,4, 5];
    return (
      <View style={styles.container}>
        {  i.map((z, index1) => (<View key={z} style={styles.row}>{
             i.map((j, index) => (<View key={`${z}_${j}`} style={(index1%2 ? index%2 : (index+1)%2) ? styles.blackPiece : styles.whitePiece}/>))}
	   </View>))
	}
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
    borderColor: 'black',
    borderWidth: 2,
    maxHeight: 210,
    maxWidth: 214
  },
  row: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    maxHeight: 35,
  },
  blackPiece: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 35
  },
  whitePiece: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 35
  }
});
