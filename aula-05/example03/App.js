/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

export default class App extends Component {
  
  
  state = {positions: []}
  
  render() {
    
    return (<View style={{ backgroundColor: 'orange', flex: 1, height: '100%', width: '100%'}}
        onResponderRelease={(evt) => {console.log('released: ')}}
          onStartShouldSetResponder={(evt) => {
	    let positions = this.state.positions;
	    let position = { backgroundColor: 'black'}
	    position.posX = evt.nativeEvent.locationX + 1;
	    position.posY = evt.nativeEvent.locationY + 1;
	    positions.push(position);
	    this.setState({positions: positions})
	    return true
	    
	  }}
          onMoveShouldSetResponder={(evt) => {console.log('onMoveShouldSetResponder: '); return true}}
          onResponderMove={(evt) => {console.log('move')
	    let positions = this.state.positions;
	    let position = { backgroundColor: 'black'}
	    position.posX = evt.nativeEvent.pageX + 1;
	    position.posY = evt.nativeEvent.pageY + 1;
	    positions.push(position);
	    this.setState({positions: positions})
	    return true
	    
	}}
      >
      {this.state.positions.map((position, i) => (<View key={i} 
          style={{position: 'absolute',backgroundColor: position.backgroundColor, flex: 1,
	    height: 3, width: 3, left: position.posX, top: position.posY}}
          >
        </View>))}
    </View>)
  }
};

