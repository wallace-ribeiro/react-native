import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, TextInput, View, Button, Picker,  } from 'react-native';



class ListaMensagens extends Component {
  
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <View style={styles.text}>
        <ScrollView>
          <View style={styles.list}>
            {this.props.texts.map((text, index) => (<Text style={{color: this.props.cor}}key={index}>{text}</Text>))}
          </View>
        </ScrollView>
      </View>)
  }
}
export default class App extends Component {
  
  state = {texts: [], currentText: '', cor: 'black'}
  render() {
    return (
      <View style={styles.container}>
        <ListaMensagens texts={this.state.texts} cor={this.state.cor}/>
        <View style={styles.insertion}>
          <TextInput
            placeholder="Escreva aqui"
            onChangeText={(text) => this.setState({currentText: text})}
            value={this.state.currentText}
          />
          <Picker
              selectedValue={this.state.cor}
              style={{height: 50, width: 100}}
              onValueChange={(itemValue, itemIndex) => this.setState({cor: itemValue})}
          >
            <Picker.Item label="Azul" value="blue" />
            <Picker.Item label="Preto" value="black" />
          </Picker>
          <Button title="Add" onPress={() => { 
	            let texts = this.state.texts
	            texts.push(this.state.currentText)
	            this.setState({texts: texts})
	          }}>
          </Button>
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
  }
});
