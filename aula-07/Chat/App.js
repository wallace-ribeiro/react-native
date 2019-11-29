import React, {Component} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import MessagesScreen from './MessagesScreen'
import InputScreen from './InputScreen';
import api from './api';


class App extends Component {

  state = {messages: [], name: 'Wallace'}

  componentDidMount() {
    api.getLastMessages().then((messages) => {
      this.setState({messages: messages.filter((message) => !message.mensagem.private)})
    })
    setInterval(() => {
      let messages = this.state.messages
      let id = messages.length > 0 ? messages[messages.length - 1].id : 0;
      api.getMessagesSince(id).then((newMessages) => {
        newMessages.forEach((message) => {
          if(!message.mensagem.private)
              messages.push(message)
        })
        this.setState({messages: messages})
      })
    }, 1000)
  }

  onSubmit = (text) => {
      api.insertNewMessage(text, this.state.name)
  }

  render() {
    
    return (<View style={styles.container}>
      <View style={styles.mensagens}>
         <MessagesScreen messages={this.state.messages} />
      </View>
      <View style={styles.input}>
        <InputScreen  
        onSubmit={this.onSubmit}/>
      </View>
    </View>)
  }
};

const styles = StyleSheet.create({
  container: {flex: 1},
  mensagens: {
    flex: 1,
    flexGrow: 1,
  },
  input: {
     minHeight: 100
  }
});

export default App;
