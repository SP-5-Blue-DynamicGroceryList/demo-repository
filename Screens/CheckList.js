import {React} from 'react'
import {View, Text, StyleSheet, Button, TextInput, Alert} from "react-native";

export default function CheckList() {
    return(
        <View
        style = {{
            flex : 1,
            justifyContent : "center",
            alignItems : "center",
            backgroundColor : "#FFFF00"
        }}>
            <Text>Check List</Text>
        </View>    
    )
}