import React, { Component } from 'react';
import { StyleSheet, Image, TouchableHighlight, ScrollView, Text, TextInput, View, Button } from 'react-native';



class ListaMensagens extends Component {
  
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <View style={styles.text}>
        <ScrollView>
          <View style={styles.list}>
            {this.props.texts.map((text, index) => (<Text key={index}>{text}</Text>))}
          </View>
        </ScrollView>
      </View>)
  }
}

export default class App extends Component {
  
  state = {texts: [], currentText: ''}

  render() {
    return (
      
      <View style={styles.container}>
        <ListaMensagens texts={this.state.texts}/>
        <View style={styles.insertion}>
          <TextInput
            placeholder="Escreva aqui"
            onChangeText={(text) => this.setState({currentText: text})}
            value={this.state.currentText}
          />
          <TouchableHighlight style={{width: 64, height: 64}} onPress={() => { 
	            let texts = this.state.texts
	            texts.push(this.state.currentText)
	            this.setState({texts: texts})
	          }}>
            <Image
              style={{width: 66, height: 58}}
              source={require('./tiny_logo.png')}/>
          </TouchableHighlight>
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
	  maxHeight: 200
	},
  text: {
	  flex: 3,
	  maxHeight: 500,
	  width: '80%'
	},
  list: {
    flex: 4,
    width: '80%'
  },
  button: {
    flex: 5
  }
});
