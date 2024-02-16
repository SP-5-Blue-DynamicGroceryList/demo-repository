import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function LoginScreen({navigation}) {
  
  
  return (
    <View style={styles.container}>
      <Text>SP-5 Blue Grocery List</Text>
      <TextInput placeholder='Username' />
      <TextInput placeholder = 'Password' />
      <Button title = "Log in" onPress = {() => navigation.navigate("Profile")} /> 
      <Button title = "Sign up" onPress={() => navigation.navigate("SignUp")} />
    </View>
  );
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


