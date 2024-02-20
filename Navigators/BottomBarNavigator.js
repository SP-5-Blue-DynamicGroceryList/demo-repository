import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, Modal} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useState } from 'react'
import Profile from '../Screens/Profile'
import AccountInfo from '../Screens/AccountInfo'
const Tab = createMaterialBottomTabNavigator();
//
//Testing
//Testing x2



export default function BottomNavigation(){
    
    return(
    <Tab.Navigator
        initialRouteName = "ProfileInfo" 
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
