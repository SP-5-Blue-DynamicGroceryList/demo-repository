import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function LoginScreen({ navigation }) {
  
  return (
    <KeyboardAwareScrollView style={styles.container} extraScrollHeight={70}>
      <View style={{ alignContent: 'center' }}>
        <Image
          style={styles.image}
          source={require('../Images/LoginImage/cart.png')}
        />
        <Text style={styles.header}>Login</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Username"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
          />
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
            <Text style={styles.buttonForgot}>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer1}
            onPress={() => navigation.navigate("Profile")}>
            <Text style={styles.buttonText1}>Login</Text>
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
  },
  header: {
    fontSize: 28,
    paddingVertical: 20,
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


