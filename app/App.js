/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from "react";
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import DeckList from "./components/DeckList.js";
import Quiz from "./components/Quiz.js";
import {
  StackNavigator,
} from 'react-navigation';
import {
  getData
} from "./utils/api.js";
import firebase from "firebase";


type Props = {};
var deckData = [];

const firebaseConfig = {
  apiKey: "AIzaSyA8IDk83Pvx-hk4WyHOwCeTibzGGp0Mvxs",
  authDomain: "reactskillster.firebaseapp.com",
  databaseURL: "https://reactskillster.firebaseio.com",
  projectId: "reactskillster",
  storageBucket: "",
  messagingSenderId: "141970191809"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const MainNavigator  = StackNavigator({
  DeckList: { screen: DeckList },
  Quiz: { screen: Quiz }
});

export default class App extends Component < Props > {


  constructor() {
    super();
    this.itemRef = this.getRef().child('001');

  }

  getRef() {
    return firebaseApp.database().ref('user');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Image
            source={require("./images/logo.png")}
            style={{ width: 98, height: 25 }}
          />
          <View style={styles.rightNav}>
            <Icon name="search" size={25} />
          </View>
        </View>
        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="question-answer" size={25} />
            <Text style={styles.tabTitle}>Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="video-library" size={25} />
            <Text style={styles.tabTitle}>Learn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="directions-bike" size={25} />
            <Text style={styles.tabTitle}>Paths</Text>
          </TouchableOpacity>
        </View>
         <DeckList/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  navBar: {
    height: 55,
    backgroundColor: "#98dafc",
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  tabBar: {
    height: 55,
    backgroundColor: "#98dafc",
    paddingHorizontal: 15,
    elevation: 3,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  tabItem: {
    alignItems: "center"
  },
  rightNav: {
    flexDirection: "row"
  },
  tabTitle: {
    fontSize: 11,
    color: "#3c3c3c"
  }
});
