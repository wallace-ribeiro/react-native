import React, {Component} from 'react';
import {StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,} from 'react-native';

import ViewPager from '@react-native-community/viewpager';
 
export default class App extends Component {

  state={pageScroll: '', pageScrollStateChanged: 'State: ', page: 0}

  render() {
    return (
      <View style={styles.container}>
        <ViewPager style={styles.viewPager} initialPage={0} pageMargin={2}
            ref={'PAGER'}
            onPageScroll={(event) => this.setState({pageScroll: `Position ${event.nativeEvent.position} - Offset: ${event.nativeEvent.offset}`})}
            onPageScrollStateChanged={(event) => this.setState({pageScrollStateChanged: `State: ${event.nativeEvent.pageScrollState}`})}
            onPageSelected={(event) => this.setState({page: event.nativeEvent.position})}
        >
          <View key="1" >
            <Text>First page</Text>
          </View>
          <View key="2" style={{backgroundColor: 'blue'}}>
            <Text>Second page</Text>
          </View>
          <View key="3" style={{backgroundColor: 'green'}}>
            <Text>Third page</Text>
          </View>
          <View key="4" style={{backgroundColor: 'red'}}>
            <Text>Fourth page</Text>
          </View>
          <View key="5" style={{backgroundColor: 'yellow'}}>
            <Text>Fifth page</Text>
          </View>
        </ViewPager>
        <View style={styles.view}>
          <Button title="Next" onPress={() => { 
            let page = Number(this.state.page) + 1
            if(page == 5)
            page = 0

            this.refs['PAGER'].setPage(page)
            this.setState({page: page})}}
          >
          </Button>
          <Text>{this.state.pageScroll}</Text>
          <Text>{this.state.pageScrollStateChanged}</Text>
          <Text>PAGE: {this.state.page}</Text>
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  viewPager: {
    flex: 1
  },
  view:{
    backgroundColor: 'pink',
    height: 100
  }
});

//para instalar o viewpager use o comando: yarn add @react-native-community/viewpager
//orientation: horizontal, vertical
//transitionStyle: scroll, curl
