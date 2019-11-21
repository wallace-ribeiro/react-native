
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Animated
} from 'react-native';

export default class App extends Component {
  
  
  state = {positions: [{posX: new Animated.Value(30), posY: new Animated.Value(30), pressing: false, backgroundColor: 'red'}, 
    {posX: new Animated.Value(30), posY: new Animated.Value(130), pressing: false, backgroundColor: 'green'},
    {posX: new Animated.Value(30), posY: new Animated.Value(230), pressing: false, backgroundColor: 'blue'}
  ]}
  
  render() {
    
    return (<View style={{ backgroundColor: 'orange', flex: 1, height: '100%', width: '100%'}}
        
      >
      {this.state.positions.map((position, i) => (<Animated.View key={i} 
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
	    //position.pressing = true;
      Animated.timing(                 
            position.posX,           
            {
              toValue: evt.nativeEvent.pageX - position.baseX,               
              duration: 0,             
            }
          ).start(); 
      Animated.timing(                 
            position.posY,           
            {
              toValue: evt.nativeEvent.pageY - position.baseY,               
              duration: 0,             
            }
          ).start();
	}}>
        </Animated.View>))}
    </View>)
  }
};

