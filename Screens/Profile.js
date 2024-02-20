import React from 'react'
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useState } from 'react'
import { ScrollView } from 'react-native-web';
import { TouchableOpacity } from 'react-native-web';

export default function Profile({navigation}){
    
    const[list, setList] = useState("" || "NO LIST");
    const[listCount, setListCount] = useState(0);

    const handleGenerate = () =>{
        setList('http://localhost:8001/list1.html')
    }

    const handleList = () => {
        setListCount(listCount + 1)
    }

    return(
        <View style = {styles.container}>
            <Button title = 'Add List' onPress = {handleList}></Button>
            <ScrollView>
                {[...Array(listCount).keys()].map(key => {
                    return(
                        <Text key = {key} style={styles.text}>Text</Text>
                    )
                })}
            </ScrollView>
            <Button title = 'Navigate' onPress = {() => navigation.navigate("HomeScreen")} />
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
    
    text: {
        fontFamily: "CircularStd-Book",
        fontSize: 14,
        color: '#2f354b',
        width:200,
        height:100,
        borderColor:"blue",
        margin:10,
        borderWidth:1, 
    }
});