import {React} from 'react'
import {View, Text, StyleSheet, Button, TextInput, Alert} from "react-native";
import { useState } from 'react';
import { ScrollView } from 'react-native-web';

export default function CheckList() {
    
    const[itemCount, setItemCount] = useState(0);

    const handleItem = () =>{
        setItemCount(itemCount + 1)
    }

    return(
        <View style = {styles.container}>
            <Button title = 'Add Item' onPress={handleItem}></Button>
            <ScrollView>
                {[...Array(itemCount).keys()].map(key => {
                    return(
                        <View>
                            <Text key = {key}>Item</Text>
                            <Button title = '-'></Button>
                            <Button title = '+'></Button>
                            <Button title = 'Delete Item'></Button>
                        </View>
                    )
                })}
            </ScrollView>
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

});