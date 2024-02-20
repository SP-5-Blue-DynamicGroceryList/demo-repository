import React from 'react'
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Profile from "../Screens/Profile"
import AccountInfo from "../Screens/AccountInfo"
import { useState } from 'react'

const Tab = createMaterialBottomTabNavigator();



export default function BottomNavigation(){
    
    return(
    <Tab.Navigator
        initialRouteName = "Profile" 
        tabBarOptions = {{
                activeTintColor : "#E91E63",
                labelStyle : {fontSize:12},
                style: {backgroundColor: 'white'}
            }}
    >
        <Tab.Screen name = "Profile" component  = {Profile} options = {{topBarLabel : 'Profile'}}/> 
        <Tab.Screen name = "Account Info" component = {AccountInfo} options = {{topBarLabel : 'AccountInfo'}}/>
    </Tab.Navigator>
    )
}
