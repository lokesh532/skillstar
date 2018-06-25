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
import { getData } from "../../api/api.js";
import Quiz from "./Quiz.js";
import {
  StackNavigator,
} from 'react-navigation';
const numColumns = 2;
const size = Dimensions.get("window").width / numColumns;

const images = [];


type Props = {};

export default class DeckList extends Component<Props> {
  constructor(props) {
    super(props);
  //  this.itemRef = props.itemRef;
    this.state = {
      data: getData()
    };
  }

  // componentDidMount() {
  //   this.itemRef.on("value", data => {
  //     let items = [];
  //     data.forEach(child => {
  //       items.push({
  //         name: child.val().name,
  //         id: child.val().id,
  //         subjects: child.val().subjects
  //       });
  //     });
  //     console.log("items" + JSON.stringify(items));
  //     this.setState({
  //       data: items
  //     });
  //   });
  // }

  _onPress = item => {
    if(this.state.data[item.id - 1].subjects==null)
    {
      console.log('go to quiz');
      this.props.navigation.navigate('Quiz');
    }
    else {
      this.setState({
        data: this.state.data[item.id - 1].subjects
      });
    }

  };

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
                <Text
                  style={{
                    fontSize: 35
                  }}
                >
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          numColumns={numColumns}
        />
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
