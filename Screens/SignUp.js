import { View, Text, StyleSheet, Button, TextInput, Alert, Image, TouchableOpacity } from "react-native";
import { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {FIREBASE_AUTH} from '../Firebase/FirebaseConfig.ts';
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp({ navigation }) {

  const [value, setValue] = useState("" | null);
  const [answer, setAnswer] = useState("");

  const data = [
    { label: 'What city were you born in?', value: 1 },
    { label: 'What is your oldest sibling\'s middle name?', value: 2 },
    { label: 'What was the first concert you attended?', value: 3 },
    { label: 'What is your mother\'s maiden name?', value: 4 },
    { label: 'What was the make and model of your first car?', value: 5 },
    { label: 'What is your dream job?', value: 6 },
  ]
  
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifypassword] = useState("");
  const auth = FIREBASE_AUTH;

  const signUp = async () => {
    try {
      if (password === verifyPassword) {
        Alert.alert(
          'Success',
          'Success',
          [{ text: 'Okay', onPress: () => console.log('Alert Closed') }],
        );
        const response = await createUserWithEmailAndPassword(auth,userName,password);
        console.log(response);
        navigation.navigate("LoginScreen");
      } else {
        Alert.alert(
          'Error',
          'Sign up failed',
          [{ text: 'Okay', onPress: () => console.log('Alert Closed') }],
        );
      }
    }
    catch (error) {
      console.log(error);
      Alert.alert(
        'Error',
        'Sign in failed',
        [{ text: 'Okay', onPress: () => console.log('Alert Closed') }],
      );
    }
  }
  const handleAnswer = (answer) => {
    setAnswer(answer);
    console.log(answer);
  }

  const handleUsername = (userName) => {
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


  return (
    <KeyboardAwareScrollView style={styles.container} extraScrollHeight={70}>
      <View style={{ alignContent: 'center' }}>
        <Image
          style={styles.image}
          source={require('../Images/SignUpImage/cart.png')}
        />
        <Text style={styles.header}>Sign Up</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            onChangeText={handleUsername}
            autoCapitalize='none'
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={handlePassword}
            autoCapitalize='none'
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            onChangeText={handleVerifyPassword}
            autoCapitalize='none'
          />
        </View>
        <Dropdown
          style={styles.dropdown}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Security Question"
          value={value}
          onChange={item => {
            setValue(item.value);
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Answer"
          onChangeText={handleAnswer}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={signUp}>
          <Text style={styles.buttonText1}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.text}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={styles.buttonText2}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    margin: 15,
  },
  header: {
    fontSize: 28,
    paddingVertical: 5,
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#eeeeee',
    borderRadius: 20,
    width: 350,
    height: 50,
    marginVertical: 10,
    padding: 10,
    justifyContent: 'center',
  },
  button: {
    width: '33%',
  },
  dropdown: {
    marginVertical: 5,
    height: 50,
    borderColor: '#bcbcbc',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
  buttonContainer: {
    width: 350,
    height: 50,
    backgroundColor: '#3d85c6',
    borderRadius: 20,
    padding: 10,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText1: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
  text: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'center',
  },
  buttonText2: {
    marginLeft: 5,
    color: '#3d85c6',
  },

});
