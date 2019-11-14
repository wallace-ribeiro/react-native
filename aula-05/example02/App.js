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
  Vibration,
  Dimensions,
} from 'react-native';

export default class App extends Component {
  
  
  state = {positions: [{posX: 30, posY: 30, pressing: false, backgroundColor: 'red'}, 
    {posX: 30, posY: 130, pressing: false, backgroundColor: 'green'},
    {posX: 30, posY: 230, pressing: false, backgroundColor: 'blue'}
  ]}
  
  updatePosition(index){
    let a = setInterval(() => {
      
      let positions = this.state.positions;
      let position = positions[index]
      
      position.posX = position.posX + (position.speedX)
      position.posY = position.posY + (position.speedY)
      position.speedX = position.speedX - (position.originalSpeedX/30)
      position.speedY = position.speedY - (position.originalSpeedY/30)
      position.steps = position.steps -1 
      positions[index] = position;
      if(position.steps <= 0 || position.posX <= 0 
	|| position.posY <= 0 
	|| (position.posX + 56) >= Dimensions.get('window').width 
	|| (position.posY  + 56) >= Dimensions.get('window').height  
      ) {
	clearInterval(a)
      } else {
        this.setState({positions: positions})
      }
      
    },100)
  }
  
  render() {
    
    return (<View style={{ backgroundColor: 'orange', flex: 1, height: '100%', width: '100%'}}
        
      >
      {this.state.positions.map((position, i) => (<View key={i} 
          style={{position: 'absolute',backgroundColor: position.backgroundColor, flex: 1,
	    height: 56, width: 56, borderRadius: 28, left: position.posX, top: position.posY}}
          onResponderRelease={(evt) => {console.log('released: ')
	    let positions = this.state.positions;
	    let position = positions[i]
	    let now = Date.now();
	    let m = (now - position.now)/1000
	    position.speedX = position.speedX*m;
	    position.speedY = position.speedY *m;
	    position.originalSpeedX = position.speedX ;
	    position.originalSpeedY = position.speedY;
	    positions[i] = position;
	    this.setState({positions: positions})
	    this.updatePosition(i)
	    Vibration.cancel();
	  }}
          onStartShouldSetResponder={(evt) => {
	    console.log('onStartShouldSetResponder: ',i); 
	    let positions = this.state.positions;
	    let position = positions[i]
	    position.pressing = true;
	    position.baseX = evt.nativeEvent.locationX;
	    position.baseY = evt.nativeEvent.locationY;
	    let x = evt.nativeEvent.locationX - 28
	    let y = evt.nativeEvent.locationY - 28
	    let vetor = Math.sqrt((x * x) + (y * y))
	    x = x/vetor
	    y = y/vetor
	    x = x * -1
	    y = y * -1
	    position.speedX = x*14;
	    position.speedY = y*14;
	    position.originalSpeedX = position.speedX ;
	    position.originalSpeedY = position.speedY;
	    position.steps = 30;
	    let now = Date.now();
	    position.now = now;
	    positions[i] = position;
	    this.setState({positions: positions})
	    Vibration.vibrate(1000000000000000, true);
	    return true
	    
	  }}
          onMoveShouldSetResponder={(evt) => {console.log('onMoveShouldSetResponder: '); return true}}
          onResponderMove={(evt) => {console.log('move', i)
	    //let positions = this.state.positions;
	    //let position = positions[i]
	    //position.pressing = true;
	    //position.posX = (evt.nativeEvent.pageX - position.baseX)
	    //position.posY = (evt.nativeEvent.pageY - position.baseY)
	    //positions[i] = position;
	    //this.setState({positions: positions})
	}}>
        </View>))}
    </View>)
  }
};

