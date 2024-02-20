import {React} from 'react'
import {View, Text, StyleSheet, Button, TextInput, Alert, Image} from "react-native";
import { useState } from 'react';

export default function ForgotPassword () {
    return(
        <View style = {styles.container}>
            <Text>Enter Username</Text>
            <TextInput placeholder = 'username'></TextInput>
            <Text>Enter security question answer</Text>
            <TextInput placeholder = 'answer'></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '33%',
  },

});
