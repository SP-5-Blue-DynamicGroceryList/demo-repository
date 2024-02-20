import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, Modal} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Profile from "../Screens/Profile"
import AccountInfo from "../Screens/AccountInfo"
import { useState } from 'react'

const Tab = createMaterialBottomTabNavigator();
<<<<<<< HEAD


=======
//
function Profile({navigation}){
    const[list, setList] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const handleGenerate = () =>{
        const newList = { id: Math.random().toString()};
        setList(currentLists => [...currentLists, newList]);
    }

    const deleteList = (id) => {
        setList(currentLists => currentLists.filter(list => list.id !== id));
    };

    const renderListButtons = () => {
        return list.map((list,index) => (
          <View key={list.id} style = {styles.buttonGroup}>
            <View>
                <Text>List #{index + 1}</Text> 
            </View>
            <Button title="Go to list" onPress = {() => navigation.navigate("HomeScreen")}></Button>
            <Button title="Delete List" onPress={() => deleteList(list.id)} />
            <Button title="Add Person" onPress={() => setModalVisible(true)} />
          </View>
        ));
    };

    return(
        <View style = {styles.container}>
            <Button title = "Generate List" onPress={handleGenerate}></Button>
            {renderListButtons()}
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
            >
                <View style={styles.modalView}>
                <TextInput placeholder="Enter username"/>
                <Button title="Invite" onPress={() => setModalVisible(false)} />
                </View>
            </Modal>
            
        </View>    
    )
}
const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "#03CAFC"
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    modalView: {
        marginTop: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
  });

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
>>>>>>> 041e7bf5ae98815dc4522ac792f63dfdd9acba31

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
