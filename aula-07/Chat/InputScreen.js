import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
} from 'react-native';

class InputScreen extends Component {
    state = {currentText: ''}
    render() {
        return(<View style={styles.container}>
           <TextInput
              placeholder="Mensagem ..."
              onChangeText={(text) => this.setState({currentText: text})}
              value={this.state.currentText}
          />
          <Button title="Enviar" onPress={() => { 
	          this.props.onSubmit(this.state.currentText)
	          }}>
          </Button>
        </View>)
    }
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      flexDirection: 'row',
      margin: 20
  }
});

export default InputScreen;