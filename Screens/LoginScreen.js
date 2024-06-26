import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { useState } from 'react';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../Firebase/FirebaseConfig.ts';
import { writeListData } from '../Firebase/FirebaseConfig.ts';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const auth = FIREBASE_AUTH;
  const signIn = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, userName, password);
      console.log(response);
      navigation.navigate("Profile");
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

  return (
    <KeyboardAwareScrollView style={styles.container} extraScrollHeight={70}>
      <View style={{ alignContent: 'center' }}>
        <Image
          style={styles.image}
          source={require('../Images/LoginImage/cart.png')}
        />
        <Text style={styles.header}>Log in</Text>
        <View>
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
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
            <Text style={styles.buttonForgot}>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer1}
            onPress={signIn}>
            <Text style={styles.buttonText1}>Log in</Text>
          </TouchableOpacity>
          <View style={styles.text}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.buttonText2}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
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
    marginTop: 70,
  },
  header: {
    fontSize: 28,
    paddingVertical: 20,
    alignSelf: 'center',
  },
  parent: {
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#eeeeee',
    borderRadius: 20,
    width: 350,
    height: 50,
    marginVertical: 10,
    padding: 10,
    justifyContent: 'center',
    flex: 1,
  },
  icon: {
    position: 'absolute',
    right: 18,
  },
  buttonForgot: {
    alignSelf: 'flex-end',
    color: '#3d85c6',
    marginVertical: 12,
  },
  buttonContainer1: {
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
    marginTop: 55,
    justifyContent: 'center',
  },
  buttonText2: {
    marginLeft: 5,
    color: '#3d85c6',
  },

});


