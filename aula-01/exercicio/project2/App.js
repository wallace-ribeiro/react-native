import React, { Component } from 'react';
import { StyleSheet,  View, TouchableHighlight, TextInput } from 'react-native';

export default class App extends Component {
  
  state = {tabuleiro: [ ['white', 'black', 'white', 'black', 'white', 'black'],
    ['black', 'white', 'black', 'white', 'black', 'white'],
    ['white', 'black', 'white', 'black', 'white', 'black'],
    ['black', 'white', 'black', 'white', 'black', 'white'],
    ['white', 'black', 'white', 'black', 'white', 'black'],
    ['black', 'white', 'black', 'white', 'black', 'white']
  ]}

  clique(i, j) {
    console.log(this.state)
    let tabuleiro = this.state.tabuleiro
    tabuleiro[i][j] = this.state.cor
    this.setState({tabuleiro: tabuleiro})
  }

  render() {

    
    return (
      <View style={styles.container}>
        {  this.state.tabuleiro.map((linha, i) => 
            (<View key={i} style={styles.row}>{
               linha.map((cor, j) => (<TouchableHighlight 
               onPress={() => this.clique(i, j)} 

               style={[styles.piece, {backgroundColor: cor}]} key={`${i}_${j}_touch`}>
                 <View key={`${i}_${j}`} style={[styles.piece, {backgroundColor: cor}]}/
                 ></TouchableHighlight>))}
	           </View>))
  }
      <TextInput 
        placeholder="Escreva aqui"
        onChangeText={(text) => this.setState({cor: text})}
        value={this.state.cor}
      ></TextInput>
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
