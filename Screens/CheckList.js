import {React} from 'react'
import {View, Text, StyleSheet, Button, TextInput, Alert} from "react-native";
import { useState } from 'react';
import { Modal, ScrollView } from 'react-native-web';

export default function CheckList() {
    
    const[items, setItems] = useState([]);
    const[modalVisible, setModalVisible] = useState(false);


    const generateButtons = () => {
        setModalVisible(false);
        const newItems = { id: Math.random().toString()};
        setItems(currentItems => [...currentItems, newItems]);
    }

    const deleteItem = (id) => {
        setItems(currentItems => currentItems.filter(items => items.id !== id));
    };



    const renderItemButtons = () => {;
        return items.map((items,index) => (
          <View key={items.id} style = {styles.buttonGroup}>
            <View>
                <Text>Item #{index + 1}</Text> 
            </View>
            <Button title="+"></Button>
            <Button title="-"/>
            <Button title="Delete Item" onPress={() => deleteItem(items.id)} />
          </View>
        ));
    };

    return(
         <View style = {styles.container}>
            <Button title = "Add Item" onPress={() => setModalVisible(true)}></Button>
            {renderItemButtons()}
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
            >
                <View style={styles.modalView}>
                    <TextInput placeholder="Enter username"/>
                    <TextInput placeholder = "Enter Quantity" />
                    <Button title="Add Item" onPress={generateButtons} />
                </View>
            </Modal>
            
        </View>  
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'row',
    justifyContent: 'row',
  },
  button: {
    width: '33%',
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