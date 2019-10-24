import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Modal, Alert, TextInput, TouchableHighlight } from 'react-native';

export default class App extends Component {
  
  state = {modalVisible: false, count: 0, decrement: ''}
  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide" //fade, none
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({modalVisible: false})
	    this.setState({decrement: ``})
          }}>
          <View style={{flex: 2, marginTop: 40, borderColor: 'black', borderWidth: 2, 
	                 maxHeight: 200, justifyContent: 'center', alignItems: 'center'}}>
            <TextInput
              placeholder="Digite quanto de decremento aqui ..."
              onChangeText={(text) => this.setState({decrement: text})}
              value={this.state.decrement}
            />
              <View style={{flex: 2, flexDirection: 'row'}}> 
                <TouchableHighlight
                  onPress={() => {
                    this.setState({modalVisible: false})
		    this.setState({decrement: ``})
                    Alert.alert(`Sem decremento`)
                  }}>
                  <Text style={{backgroundColor: `red`, marginRight: 8}}>Cancelar</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => {
                    this.setState({count: this.state.count - Number(this.state.decrement)})
		    this.setState({decrement: ``})
                    this.setState({modalVisible: false})
                  }}>
                  <Text style={{backgroundColor: `orange`, marginLeft: 8}}>Decrementar</Text>
                </TouchableHighlight>
              </View>
          </View>
        </Modal>
        <Text>{this.state.count}</Text>
        <Button title="Add" onPress={() => {
            this.setState({count: this.state.count + 1})
          }}>
        </Button>
        <Button title="Sub" onPress={() => {
          this.setState({modalVisible: true})
          }}>
        </Button>
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
});
