import React from "react";
import {
    Text, TouchableOpacity,
    SafeAreaView, FlatList, Alert, View
} from "react-native";
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import CSSSTYLES from "../styles/cssstyle";
import BackActionbar from '../components/BackActionbar'
import { MARGIN_10, MARGIN_15, MARGIN_20, MARGIN_30, MARGIN_40, SIZE_100 } from "../styles/spacing";
import { Button } from "react-native-paper";
import STRINGS from "../utils/strings";
import { GRAY_MEDIUM, PRIMARY, WHITE } from "../styles/colors";
import { FEATHER_ICON, MATERIAL_ICON } from "../styles/icons";
import { ICON_SIZE_15, ICON_SIZE_20 } from "../styles/dimens";
import Popup from "../components/Popup";
const dataSource = [{ type: "withdraw", date: "Mar 1, 2020", currency: "", amount: "900.0", totalAmount: "31.32" },
{ type: "Trade fee", date: "Mar 1, 2020", currency: "", amount: "900", totalAmount: "931.31" },
{ type: "Buy", date: "Mar 1, 2020", currency: "BCH-USD", amount: "900", totalAmount: "32.31" },
{ type: "Trade fee", date: "Mar 1, 2020", currency: "BCH-USD", amount: "25.00", totalAmount: "500.0" },
{ type: "Buy", date: "Mar 1, 2020", currency: "BCH-USD", amount: "85.22", totalAmount: "35.0" },
{ type: "withdraw", date: "Mar 1, 2020", currency: "BCH-USD", amount: "900", totalAmount: "400.32" }]
export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            isPopupVisible: false,
            popupTitle:""
        };
    }
    handleCancel = () => {
        this.setState({ isPopupVisible: false })
    }
    handleSubmit = () => {
        this.setState({ isPopupVisible: false })
    }
    renderItem = ({ item, index }) => {
        var icon = FEATHER_ICON.ARROW_UP
        switch (item.type) {
            case "withdraw":
                icon = FEATHER_ICON.ARROW_UP
                break;
            case "Trade fee":
                icon = FEATHER_ICON.PERCENT
                break;
            case "Buy":
                icon = FEATHER_ICON.MINIMIZE
                break;

        }
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: MARGIN_20 }}>
                <View style={{ alignItems: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>
                    <FeatherIcon name={icon} color={GRAY_MEDIUM} size={ICON_SIZE_20} />
                    <View style={{ marginStart: MARGIN_15 }}>
                        <Text style={CSSSTYLES.primaryText}>{item.type}</Text>
                        <Text style={CSSSTYLES.secondaryText}>{item.currency} {item.date}</Text>
                    </View>
                </View>
                <View>
                    <Text style={{ ...CSSSTYLES.primaryText, textAlign: 'right' }}>${item.amount}</Text>
                    <Text style={{ ...CSSSTYLES.secondaryText, textAlign: 'right' }}>${item.totalAmount}</Text>
                </View>
            </View>
        )
    }
    render() {

        return (
            <SafeAreaView style={CSSSTYLES.container}>
                <BackActionbar title="US Dollar" />
                 <Popup isVisible={this.state.isPopupVisible} handleCancel={this.handleCancel}
                    handleSubmit={this.handleSubmit} title={this.state.popupTitle} />
                <View style={CSSSTYLES.mainBackground}>
                    <View style={CSSSTYLES.horizontalLine} />
                    <View style={{ height: SIZE_100, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={CSSSTYLES.largeText}>$31.32</Text>
                        <Text style={CSSSTYLES.secondaryText}>$31.32</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: MARGIN_15 }}>
                        <Button onPress={() => this.setState({isPopupVisible:true,popupTitle:"Deposit"})} style={{ flex: 1, marginEnd: MARGIN_10 }} uppercase={false} labelStyle={CSSSTYLES.buttonText} mode="contained" color={WHITE}>
                            {STRINGS.DEPOSIT}
                        </Button>
                        <Button onPress={() => this.setState({isPopupVisible:true,popupTitle:"Withdraw"})} style={{ flex: 1, marginStart: MARGIN_10 }} uppercase={false} labelStyle={CSSSTYLES.buttonText} mode="contained" color={WHITE}>
                            {STRINGS.WITHDRAW}
                        </Button>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: MARGIN_15 }}>
                        <Text style={{ ...CSSSTYLES.secondaryText }}>{STRINGS.RECENT_TRANSACTION}</Text>
                        <View style={CSSSTYLES.smallCircle}>
                            <MaterialCommunityIcon name='filter-variant' color={WHITE} size={ICON_SIZE_15} />
                        </View>
                    </View>
                    <FlatList
                        style={{ marginTop: MARGIN_30, paddingBottom: 80 }}
                        contentContainerStyle={{ paddingBottom: 100 }}
                        data={dataSource}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => {
                            return index.toString();
                        }}
                    />
                </View>
            </SafeAreaView>
        );
    }
}