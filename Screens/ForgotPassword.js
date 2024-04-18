import { React } from 'react'
import { View, Text, StyleSheet, Button, TextInput, Alert, Image, TouchableOpacity } from "react-native";
import { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

export default function ForgotPassword({ navigation }) {
  // const [value, setValue] = useState("" | null);
  const [email, setEmail] = useState("" | null);

  const auth = getAuth();

  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert("Password reset link has sent successfully")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }

  return (
    <KeyboardAwareScrollView style={styles.container} extraScrollHeight={70}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.header}>Password Reset</Text>
        <Text style={styles.text}>Enter your email to receive a password reset link</Text>
        <View style={styles.group}>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            autoCapitalize='none'
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => resetPassword(email)}>
            <Text style={styles.buttonText}>Send Link</Text>
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
  header: {
    fontSize: 28,
    paddingVertical: 10,
    margin: 5,
  },
  text: {
    fontSize: 14,
  },
  group: {
    paddingVertical: 60,
  },
  input: {
    backgroundColor: '#eeeeee',
    borderRadius: 20,
    width: 350,
    height: 50,
    marginVertical: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },

});
