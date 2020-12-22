import React from "react";
import {
    Text, TouchableOpacity,
    SafeAreaView, FlatList, Alert, View
} from "react-native";
import CSSSTYLES from "../styles/cssstyle";

export default class ScreenThree extends React.Component {

    render() {

        return (
            <SafeAreaView style={CSSSTYLES.container}>
                <View>
                    <Text>Hello 3</Text>
                </View>
            </SafeAreaView>
        );
    }
}