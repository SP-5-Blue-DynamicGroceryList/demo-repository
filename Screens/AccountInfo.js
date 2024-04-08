import React from 'react'
import { View, Text, StyleSheet, Button, TextInput, Alert, Image, TouchableOpacity } from "react-native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useState } from 'react'
import { getAuth } from "firebase/auth";

export default function AccountInfo({ navigation }) {
    const user = getAuth().currentUser;
    const userEmail = user.email;
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../Images/AccountImages/user.png')}
            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>Email Account: {userEmail}</Text>
            </View>
            <View>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate("LoginScreen")}>
                    <Text style={styles.buttonText}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    image: {
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center',
        margin: 15,
    },
    textContainer: {
        width: 350,
        height: 50,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#eeeeee',
        alignSelf: 'center',
        margin: 8,

    },
    text: {
        fontSize: 16,
        margin: 13,
    },
    buttonContainer: {
        width: 350,
        height: 50,
        backgroundColor: '#3d85c6',
        borderRadius: 20,
        padding: 10,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white',
    },

});
