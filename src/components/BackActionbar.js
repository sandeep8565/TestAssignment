import * as React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { WHITE } from '../styles/colors';
import CSSSTYLES from '../styles/cssstyle';
import { ICON_SIZE_20 } from '../styles/dimens';
import { MATERIAL_ICON } from '../styles/icons';

const MyComponent = (props) => (
    <View style={CSSSTYLES.header}>
        <StatusBar backgroundColor="#000" />
        <MaterialIcon name={MATERIAL_ICON.ARROW_BACK} color={WHITE} size={ICON_SIZE_20} />
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <MaterialCommunityIcon name={MATERIAL_ICON.USD_CIRCLE} color={WHITE} size={ICON_SIZE_20} />
            <Text style={CSSSTYLES.headerTitle}>{props.title}</Text>
        </View>
    </View>
);

export default MyComponent;