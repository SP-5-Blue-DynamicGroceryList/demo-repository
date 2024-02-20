import {React} from 'react'
import {View, Text, StyleSheet, Button, TextInput, Alert} from "react-native";
import { ScrollView } from 'react-native-web';

export default function CheckList() {
    
    const[itemCount, setItemCount] = useState(0);

    const handleItem = () =>{
        setItemCount(item + 1)
    }

    return(
        <View style = {styles.container}>
            <Button placeholder = 'Add Item' onPress={handleItem}></Button>
            <ScrollView>
                {[...Array(itemCount).keys()].map(key => {
                    return(
                        <Text key = {key}>Item</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '33%',
  },

});