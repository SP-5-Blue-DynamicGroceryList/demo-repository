import { React } from 'react'
import { View, Text, StyleSheet, Button, TextInput, Alert, Modal, ScrollView, TouchableOpacity } from "react-native";
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { getDatabase, ref, set, push, onValue, remove, update } from 'firebase/database';
import { writeListData } from '../Firebase/FirebaseConfig.ts';
import { getAuth } from "firebase/auth";
import { users } from './Profile.js';

export default function CheckList() {
    const listToView = users[users.length - 1];

    const [items, setItems] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [currentDB, setDB] = useState([]);

    const user = getAuth().currentUser;
    const userEmail = user.email;
    const userNameSplit = userEmail.split("@");
    const userName = userNameSplit[0];

    const db = getDatabase();
    const reference = ref(db, listToView + '/');
    const displayDatabase = () => {
        onValue(reference, (snapshot) => {
            const temparray = [];
            snapshot.forEach((nodeSnapshot) => {
                const snapshotName = nodeSnapshot.val().name;
                const snapshotQty = nodeSnapshot.val().qty;
                const snapshotId = nodeSnapshot.key;
                const newSnapshot = { id: Math.random().toString(), name: snapshotName, qty: parseInt(snapshotQty), uid: snapshotId };
                temparray.push(newSnapshot)
            });
            setDB(temparray);
        }, {
            onlyOnce: true
        });
    }

    const generateButtons = (newName, newQuantity) => {
        setModalVisible(false);
        writeListData(newName, newQuantity, listToView);
    }
    const handleSubtraction = (id) => {
        const currentItems = items.map((item) => {
            if (item.id === id) {
                return {
                    name: item.name,
                    id: item.id,
                    qty: item.qty - 1
                }
            }
            else {
                return item
            }
        });
        setItems(currentItems);
    }

    const handleAddition = (id) => {
        const currentItems = items.map((item) => {
            if (item.id === id) {
                return {
                    name: item.name,
                    id: item.id,
                    qty: item.qty + 1
                }
            }
            else {
                return item
            }
        });
        setItems(currentItems);
    }
    const handleAdditionDB = (id) => {
        currentDB.map((item) => {
            if (item.id === id) {
                const newSnapshot = { name: item.name, qty: parseInt(item.qty) + 1 };
                const updates = {};
                updates[listToView + '/' + item.uid] = newSnapshot;
                update(ref(db), updates);
            }
        });
    }
    const handleSubtractionDB = (id) => {
        currentDB.map((item) => {
            if (item.id === id) {
                const newSnapshot = { name: item.name, qty: parseInt(item.qty) - 1 };
                const updates = {};
                updates[listToView + '/' + item.uid] = newSnapshot;
                update(ref(db), updates);
            }
        });
    }

    const deleteItem = (uid) => {
        const deletereference = ref(db, listToView + '/' + uid);
        remove(deletereference);
    };

    const renderItemButtons = () => {
        displayDatabase();
        return currentDB.map((items, index) => (
            <View key={items.id} style={styles.buttonGroup}>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: '600', textAlign: 'center' }}>{items.name}</Text>
                </View>
                <TouchableOpacity onPress={() => handleSubtractionDB(items.id)} >
                    <AntDesign name="minuscircleo" size={24} color="black" backgroundColor="transparent" />
                </TouchableOpacity>
                <Text style={{ fontSize: 18 }}>{items.qty}</Text>
                <TouchableOpacity onPress={() => handleAdditionDB(items.id)} >
                    <AntDesign name="pluscircleo" size={24} color="black" backgroundColor="transparent" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteItem(items.uid)}>
                    <MaterialIcons name="delete" size={24} color="black" />
                </TouchableOpacity>
            </View>
        ));
    };

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.container}>
                <Text style={styles.header}>{listToView}'s list</Text>
                <TouchableOpacity
                    style={styles.buttonAdd}
                    onPress={() => setModalVisible(true)}
                >
                    <MaterialIcons name="add-circle" size={50} color="#3d85c6" />
                    <Text style={{ color: '#3d85c6', fontSize: 20 }}>Add New Item</Text>
                </TouchableOpacity>
                {renderItemButtons()}
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

                            <View style={styles.box}>
                                <Text style={styles.text}>Enter item name:</Text>
                                <TextInput
                                    style={styles.input1}
                                    onChangeText={(name) => setName(name)}
                                    placeholderTextColor="#000" />
                            </View>
                            <View style={styles.box}>
                                <Text style={styles.text}>Enter quantity:</Text>
                                <TextInput
                                    style={styles.input2}
                                    onChangeText={(quantity) => parseInt(setQuantity(quantity))}
                                    placeholderTextColor="#000" />
                            </View>
                            <Button title="Add Item" onPress={() => generateButtons(name, quantity)} />
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        backgroundColor: "#fff"
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'row',
        justifyContent: 'row',
        paddingVertical: 10,
    },
    header: {
        color: '#3d85c6',
        fontSize: 24,
        padding: 10,
        left: 15,
    },
    close: {
        alignSelf: 'flex-end',
        margin: 8,
    },
    button: {
        width: '33%',
    },
    buttonAdd: {
        position: 'absolute',
        width: 190,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        left: 10,
        bottom: 50,

    },
    buttonGroup: {
        width: 350,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#eeeeee',
        alignItems: 'center',
        alignSelf: 'center',
        margin: 8,
    },
    modalView: {
        width: 380,
        height: 225,
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    box: {
        marginLeft: 10,
        flexDirection: 'row',
        paddingVertical: 5,
    },
    text: {
        textAlign: 'left',
        padding: 10,
        alignSelf: 'center',
    },
    input1: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#eeeeee',
        width: 200,
        height: 40,
        margin: 8,
        alignSelf: 'center',
        padding: 10,
    },
    input2: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#eeeeee',
        width: 50,
        height: 40,
        margin: 8,
        padding: 10,
        justifyContent: 'center',
        textAlign: 'center',
    },
    buttonText1: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white',
    },

});
