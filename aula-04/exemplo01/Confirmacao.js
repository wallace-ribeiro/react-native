 
import React, {Component} from 'react';
import {StyleSheet,
  Text,
  KeyboardAvoidingView,
  View,
  StatusBar,
  TextInput,
  Switch,
  Image} from 'react-native';

 
export default class App extends Component {

  static navigationOptions = {
    title: 'Confirmacao',
    headerStyle: {backgroundColor: 'rgb(255,185,2)'},
    headerTitleStyle: {color: 'black'},
  };

  state = {valor: false}

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
        <StatusBar backgroundColor="rgb(230, 167, 0)" />
        <View style={{flex: 1, flexGrow: 1}}>
            <View style={styles.insertField}>
              <Text style={styles.textLabel}>ENDERECO DE PARTIDA</Text>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end'}}>
                  <View style={{flex: 1, flexGrow: 3, justifyContent: 'flex-end', padding: 0, borderBottomColor: 'rgb(147, 146, 144)', borderBottomWidth: 1, height: 40}}>
                    <TextInput style={{color: 'white',paddingBottom: 0,  height: 21, paddingTop: 0}}
                      placeholderTextColor={'rgb(147, 146, 144)'}
                      placeholder="Rua"
                    />
                  </View>
                  <View style={{flex: 1, flexGrow: 1, marginLeft: 10, justifyContent: 'flex-end', borderBottomColor: 'rgb(147, 146, 144)', borderBottomWidth: 1, height: 40}}>
                    <TextInput style={{color: 'white',paddingBottom: 0, height: 21, paddingTop: 0, marginTop: 3}}
                      placeholderTextColor={'rgb(147, 146, 144)'}
                      placeholder="Numero"
                    />
                  </View>
                  
                    <Image
                     style={{width: 20, height: 20, marginLeft: 5, margin: 0}}
                     source={require('./star.png')}/>
                  
              </View>
              <View style={{flex: 1,  borderBottomColor: 'rgb(147, 146, 144)', justifyContent: 'flex-end', borderBottomWidth: 1, height: 40}}>
                <TextInput style={{color: 'white',paddingBottom: 0, height: 21, paddingTop: 0}}
                   placeholderTextColor={'rgb(147, 146, 144)'}
                   placeholder="Ex.: em frente ao mercado"
                    />
              </View>
            </View>
            <View style={[styles.insertField, {justifyContent: 'flex-start'}]}>
              <Text style={[styles.textLabel, { flex: 1, maxHeight: 20}]}>DESTINO</Text>
              <View style={{flex: 1,borderBottomColor: 'rgb(147, 146, 144)', maxHeight: 40, justifyContent: 'flex-end', borderBottomWidth: 1, height: 40}}>
                <TextInput style={{color: 'white',paddingBottom: 0, height: 21, paddingTop: 0}}
                   placeholderTextColor={'rgb(147, 146, 144)'}
                   placeholder="Adicionar destino"
                />
              </View>
            </View>
        </View>
        <View style={{backgroundColor: 'rgb(90, 89, 85)', height: 2}}/>
        <View style={{flex: 2, flexGrow: 1}}>
            <View style={[styles.insertField, {flexGrow: 4, justifyContent: 'flex-start'}]}>
              <Text style={[styles.textLabel, { flex: 1, maxHeight: 20}]}>PAGAMENTO & PROMOCAO</Text>
              <Text style={{color: 'rgb(167, 166, 164)'}} >Cartao de Credito no App</Text>
            </View>
            <View style={{backgroundColor: 'rgb(90, 89, 85)', height: 2}}/>
            <View style={[styles.insertField, {flexGrow: 4,justifyContent: 'flex-start'}]}>
              <Text style={[styles.textLabel, { flex: 1, maxHeight: 20}]}>OPCAO DO CARRO</Text>
              <Text style={{color: 'rgb(167, 166, 164)'}} >EasyPlus+</Text>
            </View>
            <View style={{backgroundColor: 'rgb(90, 89, 85)', height: 2}}/>
            <View style={[{flex: 1, flexGrow: 3, marginLeft: 15, justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}]}>
                <Text style={[styles.textLabel, { flex: 1}]}>EASY SHARE</Text>   
                <Switch thumbColor="rgb(239, 177, 10)"
		         value={this.state.valor}
                        trackColor={{false: 'black', true: 'rgb(136, 114, 56)'}}
                         onValueChange={(v) => this.setState({valor: v})}
                ></Switch>
            </View>
            <View style={{backgroundColor: 'rgb(90, 89, 85)', height: 2}}/>
            <View style={{flex: 1, flexGrow: 1}}>
            </View>
            <View style={{flex: 1, backgroundColor: 'rgb(84, 83, 79)', flexGrow: 4,justifyContent: 'flex-start'}}>
              
                <View style={{flex: 1, backgroundColor: 'rgb(239, 177, 10)', margin: 10, alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={ { flex: 1, maxHeight: 20, color: 'black'}}>CONFIRMAR</Text>
                </View>
              
            </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(81, 80, 76)'
  },
  textLabel: {
    flex: 1,
    color: 'rgb(239, 177, 10)',
  },
  insertField: {
    flex: 1,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15
  }
});
 
 
