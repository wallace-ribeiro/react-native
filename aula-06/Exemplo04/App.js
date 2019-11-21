import React, {Component} from 'react';
import {
  Animated,
  View,
} from 'react-native';

export default class App extends Component {

  state = {spin: new Animated.Value(0), rotation: 1}
  render() {
    return (<View style={{flex: 1, backgroundColor: 'orange', }}>
        
        <Animated.View onStartShouldSetResponder={() => {
          let rotation = this.state.rotation
          this.setState({rotation: rotation + 1})
          Animated.timing(                 
              this.state.spin,           
            {
              toValue: rotation,               
              duration: 1000,             
            }
          ).start(); 
          }} style={{position: 'absolute', top: 50, left: 80, height: 80, width: 50, transform: [{rotate: this.state.spin}], backgroundColor: 'blue'}}></Animated.View>
    </View>)
  }
};