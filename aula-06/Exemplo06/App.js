import React, {Component} from 'react';
import {
  Animated,
  View,
} from 'react-native';

export default class App extends Component {

  state = {width: new Animated.Value(50), opened: false, imageSize: new Animated.Value(80), spin: new Animated.Value(0)}
  render() {
    const spin = this.state.spin.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    return (<View style={{flex: 1, backgroundColor: 'orange', }}>
        
        <Animated.View onStartShouldSetResponder={() => {
          let width = 200
          let imageSize = 150
          if(this.state.opened) {
            width = 50
            imageSize = 80
          }
          this.setState({opened: !this.state.opened})
          Animated.parallel([
            Animated.timing(                 
              this.state.width,           
            {
              toValue: width,               
              duration: 3000,             
            }),
            Animated.spring(                 
              this.state.imageSize,           
            {
              toValue: imageSize,               
              friction: 1,    
              tension: 1,         
            }
          )
          ]).start(); 
          }} style={{position: 'absolute', top: 50, left: 80, height: 80, width: this.state.width, backgroundColor: 'blue'}}></Animated.View>
        <Animated.Image resizeMode={'center'} style={{position: 'absolute', top: 300, left: 80,  width: this.state.imageSize, height: this.state.imageSize,
        transform: [{rotate: spin}]  }} source={require('./reactjs.png')}
        onStartShouldSetResponder={() => {
          Animated.sequence([
            Animated.timing(                 
              this.state.spin,           
            {
              toValue: 1,               
              duration: 1000,             
            }),
            Animated.timing(                 
              this.state.spin,           
            {
              toValue: 0,               
              duration: 1000,             
            }),
          ]).start(); 
          }}
        />
    </View>)
  }
};