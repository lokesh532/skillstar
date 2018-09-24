import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  FlatList
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import RecentCards from "./cards/RecentCards";
import PathCards from "./cards/PathCards";

const { height, width } = Dimensions.get("window");

const data = [
  {
    id: 1,
    name: "Java",
    url: require("../assets/java.jpg")
  },
  {
    id: 2,
    name: "JS",
    url: require("../assets/javascript.png")
  },
  {
    id: 3,
    name: "React",
    url: require("../assets/react.png")
  },
  {
    id: 4,
    name: "Python",
    url: require("../assets/python.jpg")
  }
];

const numColumns = 2;

class Home extends Component {
  componentWillMount() {
    this.startHeaderHeight = 80;
    if ((Platform.OS = "android")) {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              height: this.startHeaderHeight,
              backgroundColor: "white",
              borderBottomWidth: 1,
              borderBottomColor: "#dddddd"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                backgroundColor: "white",
                marginHorizontal: 20,
                elevation: 1,
                marginTop: Platform.OS == "android" ? 30 : null
              }}
            >
              <Icon name="ios-search" size={20} />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Try React"
                placeholderTextColor="grey"
                style={{ flex: 1, fontWeight: "700", backgroundColor: "white" }}
              />
            </View>
          </View>
          <ScrollView scrollEventThrottle={16}>
            <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "700",
                  paddingHorizontal: 20
                }}
              >
                Recent Activity...
              </Text>
              <View style={{ height: 130, marginTop: 20 }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <RecentCards
                    imageUri={require("../assets/home.jpg")}
                    name="Home"
                  />
                  <RecentCards
                    imageUri={require("../assets/experiences.jpg")}
                    name="Experiences"
                  />
                  <RecentCards
                    imageUri={require("../assets/restaurant.jpg")}
                    name="Resturant"
                  />
                </ScrollView>
              </View>
              <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: "700" }}>
                  Paths...
                </Text>
                <View>
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: "white",
                      paddingTop: 20
                    }}
                  >
                    <FlatList
                      data={data}
                      renderItem={({ item, separators }) => (
                        <PathCards imageUri={item.url} name={item.name} />
                      )}
                      keyExtractor={item => item.id}
                      numColumns={numColumns}
                    />
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
