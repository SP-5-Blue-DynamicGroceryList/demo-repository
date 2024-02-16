import {React} from 'react'
import {View, Text, StyleSheet, Button, TextInput, Alert, Image} from "react-native";
import { useState } from 'react';

export default function FruitScreen() {
    const[quantity, setQuantity] = useState(0)
    
    const handleSubtraction = () => {
        if(quantity >= 1) {
            setQuantity(quantity - 1);
        }
        else{
            setQuantity(0);
        }
    }

    const handleAddition = () => {
        setQuantity(quantity + 1);
    }



    return(
        <View
        style = {{
            flex : 1,
            justifyContent : "center",
            alignItems : "center",
            backgroundColor : "#03CAFC"
        }}>
            <Text>FruitScreen</Text>
            <Image source = {require('../Images/FruitImages/appleStockImage.jpg')} />
            <Button title = "-" onPress={handleSubtraction}></Button>
            <Text>{quantity}</Text>
            <Button title = "+" onPress={handleAddition}></Button>
            <Button title = "Add to Cart"></Button>
        </View>    
    )
}