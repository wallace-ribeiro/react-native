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
          let velocity = 0.4
          if(this.state.opened) {
            velocity = -0.4
          }
          this.setState({opened: !this.state.opened})
          Animated.decay(                 
              this.state.width,           
            {
              velocity: velocity            
            }
          ).start(); 
          }} style={{position: 'absolute', top: 50, left: 80, height: 80, width: this.state.width, backgroundColor: 'blue'}}></Animated.View>
    </View>)
  }
};