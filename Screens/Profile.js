import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, Modal } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useState } from 'react'
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { getAuth } from "firebase/auth";

export default function Profile({ navigation }) {
    const user = getAuth().currentUser;
    const userEmail = user.email;
    const userNameSplit = userEmail.split("@");
    const userName = userNameSplit[0];

    const [name, setName] = useState('');

    const viewList = (name) => {
        const userNameSplit = name.split("@");
        const userName = userNameSplit[0];
        users.push(userName);
    };

    const [list, setList] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);

    const handleGenerate = () => {
        const newList = { id: Math.random().toString() };
        setList(currentLists => [...currentLists, newList]);
    }

    const deleteList = (id) => {
        setList(currentLists => currentLists.filter(list => list.id !== id));
    };

    const renderListButtons = () => {
        return list.map((list, index) => (
            <View key={list.id} style={styles.buttonGroup}>
                <View>
                    <Text>List #{index + 1}</Text>
                </View>
                <View>
                    <Button title="View your list" onPress={() => {
                        users.push(userName);
                    navigation.navigate("HomeScreen");}}></Button>
                </View>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Ionicons name="person-add-sharp" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteList(list.id)}>
                    <MaterialIcons name="delete" size={24} color="black" />
                </TouchableOpacity>
            </View>
        ));
    };

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.buttonGenerate}
                    onPress={handleGenerate}>
                    <Text style={styles.buttonText}>Generate List</Text>
                </TouchableOpacity>
                <View>
                    <Button title="View someone else's list" onPress={() => setModalVisible2(true)}></Button>
                </View>
                {renderListButtons()}
                <Modal
                    visible={modalVisible}
                    animationType="slide"
                    transparent={true}
                >
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <View style={styles.modalView}>
                            <TouchableOpacity
                                style={styles.close}
                                onPress={() => setModalVisible(false)}
                            >
                                <AntDesign name="close" size={24} color="black" />
                            </TouchableOpacity>
                            <Text>Enter username:</Text>
                            <TextInput style={styles.input} />
                            <Button title="Invite" onPress={() => setModalVisible(false)} />
                        </View>
                    </View>
                </Modal>
                <Modal
                    visible={modalVisible2}
                    animationType="slide"
                    transparent={true}
                >
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <View style={styles.modalView}>
                            <TouchableOpacity
                                style={styles.close}
                                onPress={() => setModalVisible2(false)}
                            >
                                <AntDesign name="close" size={24} color="black" />
                            </TouchableOpacity>

                            <View style={styles.box}>
                                <Text style={styles.text}>Enter the full email address of the person's list you want to view</Text>
                                <TextInput
                                    style={styles.input1}
                                    onChangeText={(name) => setName(name)}
                                    placeholderTextColor="#000" />
                            </View>
                            <Button title="Confirm" onPress={() => {
                                viewList(name);
                                setModalVisible2(false);
                                navigation.navigate("HomeScreen");}
                            } />
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>
    )
}
export const users = []
const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        backgroundColor: "#fff"
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
    },
    buttonGroup: {
        width: 350,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#eeeeee',
        margin: 15,
        alignItems: 'center',
    },
    buttonGenerate: {
        width: 350,
        height: 50,
        backgroundColor: '#3d85c6',
        borderRadius: 20,
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white',
    },
    buttonList: {
        width: 100,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 15,
    },
    modalView: {
        width: 300,
        height: 170,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    input: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#eeeeee',
        width: 250,
        height: 50,
        margin: 8,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    close: {
        alignSelf: 'flex-end',
        margin: 8,
    },

});
