import React from "react";
import { Modal, View, Dimensions, Text, TouchableOpacity } from "react-native";
import STRINGS from "../utils/strings";
import CSSSTYLES from "../styles/cssstyle";
import { PRIMARY } from "../styles/colors";
import { TextInput } from "react-native-paper";
import { MARGIN_15, MARGIN_20 } from "../styles/spacing";
const width = Dimensions.get('window').width;
export default class Popup extends React.Component {

    constructor() {
        super();
        this.state = {
            amount: "",
            text2: "",
            isAmountError: false,
            isAccounttError: false
        };
    }
    handleCancel = () => {
        this.props.handleCancel();

    }
    handleSubmit = () => {
        if (this.checkValidation()){
            this.props.handleSubmit();
        }
            

    }
    checkValidation() {
        let isValid = true;
        if (this.state.amount == "") {
            isValid = false;
            this.setState({ isAmountError: true })
        } else { this.setState({ isAmountError: false }) }
        if (this.state.text2 == "") {
            isValid = false;
            this.setState({ isAccounttError: true })
        } else { this.setState({ isAccounttError: false }) }

        return isValid;
    }
    render() {
        return (
            <Modal
                presentationStyle="overFullScreen"
                transparent={true}
                animationType={"none"}
                visible={this.props.isVisible}
            >
                <View style={CSSSTYLES.modalBackground}>
                    <View
                        style={{
                            backgroundColor: "#ffffff",
                            padding: 20,
                            borderRadius: 10,
                            width: width - 30
                        }}
                    >
                        <Text style={[CSSSTYLES.largeTextBold, { marginBottom: 20, textAlign: 'center', fontWeight: '700', color: PRIMARY }]}>
                            {this.props.title} </Text>
                        <TextInput
                            label="Amount"
                            mode='outlined'
                            keyboardType='numeric'
                            error={this.state.isAmountError}
                            value={this.state.amount}
                            style={CSSSTYLES.inputText}
                            onChangeText={text => this.setState({ amount: text })}
                        />
                        <TextInput
                            label="Account"
                            mode='outlined'
                            keyboardType='numeric'
                            error={this.state.isAccounttError}
                            value={this.state.text2}
                            style={{ ...CSSSTYLES.inputText, marginTop: MARGIN_15 }}
                            onChangeText={text => this.setState({ text2: text })}
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: MARGIN_20 }}>
                            <TouchableOpacity onPress={this.handleCancel} style={{ padding: 5, alignItems: "center", backgroundColor: PRIMARY, borderRadius: 10 }}>
                                <Text style={[CSSSTYLES.primaryText, { marginHorizontal: 15 }]} >
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.handleSubmit} style={{ padding: 5, marginStart: 15, alignItems: "center", backgroundColor: PRIMARY, borderRadius: 10 }}>
                                <Text style={[CSSSTYLES.primaryText, { marginHorizontal: 15 }]}>
                                    Submit
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>
            </Modal>
        );
    }

}
