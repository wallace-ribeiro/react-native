import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text
} from 'react-native';

class Message extends Component {

    constructor(props) {
      super(props)
    }
  
    render () {
      return (
        <View style={styles.item}
        >
          <View style={styles.name}>
            <Text >{this.props.name}</Text>
          </View>
          <View style={styles.msg}>
            <Text >{this.props.msg}</Text>
          </View>
        </View>
      );
    }
}

class MessagesScreen extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (<View>
      <FlatList
        data={this.props.messages}
        renderItem={({ item }) => (
          <Message
            name={item.mensagem.name}
            msg={item.mensagem.msg} 
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>)
  }
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        
        flex: 1,
        flexDirection: 'row',
        marginVertical: 8,
        marginHorizontal: 16,
    },
    name: {padding: 20, 
        marginRight: 10, 
        backgroundColor: '#f9c2ff',},
    msg: {padding: 20, 
        backgroundColor: '#f9c2ff', flexGrow: 1}
});

export default MessagesScreen;