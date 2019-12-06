import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  DrawerLayoutAndroid,
  Switch,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import MessagesScreen from './MessagesScreen'
import InputScreen from './InputScreen';
import api from './api';


class App extends Component {

  state = {messages: [], name: '', active: true}

  componentDidMount() {
    AsyncStorage.getItem('name')
    .then((v) => this.setState({name: v || ''}))
    api.getLastMessages().then((messages) => {
      this.setState({messages: messages.filter((message) => message.mensagem && !message.mensagem.private)})
    })
    setInterval(() => {
      if(this.state.active) {
        let messages = this.state.messages
        let id = messages.length > 0 ? messages[messages.length - 1].id : 0;
        api.getMessagesSince(id).then((newMessages) => {
          newMessages.forEach((message) => {
            if(message.mensagem && !message.mensagem.private)
                messages.push(message)
          })
          this.setState({messages: messages})
        })
      }
    }, 1000)
  }

  onSubmit = (text) => {
    return api.insertNewMessage(text, this.state.name)
  }

  getDrawer() {
    return (<View style={{flex: 1, backgroundColor: 'rgb(240,240,240)'}}>
      <TextInput 
      placeholder="Nome ..."
      onChangeText={(text) => this.setState({name: text}, () => {
        AsyncStorage.setItem('name', this.state.name)
      })}
      value={this.state.name}></TextInput>
      <Switch
        value={this.state.active}
        onValueChange={(v) => this.setState({active: v})}
        ></Switch>

    </View>)
  }

  render() {
    
    return (
      <DrawerLayoutAndroid
        ref={'DRAWER'}
        drawerWidth={300}
        drawerPosition={"left"}
        renderNavigationView={() => this.getDrawer()}>
        <View style={styles.container}>
          <View style={styles.mensagens}>
             <MessagesScreen messages={this.state.messages} />
          </View>
          <View style={styles.input}>
            <InputScreen  
            onSubmit={this.onSubmit}/>
          </View>
       </View>
    </DrawerLayoutAndroid>)
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
