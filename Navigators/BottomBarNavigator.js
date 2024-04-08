import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Profile from '../Screens/Profile'
import AccountInfo from '../Screens/AccountInfo'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const homeName = 'Home';
const accountName = 'Account';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {

    return (
        <Tab.Navigator
            initialRouteName='homeName'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let barIcon;
                    let rn = route.name;

                    if (rn === homeName) {
                        barIcon = focused ? 'home' : 'home-outline'
                    }
                    else if (rn === accountName) {
                        barIcon = focused ? 'account' : 'account-outline'
                    }

                    return <MaterialCommunityIcons name={barIcon} size={size} color={color} />
                },
            })}
            tabBarOptions={{
                activeTintColor: '#3d85c6',
                inactiveTintColor: 'grey',
                labelStyle: { fontSize: 10 },
                style: { padding: 10, height: 70 },
            }}

        >

            <Tab.Screen
                options={{ headerShown: false }}
                name={homeName}
                component={Profile} />
            <Tab.Screen
                options={{ headerShown: false }}
                name={accountName}
                component={AccountInfo} />

        </Tab.Navigator>

    )
}
