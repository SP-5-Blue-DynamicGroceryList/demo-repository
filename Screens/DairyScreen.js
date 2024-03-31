import { React } from 'react'
import { View, Text, StyleSheet, Button, Image, FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import { useState } from 'react';
import { dairies } from '../Utils/Data';
import { AntDesign } from '@expo/vector-icons';
import {writeListData} from '../Firebase/FirebaseConfig.ts';
import {getDatabase,ref,set,push, onValue} from 'firebase/database';

export default function FruitScreen() {
    const [quantity, setQuantity] = useState(dairies)

    const addToDB = (id) => {
        quantity.map((meat)=> {
            if (meat.id === id) {
                writeListData(meat.name,meat.qty)
            }
        });
    }

    const handleSubtraction = (id) => {
        const currentDairies = quantity.map((dairy) => {
            if (dairy.id === id) {
                return {
                    name: dairy.name,
                    id: dairy.id,
                    img: dairy.img,
                    qty: dairy.qty - 1
                }
            }
            else {
                return dairy
            }
        });
        setQuantity(currentDairies);
    }

    const handleAddition = (id) => {
        const currentDairies = quantity.map((dairy) => {
            if (dairy.id === id) {
                return {
                    name: dairy.name,
                    id: dairy.id,
                    img: dairy.img,
                    qty: dairy.qty + 1
                }
            }
            else {
                return dairy
            }
        });
        setQuantity(currentDairies);
    }

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <FlatList
                data={quantity}
                renderItem={({ item, index }) => (
                    <View style={styles.main}>
                        <Image
                            style={styles.image}
                            source={item.img}
                        />
                        <View style={{ paddingVertical: 20 }}>
                            <Text style={{ fontSize: 16, fontWeight: 600, alignSelf: "center" }}>
                                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                            </Text>
                        </View>
                        <View
                            style={{
                                justifyContent: "space-around",
                                flexDirection: "row",
                            }}>
                            <TouchableOpacity onPress={() => handleSubtraction(item.id)}>
                                <AntDesign name="minuscircleo" size={24} color="black" backgroundColor="transparent" />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 20 }}>{item.qty}</Text>
                            <TouchableOpacity onPress={() => handleAddition(item.id)}>
                                <AntDesign name="pluscircleo" size={24} color="black" backgroundColor="transparent" />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => addToDB(item.id)}>
                                <AntDesign name="pluscircleo" size={24} color="black" backgroundColor="transparent" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingVertical: 10
    },
    main: {
        height: 300,
        borderColor: "#d3d3d3",
        borderWidth: 2,
        width: 350,
        marginVertical: 10,
        borderRadius: 15,
        justifyContent: "center",
        backgroundColor: 'white',
    },
    image: {
        height: 150,
        resizeMode: 'contain',
        alignSelf: "center"
    },

});
