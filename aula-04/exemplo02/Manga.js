 
import React, {Component} from 'react';
import {StyleSheet, Text, ScrollView, Image,
  View} from 'react-native';

  
  
class MangaLine extends Component {
  
  
  render() {
    return (
      <View style={{flex: 1}}>
        
	   <View style={{flex: 1, marginLeft: 2, marginRight: 2, flexDirection: 'row'}}>
        {(this.props.line || []).map((manga, i) => (
	   <View key={i} style={{flex: 1, marginLeft: 2, marginRight: 2, backgroundColor: 'white', marginTop: 2, marginBottom: 2}}>
              <Image
                style={{width: 100, height: 150, resizeMode: `center` }}
                source={require(`./berserk.jpg`)}/>
              <Text>{manga.name}</Text>
           </View>))}
           </View>
    </View>)
  }
}
 
export default class App extends Component {

  static navigationOptions = {
    title: 'MANGA SHOP',
  };

  state = {mangaList: [{name: 'BERSERK', image: './berserk.jpg'}, {name: 'BERSERK', image: './berserk.jpg'}, {name: 'BERSERK', image: './berserk.jpg'},
    {name: 'BERSERK', image: './berserk.jpg'}, {name: 'BERSERK', image: './berserk.jpg'}, {name: 'BERSERK', image: './berserk.jpg'},
    {name: 'BERSERK', image: './berserk.jpg'}, {name: 'BERSERK', image: './berserk.jpg'}, {name: 'BERSERK', image: './berserk.jpg'},
    {name: 'BERSERK', image: './berserk.jpg'}, {name: 'BERSERK', image: './berserk.jpg'}, {name: 'BERSERK', image: './berserk.jpg'},
    {name: 'BERSERK', image: './berserk.jpg'}, {name: 'BERSERK', image: './berserk.jpg'}, {name: 'BERSERK', image: './berserk.jpg'},
    {name: 'BERSERK', image: './berserk.jpg'}, {name: 'BERSERK', image: './berserk.jpg'}, {name: 'BERSERK', image: './berserk.jpg'},
    {name: 'BERSERK', image: './berserk.jpg'}, {name: 'BERSERK', image: './berserk.jpg'}, {name: 'BERSERK', image: './berserk.jpg'}
  ]}

  render() {
    return (
      <View style={styles.container}>
         <ScrollView>
             {[...Array(Math.ceil(this.state.mangaList.length/3))].map((o, i) => (<MangaLine i={`line_${i}`} line={[{name: 'BERSERK', image: './berserk.jpg'}, {name: 'BERSERK', image: './berserk.jpg'}, {name: 'BERSERK', image: './berserk.jpg'}]} />))}
         </ScrollView>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flex: 1
  }
});
 
 
