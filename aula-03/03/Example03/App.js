import React, {Component} from 'react';
import {StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  TouchableHighlight,} from 'react-native';
 
export default class App extends Component {

  render() {
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
        <TouchableHighlight onPress={() => this.refs['DRAWER'].closeDrawer()}>
                <Text>{'Close Drawer'}</Text>
              </TouchableHighlight>
      </View>
    );
    return (
      <DrawerLayoutAndroid
        ref={'DRAWER'}
        drawerWidth={300}
        drawerPosition={"left"}
        renderNavigationView={() => navigationView}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>

          <TouchableHighlight onPress={() => this.refs['DRAWER'].openDrawer()}>
            <Text>{'Open Drawer'}</Text>
          </TouchableHighlight>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}
 
const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#db4b3f',
    height: 56
  }
});