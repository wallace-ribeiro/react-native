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
  
  
  state = {positions: [{posX: 30, posY: 30, pressing: false, backgroundColor: 'red'}, 
    {posX: 30, posY: 130, pressing: false, backgroundColor: 'green'},
    {posX: 30, posY: 230, pressing: false, backgroundColor: 'blue'}
  ]}
  
  render() {
    
    return (<View style={{ backgroundColor: 'orange', flex: 1, height: '100%', width: '100%'}}
        
      >
      {this.state.positions.map((position, i) => (<View key={i} 
          style={{position: 'absolute',backgroundColor: position.backgroundColor, flex: 1,
	    height: 55, width: 55, left: position.posX, top: position.posY}}
          onResponderRelease={(evt) => {console.log('released: ')}}
          onStartShouldSetResponder={(evt) => {
	    console.log('onStartShouldSetResponder: ',i); 
	    let positions = this.state.positions;
	    let position = positions[i]
	    position.pressing = true;
	    position.baseX = evt.nativeEvent.locationX;
	    position.baseY = evt.nativeEvent.locationY;
	    positions[i] = position;
	    this.setState({positions: positions})
	    return true
	    
	  }}
          onMoveShouldSetResponder={(evt) => {console.log('onMoveShouldSetResponder: '); return true}}
          onResponderMove={(evt) => {console.log('move', i)
	    let positions = this.state.positions;
	    let position = positions[i]
	    position.pressing = true;
	    position.posX = (evt.nativeEvent.pageX - position.baseX)
	    position.posY = (evt.nativeEvent.pageY - position.baseY)
	    positions[i] = position;
	    this.setState({positions: positions})
	}}>
        </View>))}
    </View>)
  }
};

