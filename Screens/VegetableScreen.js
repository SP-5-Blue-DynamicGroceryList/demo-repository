import {React} from 'react';
import { View, Text, StyleSheet, Button, TextInput, Alert, Image, FlatList, SafeAreaView } from "react-native";
import { useState } from 'react';
import { vegetables } from '../Utils/Data';
import { AntDesign } from '@expo/vector-icons';

export default function VegetableScreen() {
    const [quantity, setQuantity] = useState(vegetables)

    const handleSubtraction = (id) => {
        const currentVegetables = quantity.map((vegetable)=> {
            if (vegetable.id === id) {
                return {
                    name: vegetable.name,
                    id: vegetable.id,
                    img: vegetable.img,
                    qty: vegetable.qty-1
                }
            }
            else {
                return vegetable
            }
        });
        setQuantity(currentVegetables);
    }

    const handleAddition = (id) => {
        const currentVegetables = quantity.map((vegetable)=> {
            if (vegetable.id === id) {
                return {
                    name: vegetable.name,
                    id: vegetable.id,
                    img: vegetable.img,
                    qty: vegetable.qty+1
                }
            }
            else {
                return vegetable
            }
        });
        setQuantity(currentVegetables);
    }

    return (
        <View style={{ paddingLeft: 20, paddingVertical: 10 }}>
            <SafeAreaView />
            <FlatList
                data={quantity}
                renderItem={({ item, index }) => (
                    <View
                        style={{
                            height: 300,
                            borderColor: "#d3d3d3",
                            borderWidth: 2,
                            width: 350,
                            marginVertical: 10,
                            borderRadius: 15,
                            justifyContent: "center"
                        }}>
                        <Image
                            style={{ height: 150, resizeMode: 'contain', alignSelf: "center" }}
                            source={item.img}
                        />
                        <View style={{ paddingVertical: 20}}>
                            <Text style={{ fontSize: 16, fontWeight: 600, alignSelf: "center" }}>
                                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                            </Text>
                        </View>
                        <View
                            style={{
                                justifyContent: "space-around",
                                flexDirection: "row",
                            }}>
                            <AntDesign name="minuscircleo" size={24} color="black" backgroundColor="transparent" onPress={()=>handleSubtraction(item.id)} />
                            <Text style={{fontSize: 20}}>{item.qty}</Text>
                            <AntDesign name="pluscircleo" size={24} color="black" backgroundColor="transparent" onPress={()=>handleAddition(item.id)} />
                        </View>
                        <Button title = "Add to List" />
                    </View>
                )}
            />
        </View>
    )
}