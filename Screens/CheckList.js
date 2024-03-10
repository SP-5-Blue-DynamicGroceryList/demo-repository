import { React } from 'react'
import { View, Text, StyleSheet, Button, TextInput, Alert, Modal, ScrollView, TouchableOpacity } from "react-native";
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function CheckList() {

    const [items, setItems] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);

    const generateButtons = (newName, newQuantity) => {
        setModalVisible(false);
        const newItems = { id: Math.random().toString(), name: newName, qty: parseInt(newQuantity) };
        setItems(currentItems => [...currentItems, newItems]);
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

    const deleteItem = (id) => {
        setItems(currentItems => currentItems.filter(items => items.id !== id));
    };

    const renderItemButtons = () => {

        return items.map((items, index) => (
            <View key={items.id} style={styles.buttonGroup}>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: '600', textAlign: 'center' }}>{items.name}</Text>
                </View>
                <TouchableOpacity onPress={() => handleSubtraction(items.id)} >
                    <AntDesign name="minuscircleo" size={22} color="black" backgroundColor="transparent" />
                </TouchableOpacity>
                <Text style={{ fontSize: 18 }}>{items.qty}</Text>
                <TouchableOpacity onPress={() => handleAddition(items.id)} >
                    <AntDesign name="pluscircleo" size={22} color="black" backgroundColor="transparent" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteItem(items.id)}>
                    <MaterialIcons name="delete" size={24} color="black" />
                </TouchableOpacity>
            </View>
        ));
    };

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.container}>
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
