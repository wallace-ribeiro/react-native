import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Dimensions } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props)
  }
  
  state = {text: '', currentText: ''}

  componentDidMount() {
    this.getScreenSize()
  }

  getScreenSize = () => {  
    const screenWidth = Math.round(Dimensions.get('window').width);  
    const screenHeight = Math.round(Dimensions.get('window').height);  
    this.setState({ screenWidth: screenWidth, screenHeight: screenHeight })  
  }  

  render() {
    return (
      <View style={styles.container}>
        <View style={{...styles.text, maxHeight: this.state.screenHeight ? Number(this.state.screenHeight) - 100 : `100%`}}>
          <Text>Height: {this.state.screenHeight} X Width: {this.state.screenWidth}</Text>
          <Text>{this.state.text}</Text>
          <TextInput
            placeholder="Escreva aqui"
            onChangeText={(text) => this.setState({currentText: text})}
            value={this.state.currentText}
          />
        </View>
        <Button title="Add" onPress={() => this.setState({text: this.state.currentText})}></Button>
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
  text: {
    flex: 2,
    borderColor: 'black',
    borderWidth: 2,
    maxHeight: 200
  }
});
