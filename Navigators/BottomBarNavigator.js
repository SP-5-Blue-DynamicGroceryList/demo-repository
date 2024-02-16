import React from 'react'
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useState } from 'react'

const Tab = createMaterialBottomTabNavigator();

function Profile({navigation}){
    const[list, setList] = useState("" || "NO LIST");
    
    const handleGenerate = () =>{
        setList('http://localhost:8001/list1.html')
    }

    const handleList = () => {

    }

    return(
        <View
        style = {{
            flex : 1,
            justifyContent : "center",
            alignItems : "center",
            backgroundColor : "#03CAFC"
        }}>
            <Button title = "Generate List" onPress={handleGenerate}></Button>
            <Text>{list}</Text>
            <Button title = "Go to list" onPress = {() => navigation.navigate("HomeScreen")}></Button>
        </View>    
    )
}

function AccountInfo(){
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
