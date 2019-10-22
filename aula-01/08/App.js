import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, TextInput, View, Button } from 'react-native';



class ListaMensagens extends Component {
  
  constructor(props) {
    super(props)
  }
  
  
  render() {
    return (
      <View style={styles.text}>
        <ScrollView>
          <View style={styles.list}>
            {this.props.texts.map(({mensagem}, index) => (<Text key={index}>{mensagem.name}: {mensagem.msg}</Text>))}
          </View>
        </ScrollView>
      </View>)
  }
}
export default class App extends Component {
  
  state = {texts: [], currentText: '', nome: ''}
  
  componentDidMount() {
    fetch('http://104.248.235.252:3005/api/mensagens/10').then( (response) => response.json()).then((responseJson) => {
	     this.setState({texts: responseJson})
   })
  }
  
  insertNewMessage() {
    fetch('http://104.248.235.252:3005/api/mensagens/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({msg: {msg: this.state.currentText, name: this.state.nome}}),
    }).then(() => {
      fetch('http://104.248.235.252:3005/api/mensagens/since/'+(this.state.texts.length > 0 ? this.state.texts[this.state.texts.length -1].id : 0)).then( (response) => response.json()).then((responseJson) => {
             console.log('response: ',responseJson);
	     let texts = this.state.texts
	     responseJson.forEach((msg) => texts.push(msg))
	     this.setState({texts: texts})
      })
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ListaMensagens texts={this.state.texts}/>
        <View style={styles.insertion}>
          <TextInput
            placeholder="Seu nome ..."
            onChangeText={(text) => this.setState({nome: text})}
            value={this.state.nome}
          />
          <TextInput
            placeholder="Escreva aqui"
            onChangeText={(text) => this.setState({currentText: text})}
            value={this.state.currentText}
          />
          <Button title="Add" onPress={() => { 
	          this.insertNewMessage()
	  
         	  }}
          >
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
