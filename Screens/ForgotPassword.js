import {React} from 'react'
import {View, Text, StyleSheet, Button, TextInput, Alert, Image} from "react-native";
import { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';

export default function ForgotPassword ({navigation}) {
  
  const[value, setValue] = useState("" | null);
  const[answer, setAnswer] = useState("" | null);
  
  const data = [
    {label : 'Where were you born', value : 1},
    {label : 'What is your favorite food?', value : 2},
    {label : 'What is your favorite color?', value : 3},
    {label : "What is your mother's name?", value : 4},
    {label : "What is your father's food?", value : 5},
    {label : 'What is your dream job?', value : 6},
     
  ]
  


  return(
        <View style = {styles.container}>
          <Dropdown
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            searchPlaceholder="Search..."
            value={value}
            onChange={item => {
              setValue(item.value);
              console.log(value);
            }}   
          ></Dropdown>
          <TextInput placeholder='Enter Answer'/>
          <Button title = 'Change Password' onPress = {() => navigation.navigate("LoginScreen")}/>
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
