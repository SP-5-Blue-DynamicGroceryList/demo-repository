import React from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useState } from 'react'
import {getAuth} from "firebase/auth";

export default function AccountInfo() {
    const user = getAuth().currentUser;
    const userEmail = user.email;
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#03CAFC"
            }}>
            <Text style={{ color: '#3d85c6', fontSize: 50 }}>Email Account:{userEmail}</Text>
        </View>
    )
}
