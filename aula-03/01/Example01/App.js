import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Slider from '@react-native-community/slider';

export default class App extends Component {

  state = {valor: 0}

  render() {
    return (
      <View style={styles.container}>
      <Text>{this.state.valor}</Text>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          value={this.state.valor}
          inverted={false}
          step={1}
	        onValueChange={(v) => this.setState({valor: v})}
        />  
      </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  }
});
