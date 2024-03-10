import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {SafeAreaProvider} from 'react-native-safe-area-context';
import LoginScreen from "./Screens/LoginScreen";
import SignUp from "./Screens/SignUp";
import DisplayTabs from "./Screens/HomeScreen"
import TopBarNavigator from "./Navigators/TopBarNavigator";
import BottomBarNavigator from "./Navigators/BottomBarNavigator"
import ForgotPassword from "./Screens/ForgotPassword";

// Testing changes
const Stack = createNativeStackNavigator(); //similar to Stack data structure

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "LoginScreen" component = {LoginScreen}/>
        <Stack.Screen name = "SignUp" component = {SignUp} />
        <Stack.Screen name = "HomeScreen" component = {DisplayTabs} />
        <Stack.Screen name = "Profile" component = {BottomBarNavigator} />
        <Stack.Screen name = "ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>


// <SafeAreaProvider>
    //     <TopBarNavigator />
    //      Testing Comment VC
    // </SafeAreaProvider>
  );
}

