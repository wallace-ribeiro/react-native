import React, {Component} from 'react';
import {
  TouchableHighlight,
  SectionList,
  StyleSheet,
  Text,
  View
} from 'react-native';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

class Item extends Component {

  constructor(props) {
    super(props)
  }

  render () {
    return (
      <TouchableHighlight
        style={styles.item}
      >
        <Text style={styles.title}>{this.props.title}</Text>
      </TouchableHighlight>
    );
  }
}

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
      <SectionList
        sections={DATA}
        renderItem={({ item }) => (
          <Item
            title={item}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
  },
  title: {
    fontSize: 32,
  },
});
