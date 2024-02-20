import React from 'react'
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useState } from 'react'

export default function AccountInfo(){
    return(
        <View
        style = {{
            flex : 1,
            justifyContent : "center",
            alignItems : "center",
            backgroundColor : "#03CAFC"
        }}>
            <Text>Info</Text>
        </View>    
    )
}