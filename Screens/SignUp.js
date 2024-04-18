import { View, Text, StyleSheet, Button, TextInput, Alert, Image, TouchableOpacity } from "react-native";
import { useState } from 'react';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FIREBASE_AUTH } from '../Firebase/FirebaseConfig.ts';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getAuth } from "firebase/auth";
import { writePersonalData } from '../Firebase/FirebaseConfig.ts';
import { writePasscodeData } from '../Firebase/FirebaseConfig.ts';


export default function SignUp({ navigation }) {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFName] = useState("");
  const [lastName, setLName] = useState("");
  const [pinCode, setPCode] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
        const userNameSplit = userName.split("@");
        const userAddress = userNameSplit[0];
        const response = await createUserWithEmailAndPassword(auth, userName, password);
        console.log(response);
        writePersonalData(firstName, lastName, userAddress);
        writePasscodeData(pinCode, userAddress)
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

  const handleUsername = (userName) => {
    setUsername(userName);
    console.log(userName);
  }

  const handlePassword = (password) => {
    setPassword(password);
    console.log(password);
  }

  const handleFName = (fname) => {
    setFName(fname);
    console.log(fname);
  }

  const handleLName = (lname) => {
    setLName(lname);
    console.log(lname);
  }

  const handlePCode = (pcode) => {
    setPCode(pcode);
    console.log(pcode);
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
        <Text style={styles.subheading}>Set up your code to allow others to access your grocery list</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Unique Code"
            onChangeText={handlePCode}
            autoCapitalize='none'
          />
          <TextInput
            style={styles.input}
            placeholder="First Name"
            onChangeText={handleFName}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            onChangeText={handleLName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            onChangeText={handleUsername}
            autoCapitalize='none'
          />
          <View style={styles.parent}>
            <TextInput
              secureTextEntry={!showPassword}
              value={password}
              style={styles.input}
              placeholder="Password"
              onChangeText={handlePassword}
              autoCapitalize='none'
            />
            <MaterialCommunityIcons
              name={showPassword ? 'eye-off' : 'eye'}
              size={24}
              color="#aaa"
              style={styles.icon}
              onPress={toggleShowPassword}
            />
          </View>
          <View style={styles.parent}>
            <TextInput
              secureTextEntry={!showPassword}
              value={verifyPassword}
              style={styles.input}
              placeholder="Confirm Password"
              onChangeText={handleVerifyPassword}
              autoCapitalize='none'
            />
            <MaterialCommunityIcons
              name={showPassword ? 'eye-off' : 'eye'}
              size={24}
              color="#aaa"
              style={styles.icon}
              onPress={toggleShowPassword}
            />
          </View>
        </View>
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
    marginTop: 50,
  },
  header: {
    fontSize: 28,
    paddingVertical: 5,
    alignSelf: 'center',
  },
  subheading: {
    fontSize: 14,
    padding: 5,
    margin: 5,
    textAlign: 'center',
  },
  parent: {
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#eeeeee',
    borderRadius: 20,
    width: 350,
    height: 50,
    marginVertical: 5,
    padding: 10,
    justifyContent: 'center',
    flex: 1,
  },
  icon: {
    position: 'absolute',
    right: 18,
  },
  button: {
    width: '33%',
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
    marginTop: 20,
    justifyContent: 'center',
  },
  buttonText2: {
    marginLeft: 5,
    color: '#3d85c6',
  },

});
