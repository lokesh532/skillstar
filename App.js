/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { createBottomTabNavigator } from 'react-navigation';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Icon from 'react-native-vector-icons/Ionicons'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


class App extends Component {
  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}


export default createBottomTabNavigator({
  Home:{
    screen:Home,
    navigationOptions: {
      tabBarLabel:'HOME',
      tabBarIcon: ({ tintColor })=>(
        <Icon name="ios-search-outline" color={tintColor} size={24}/>
      )
    }
  },
  Profile:{
    screen:Profile,
    navigationOptions: {
      tabBarLabel:'PROFILE',
      tabBarIcon: ({ tintColor })=>(
        <Icon name="ios-person-outline" color={tintColor} size={24}/>
      )
    }
  }
},{
  tabBarOptions:{
    activeTintColor:'red',
    inactiveTintColor:'grey',
    style:{
      backgroundColor:'white',
      borderTopWidth:0,
      elevation:5
    }
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
