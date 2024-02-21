import {View, Text, StyleSheet, Button, TextInput, Alert} from "react-native";
import {useState} from 'react';

export default function SignUp( {navigation} ) {
    const[userName, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[verifyPassword, setVerifypassword] = useState("");

    const handleUsername =(userName) => {
        setUsername(userName);
        console.log(userName);
    }

    const handlePassword = (password) => {
        setPassword(password);
        console.log(password);
    }

    const handleVerifyPassword = (verifyPassword) => {
        setVerifypassword(verifyPassword);
        console.log(verifyPassword);
    }
    
    const createAccount = () =>{
       if(password == verifyPassword)
       {
        Alert.alert('User added', [
          {text: 'Okay', onPress: () => console.log('Alert Closed')}
        ]);
        navigation.navigate("LoginScreen");
       }
       else{
        Alert.alert('Error', [
          {text: 'Okay', onPress: () => console.log('Alert Closed')}
        ]);
       }
    }
    
    return(
        
        <View style = {styles.container}>
            <TextInput placeholder="Select Username" onChangeText = {handleUsername}></TextInput> 
            <TextInput placeholder="Select Password" onChangeText = {handlePassword} ></TextInput>
            <TextInput placeholder="Retype Password" onChangeText = {handleVerifyPassword} ></TextInput>
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