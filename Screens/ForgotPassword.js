import { React } from 'react'
import { View, Text, StyleSheet, Button, TextInput, Alert, Image, TouchableOpacity } from "react-native";
import { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function ForgotPassword({ navigation }) {

  const [value, setValue] = useState("" | null);
  const [answer, setAnswer] = useState("" | null);

  const data = [
    { label: 'What city were you born in?', value: 1 },
    { label: 'What is your oldest sibling\'s middle name?', value: 2 },
    { label: 'What was the first concert you attended?', value: 3 },
    { label: 'What is your mother\'s maiden name?', value: 4 },
    { label: 'What was the make and model of your first car?', value: 5 },
    { label: 'What is your dream job?', value: 6 },
  ]

  return (
    <KeyboardAwareScrollView style={styles.container} extraScrollHeight={70}>
      <View style={{ justifyContent: 'center' }}>
        <Text style={styles.header}>Password Reset</Text>
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
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
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
    paddingVertical: 20,
    alignSelf: 'center',
    margin: 5,
  },
  dropdown: {
    marginVertical: 5,
    height: 50,
    borderColor: '#bcbcbc',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
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
