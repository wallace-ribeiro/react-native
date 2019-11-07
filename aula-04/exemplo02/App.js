import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Inicio from './Inicio';
import Manga from './Manga';
import Novo from './Novo';
import Anime from './Anime';
import { Image, View } from 'react-native';

const MainNavigator = createMaterialTopTabNavigator({
  Inicio: {screen: Inicio},
  Novo: {screen: Novo},
  Anime: {screen: Anime},
  Manga: {screen: Manga},
}, {

  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'white',
    style: { backgroundColor: 'rgb(244, 117, 33)' },
}});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends Component {
  render() {
    return (
     <View style={{flex: 1}}>
         <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 60, maxHeight: 60, backgroundColor: 'rgb(244, 117, 33)'}}>
             <Image
                     style={{width: 20, height: 20, marginLeft: 25, margin: 0}}
                     source={require('./hamburguer.png')}/>
             <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                 <Image
                     style={{width: 20, height: 20, marginLeft: 25, margin: 0}}
                     source={require('./iconfinder_67_111124.png')}/>
                 <Image
                     style={{width: 30, height: 30, marginLeft: 25, marginRight: 25, margin: 0}}
                     source={require('./3-dot-icon-0.jpg')}/>
             </View>
         </View>
         <AppContainer/>
     </View>
    );
  }
}
