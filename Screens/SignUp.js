import {View, Text, StyleSheet, Button, TextInput, Alert} from "react-native";
import {useState} from 'react';
import { Dropdown } from 'react-native-element-dropdown';

export default function SignUp( {navigation} ) {
     
    const[value, setValue] = useState("" | null);
    const[answer, setAnswer] = useState("");

    const data = [
    {label : 'Where were you born', value : 1},
    {label : 'What is your favorite food?', value : 2},
    {label : 'What is your favorite color?', value : 3},
    {label : "What is your mother's name?", value : 4},
    {label : "What is your father's food?", value : 5},
    {label : 'What is your dream job?', value : 6},
     ]
  
  
    const[userName, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[verifyPassword, setVerifypassword] = useState("");

    const handleAnswer = (answer) => {
      setAnswer(answer);  
      console.log(answer);
    }
    
    const handleUsername =(userName) => {
        setUsername(userName);
        console.log(userName);
    }

    const handlePassword = (password) => {
        setPassword(password);
        console.log(password);
    }

    const handleVerifyPassword = (verifyPassword) => {
        setVerifypassword(password);
        console.log(verifyPassword);
    }
    
    const createAccount = () =>{
       if(password == verifyPassword)
       {
        Alert.alert("User added");
        navigation.navigate("LoginScreen");
       }
       else{
        Alert.alert("Error");
       }
    }
    
    return(
        
        <View style = {styles.container}>
            <TextInput placeholder="Select Username" onChangeText = {handleUsername}></TextInput> 
            <TextInput placeholder="Select Password" onChangeText = {handlePassword} ></TextInput>
            <TextInput placeholder="Retype Password" onChangeText = {handleVerifyPassword} ></TextInput>
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
              }}>
            </Dropdown>
            <TextInput placeholder = "Enter Answer" onChangeText={handleAnswer}></TextInput>
            <Button onPress = {createAccount} title ="Add Account" />
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