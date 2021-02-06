import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/Splash';
import Home from '../screens/Home';
import Login from '../screens/Login'
import Signup from '../screens/Signup';
import Dashboard from '../screens/Dashboard';
import Donor from '../screens/Donor'

const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: null, headerBackTitle: '' }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: null, headerBackTitle: '' }} />
                <Stack.Screen name="Login" component={Login} options={{ headerStyle: { backgroundColor: '#d6004e', }, }} />
                <Stack.Screen name="Signup" component={Signup} options={{ headerStyle: { backgroundColor: '#d6004e', }, }} />
                <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: null, headerBackTitle: '' }} />
                <Stack.Screen name="Donor" component={Donor} options={{ headerStyle: { backgroundColor: '#d6004e', }, }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;