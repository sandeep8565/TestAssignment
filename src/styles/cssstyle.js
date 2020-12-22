import { PRIMARY, WHITE, LIGHT_WHITE, GRAY_LIGHT, GRAY_EXRA_LIGHT, GRAY_DARK, GRAY_MEDIUM,GRAY } from '../styles/colors'
import { StyleSheet, Dimensions } from "react-native";
import { FONT_SIZE_14, FONT_SIZE_16, FONT_SIZE_18, FONT_SIZE_20 } from '../styles/typography'
import { MARGIN_10, PADDING_10, PADDING_20, SIZE_25 } from './spacing';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PRIMARY
    },
    primaryText: {
        color: WHITE,
        fontSize: FONT_SIZE_16,
        fontWeight: '400',

    },
    secondaryText: {
        color: GRAY,
        fontSize: FONT_SIZE_14,
        fontWeight: '400',

    },
    largeText: {
        color: WHITE,
        fontSize: FONT_SIZE_20,
        fontWeight: '400',

    },
    largeTextBold: {
        color: WHITE,
        fontSize: FONT_SIZE_18,
        fontWeight: '700',

    },
    header:{
        backgroundColor:PRIMARY,
        paddingVertical:PADDING_10,
        paddingHorizontal:PADDING_20,
        flexDirection:'row',
        alignItems:'center'
    },
    headerTitle:{
        color:WHITE,
        fontSize:FONT_SIZE_16,
        fontWeight:'400',
        marginStart:MARGIN_10,
    },
    mainBackground:{
        backgroundColor:PRIMARY,
        paddingHorizontal:PADDING_20,
    },
    horizontalLine:{
        backgroundColor:"#212121",
        height:1,
        width:'100%',
        marginTop:MARGIN_10
    },
    buttonText:{
        color:PRIMARY,
        fontWeight:'400',
        paddingVertical:5,
        fontSize:FONT_SIZE_16
    },
    smallCircle:{
        height:SIZE_25,
        width:SIZE_25,
        borderRadius:SIZE_25,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ffffff40'
    },
    modalBackground: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#00000050",
        alignItems: "center",
        justifyContent: "center"
      },
      inputText: {
        color: PRIMARY,
        fontSize: FONT_SIZE_16,
        fontWeight: '400',

    },

});