import React from 'react';
import { Creation, Home } from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="home" component={Home} />
                <Stack.Screen name="create" component={Creation} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;