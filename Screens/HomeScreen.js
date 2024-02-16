import * as React from 'react';
import {Text, View, Button } from 'react-native';
import  {NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import FruitScreen from './FruitScreen';
import VegetableScreen from './VegetableScreen';
import SweetsScreen from './SweetsScreen';
import CheckList from './CheckList';

const Tab = createMaterialTopTabNavigator();


function DisplayTabs() {
    const insets = useSafeAreaInsets();
    
    return(
        <Tab.Navigator 
            initialRouteName= 'HomeScreen'
            tabBarOptions = {{
                activeTintColor : "#E91E63",
                labelStyle : {fontSize:12},
                style: {backgroundColor: 'white', marginTop : insets.top}
            }}  
        >
            <Tab.Screen name = "Fruit"
                component = {FruitScreen}
                options = {{topBarLabel : 'Fruit'}}
            />

            <Tab.Screen name = "Vegetable"
                component = {VegetableScreen}
                options = {{topBarLabel : 'Vegetable'}}
            />

            <Tab.Screen name = "Sweets"
                component = {SweetsScreen}
                options = {{topBarLabel : 'SweetsScreen'}}
            />

            <Tab.Screen name = "Check List" component = {CheckList} options = {{topbarLabel : 'Checklist'}} />

        </Tab.Navigator>
    )
}


export default function TopBarNavigator(){
    return(
            <DisplayTabs></DisplayTabs>
    )
}