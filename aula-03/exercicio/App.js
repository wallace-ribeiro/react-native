import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import Slider from '@react-native-community/slider';


export default class App extends Component {
  
  state = {tabuleiro: [ ['white', 'black', 'white', 'black', 'white', 'black'],
    ['black', 'white', 'black', 'white', 'black', 'white'],
    ['white', 'black', 'white', 'black', 'white', 'black'],
    ['black', 'white', 'black', 'white', 'black', 'white'],
    ['white', 'black', 'white', 'black', 'white', 'black'],
    ['black', 'white', 'black', 'white', 'black', 'white']
  ], cor: 'rgb(0, 0, 0)', r: 0, g: 0, b: 0}
  
  onClickPiece(i, j){
    let tabuleiro = this.state.tabuleiro
    tabuleiro[i][j] = this.state.cor
    this.setState({tabuleiro: tabuleiro})
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tabuleiro}>
          {  this.state.tabuleiro.map((linha, i) => 
	     (<View key={i} style={styles.row}>{
               linha.map((cor, j) => (<TouchableHighlight key={`${i}_${j}`} onPress={() => this.onClickPiece(i, j)} ><View key={`${i}_${j}`} style={[styles.piece, {backgroundColor: cor}]}/></TouchableHighlight>))}
	     </View>))
	  }
        </View>
        <View style={[styles.selectedColor, {backgroundColor: this.state.cor}]}/>
        <View style={styles.sliderStyle}>
            <Text>R:</Text>
            <Slider
                style={{width: 200, height: 20}}
                minimumValue={0}
                maximumValue={255}
                step={1}
                onValueChange={(v) => {
	            this.setState({r: v})
		    this.setState({cor: `rgb(${v}, ${this.state.g}, ${this.state.b})`})
	        }}
            />
            <Text style={{width: 40}}>{this.state.r}</Text>
        </View>
        <View style={styles.sliderStyle}>
            <Text>G:</Text>
            <Slider
                style={{width: 200, height: 20}}
                minimumValue={0}
                maximumValue={255}
                step={1}
                onValueChange={(v) => {
	            this.setState({g: v})
		    this.setState({cor: `rgb(${this.state.r}, ${v}, ${this.state.b})`})
	        }}
            />
            <Text style={{width: 40}}>{this.state.g}</Text>
        </View>
        <View style={styles.sliderStyle}>
            <Text>B:</Text>
            <Slider
                style={{width: 200, height: 20}}
                minimumValue={0}
                maximumValue={255}
                step={1}
                onValueChange={(v) => {
	            this.setState({b: v})
		    this.setState({cor: `rgb(${this.state.r}, ${this.state.g}, ${v})`})
	        }}
            />
            <Text style={{width: 40}}>{this.state.b}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  tabuleiro: {
    flex: 1,
    marginTop: 15,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 2,
    maxHeight: 210,
    height: 210,
    maxWidth: 214
  },
  row: {
    flex: 1,
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
  selectedColor: {
    flex: 1,
    marginTop: 15,
    marginBottom: 15,
    alignItems: 'center',
    backgroundColor: '#000000',
    justifyContent: 'center',
    height: 35,
    maxHeight: 35,
    width: 35
  },
  sliderStyle: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 35,
  },
});

/*
 to install slider use:
 yarn add @react-native-community/slider
 */
