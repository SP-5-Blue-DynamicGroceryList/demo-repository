import {React} from 'react'
import {View, Text, StyleSheet, Button, TextInput, Alert, Modal} from "react-native";
import { useState } from 'react';


export default function CheckList() {
    
    const[items, setItems] = useState([]);
    const[modalVisible, setModalVisible] = useState(false);
    const [name,setName] = useState('');
    const[quantity,setQuantity] = useState(0);

    const generateButtons = (newName,newQuantity) => {
        setModalVisible(false);
        const newItems = { id: Math.random().toString(), name: newName, qty: parseInt(newQuantity)};
        setItems(currentItems => [...currentItems, newItems]);
    }
    const handleSubtraction = (id) => {
      const currentItems = items.map((item)=> {
          if (item.id === id) {
              return {
                  name: item.name,
                  id: item.id,
                  qty: item.qty-1
              }
          }
          else {
              return item
          }
      });
      setItems(currentItems);
  }

  const handleAddition = (id) => {
      const currentItems = items.map((item)=> {
          if (item.id === id) {
              return {
                  name: item.name,
                  id: item.id,
                  qty: item.qty+1
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



    const renderItemButtons = () => {;
        return items.map((items,index) => (
          <View key={items.id} style = {styles.buttonGroup}>
            <View>
                <Text>{items.name}</Text> 
                <Text style={{fontSize: 20}}>{items.qty}</Text>
            </View>
            <Button title="+" onPress={()=> handleAddition(items.id)} />
            <Button title="-" onPress={()=> handleSubtraction(items.id)} />
            <Button title="Delete Item" onPress={() => deleteItem(items.id)} />
          </View>
        ));
    };

    return(
        <View style = {styles.container}>
            <Button title = "Add Item" onPress= {() => setModalVisible(true)}></Button>
            {renderItemButtons()}
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
            >
                <View style={styles.modalView}>
                  <TextInput 
                  style = {styles.moodalInput} 
                  placeholder="Enter item name:" 
                  onChangeText={(name)=> setName(name)}
                  placeholderTextColor= "#000"/>
                  <TextInput 
                  style = {styles.moodalInput} 
                  placeholder = "Enter quantity" 
                  onChangeText={(quantity)=> parseInt(setQuantity(quantity))}
                  placeholderTextColor= "#000"/> 
                  <Button title="Add Item" onPress={()=>generateButtons(name,quantity)} />
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
  moodalInput : {
    color: "black",
    
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