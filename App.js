import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginScreen from "./Screens/LoginScreen";
import SignUp from "./Screens/SignUp";
import DisplayTabs from "./Screens/HomeScreen"
import TopBarNavigator from "./Navigators/TopBarNavigator";
import BottomBarNavigator from "./Navigators/BottomBarNavigator"
import ForgotPassword from "./Screens/ForgotPassword";

const Stack = createNativeStackNavigator(); //similar to Stack data structure

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
        <Stack.Screen options={{ title: "" }} name="HomeScreen" component={DisplayTabs} />
        <Stack.Screen options={{ title: "" }} name="Profile" component={BottomBarNavigator} />
        <Stack.Screen options={{ title: "" }} name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
