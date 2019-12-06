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
           <View style={styles.input}>
             <TextInput
              
              placeholder="Mensagem ..."
              onChangeText={(text) => this.setState({currentText: text})}
              value={this.state.currentText}
            />
          </View>
          <View style={styles.button}>
            <Button title="Enviar" onPress={() => { 
	          this.props.onSubmit(this.state.currentText).then(() => this.setState({currentText: ''}))
	          }}>
            </Button>
          </View>
        </View>)
    }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'rgb(230, 230, 230)',
    flexDirection: 'row',
  },
  input: {
    backgroundColor: 'white',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    flex: 1,
    flexGrow: 1
  },
  button: {
    marginLeft: 10,
    marginRight: 20,
    justifyContent: 'center'
  }
});

export default InputScreen;