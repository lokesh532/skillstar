import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  FlatList
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { getData } from "../utils/api.js";
const numColumns = 2;
const size = Dimensions.get("window").width / numColumns;

const images = [];

type Props = {};

export default class DeckList extends Component<Props> {
  
  constructor(props) {
        console.log('firebase props : '+props.fbValue);
    super(props);
    this.state = {
        data: getData(props.fbValue)
    };
  }

  _onPress = item => {
    console.log(item);
    this.setState({
      data: this.state.data[item.id - 1].subjects
    });
  };

  renderItem(data) {
    console.log("data log :" + data.name);
    let { name } = data;

    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={this.onPress}>
          <View style={styles.cardItem}>
            <Text style={{ fontSize: 35 }}>{name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const cards = [];
    console.log("data state :" + this.state.data);
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({ item, separators }) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => this._onPress(item)}
            >
              <View style={styles.cardItem}>
                <Text style={{ fontSize: 35 }}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          numColumns={numColumns}
        />

      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="question-answer" size={25} />
          <Text style={styles.tabTitle}>Deck List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="video-library" size={25} />
          <Text style={styles.tabTitle}>Add Deck</Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardItem: {
    flex: 1,
    margin: 3,
    backgroundColor: "#fccdd3",
    elevation: 3,
    alignItems: "center"
  },
  itemContainer: {
    width: size,
    height: size
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
  }
});
