import * as React from 'react';
import {Text, View, Button } from 'react-native';
import  {NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Tab = createMaterialTopTabNavigator();

function FruitScreen() {
    return(
        <View
        style = {{
            flex : 1,
            justifyContent : "center",
            alignItems : "center",
            backgroundColor : "#03CAFC"
        }}>
            <Text>FruitScreen</Text>
        </View>    
    )
}

function VegetableScreen() {
    return(
        <View
        style = {{
            flex : 1,
            justifyContent : "center",
            alignItems : "center",
            backgroundColor : "#FFC0CB"
        }}>
            <Text>Vegetable Screen</Text>
        </View>    
    )
}

function SweetsScreen() {
    return(
        <View
        style = {{
            flex : 1,
            justifyContent : "center",
            alignItems : "center",
            backgroundColor : "#00FFFF"
        }}>
            <Text>SweetsScreen</Text>
        </View>    
    )
}


function DisplayTabs() {
    const insets = useSafeAreaInsets();
    
    return(
        <Tab.Navigator 
            initialRouteName= 'FruitScreen'
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

        </Tab.Navigator>
    )
}


export default function TopBarNavigator(){
    return(
            <DisplayTabs></DisplayTabs>   
    )
}