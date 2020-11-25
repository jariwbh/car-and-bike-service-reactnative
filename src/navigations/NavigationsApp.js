import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen'
import SignInScreen from '../screens/SignInScreen/SignInScreen'
import SplashScreen from '../screens/SplashScreen/SplashScreen'
import BookServiceScreen from '../screens/BookServiceScreen/BookServiceScreen';

const Stack = createStackNavigator();

export default NavigationsApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="BookService" headerMode="none">
                <Stack.Screen name="Splash" component={SplashScreen} ></Stack.Screen>
                <Stack.Screen name="SignUp" component={SignUpScreen} ></Stack.Screen>
                <Stack.Screen name="SignIn" component={SignInScreen} ></Stack.Screen>
                <Stack.Screen name="BookService" component={BookServiceScreen} ></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};