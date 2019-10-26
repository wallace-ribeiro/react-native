import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends Component {
  
  state = {tabuleiro: [ ['white', 'black', 'white', 'black', 'white', 'black'],
    ['black', 'white', 'black', 'white', 'black', 'white'],
    ['white', 'black', 'white', 'black', 'white', 'black'],
    ['black', 'white', 'black', 'white', 'black', 'white'],
    ['white', 'black', 'white', 'black', 'white', 'black'],
    ['black', 'white', 'black', 'white', 'black', 'white']
  ]}
  render() {
    return (
      <View style={styles.container}>
        {  this.state.tabuleiro.map((linha, i) => (<View key={i} style={styles.row}>{
             linha.map((cor, j) => (<View key={`${i}_${j}`} style={[styles.piece, {backgroundColor: cor}]}/>))}
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
  piece: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000000',
    justifyContent: 'center',
    height: 35,
    width: 35
  },
});
