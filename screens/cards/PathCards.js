import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Image
} from "react-native";

const numColumns = 2;
const size = Dimensions.get("window").width / numColumns - 20;

class RecentCards extends Component {
    render() {
        return (
            <TouchableOpacity
                style={styles.itemContainer}>
                <View style={styles.cardItem}>
                    <View style={{ flex: 2 }}>
                        <Image source={this.props.imageUri}
                            style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                        />
                    </View>
                    <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                        <Text>{this.props.name}</Text>
                    </View>
                </View>

            </TouchableOpacity>
        );
    }
}
export default RecentCards;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardItem: {
        flex: 1,
        margin: 0
    },
    itemContainer: {
        width: size,
        height: size,
        borderWidth: 0.5,
        margin: 3,
        borderColor: '#dddddd'
    }
});
