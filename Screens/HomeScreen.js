import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import FruitScreen from './FruitScreen';
import VegetableScreen from './VegetableScreen';
import SnacksScreen from './SnacksScreen';
import MeatScreen from './MeatScreen';
import DairyScreen from './DairyScreen';
import CheckList from './CheckList';

const Tab = createMaterialTopTabNavigator();


function DisplayTabs() {
    const insets = useSafeAreaInsets();

    return (
        <Tab.Navigator
            initialRouteName='HomeScreen'
            tabBarOptions={{
                activeTintColor: "#E91E63",
                labelStyle: { fontSize: 14 },
                style: { backgroundColor: 'white' }
            }}
            screenOptions={{
                tabBarScrollEnabled: true,
            }}
        >
            <Tab.Screen name="Grocery List"
                component={CheckList}
                options={{ topbarLabel: 'Checklist' }}
            />

            <Tab.Screen name="Fruit"
                component={FruitScreen}
                options={{ topBarLabel: 'Fruit' }}
            />

            <Tab.Screen name="Vegetable"
                component={VegetableScreen}
                options={{ topBarLabel: 'Vegetable' }}
            />

            <Tab.Screen name="Snacks"
                component={SnacksScreen}
                options={{ topBarLabel: 'SnacksScreen' }}
            />

            <Tab.Screen name="Meat"
                component={MeatScreen}
                options={{ topBarLabel: 'MeatScreen' }}
            />

            <Tab.Screen name="Dairy"
                component={DairyScreen}
                options={{ topBarLabel: 'DairyScreen' }}
            />

        </Tab.Navigator>
    )
}


export default function TopBarNavigator() {
    return (
        <DisplayTabs></DisplayTabs>
    )
}
