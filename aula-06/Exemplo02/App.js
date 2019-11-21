import React, {Component} from 'react';
import {
  Animated,
  View,
} from 'react-native';

export default class App extends Component {

  state = {width: new Animated.Value(50), opened: false}
  render() {
    return (<View style={{flex: 1, backgroundColor: 'orange', }}>
        
        <Animated.View onStartShouldSetResponder={() => {
          let width = 200
          if(this.state.opened) {
            width = 50
          }
          this.setState({opened: !this.state.opened})
          Animated.spring(                 
              this.state.width,           
            {
              toValue: width,               
              friction: 1.6,    
              tension: 0.5,         
            }
          ).start(); 
          }} style={{position: 'absolute', top: 50, left: 80, height: 80, width: this.state.width, backgroundColor: 'blue'}}></Animated.View>
    </View>)
  }
};