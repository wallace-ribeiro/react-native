import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, TextInput, View, Button } from 'react-native';

export default class App extends Component {
  
  state = {texts: [], currentText: ''}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.text}>
          <ScrollView>
            <View style={styles.list}>
              {this.state.texts.map((text, index) => (<Text key={index}>{text}</Text>))}
            </View>
          </ScrollView>
        </View>
        <View style={styles.insertion}>
          <TextInput
            placeholder="Escreva aqui"
            onChangeText={(text) => this.setState({currentText: text})}
            value={this.state.currentText}
          />
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
