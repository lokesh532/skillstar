import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const deviceWidth = Dimensions.get("window").width;

const images = [];

type Props = {};
export default class Card extends Component<Props> {
  render() {
    return (
      <View style={styles.cardItem}>
        <Text style={{ fontSize: 35 }}>{this.props.nameProp}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardItem: {
    width: deviceWidth / 2 - 15,
    height: deviceWidth / 2 - 15,
    backgroundColor: "#fccdd3",
    elevation: 3,
    alignItems: "center"
  }
});
