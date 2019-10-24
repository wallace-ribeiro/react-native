import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, RefreshControl } from 'react-native';

export default class App extends Component {

  state = {refreshing: false}



  onRefresh() {
    this.setState({refreshing: true})
    setTimeout(() => this.setState({refreshing: false}), 3000)
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl refreshing={this.state.refreshing} onRefresh={() => this.onRefresh()} />
          }
        >
          <Text>Pull down to see RefreshControl indicator</Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#98FB98',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

