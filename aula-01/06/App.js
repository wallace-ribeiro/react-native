import React, { Component } from 'react';
import { StyleSheet, Image, TouchableHighlight, ScrollView, Text, TextInput, View, Button } from 'react-native';



class ListaMensagens extends Component {
  
  constructor(props) {
    super(props)
  }
  
  render() {
    return (<View style={styles.text}>
          <ScrollView>
            <View style={styles.list}>
              {this.props.textos.map((texto, index) => (<Text key={index}>{texto}</Text>))}
            </View>
          </ScrollView>
        </View>)
  }
}
export default class App extends Component {
  
  state = {textos: [], currentText: ''}
  render() {
    return (
      
      <View style={styles.container}>
        <ListaMensagens textos={this.state.textos}/>
        <View style={styles.insertion}>
        <TextInput
          placeholder="Escreva aqui"
          onChangeText={(text) => this.setState({currentText: text})}
          value={this.state.currentText}
        />
        
        <TouchableHighlight style={{width: 66, height: 58}} onPress={() => { 
	  let textos = this.state.textos
	  textos.push(this.state.currentText)
	  this.setState({textos: textos})
	  
	}}><Image
          style={{width: 66, height: 58}}
          source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}/></TouchableHighlight>
	</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  insertion: {
	      flex: 2,
	      maxHeight: '200px'
	    }
	    ,
  text: {
	      flex: 3,
	      maxHeight: '500px',
	      width: '80%'
	    },
   list: {
     flex: 4,
     width: '80%'
     
  },
  button: {
    flex: 5,
    
  }
});
