import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/Home'
import ScreenTwo from '../screens/ScreenTwo'
import ScreenThree from '../screens/ScreenThree'
import ScreenFour from '../screens/ScreenFour'
import { ICON_SIZE_20, ICON_SIZE_25 } from '../styles/dimens';
const Tab = createMaterialBottomTabNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Screen2"
                activeColor="#fff"
                inactiveColor="#808080"
                labeled={false}
                barStyle={{ backgroundColor: '#131313'}}
            >
                <Tab.Screen name="Home" component={ScreenTwo} options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="poll" color={color} size={ICON_SIZE_25} />
                    ),
                }} />
                <Tab.Screen name="Screen2" component={HomeScreen}  options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="clock-outline" color={color} size={ICON_SIZE_25} />
                    ),
                }}/>
                <Tab.Screen name="Screen3" component={ScreenThree}  options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="format-list-bulleted" color={color} size={ICON_SIZE_25} />
                    ),
                }}/>
                <Tab.Screen name="Screen4" component={ScreenFour}  options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account-outline" color={color} size={ICON_SIZE_25} />
                    ),
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}