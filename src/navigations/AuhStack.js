import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen'
import SignInScreen from '../screens/SignInScreen/SignInScreen'
import HelpCenterScreen from '../screens/HelpCenter/HelpCenterScreen'
const AuthStack = createStackNavigator();

export default function AuthStackScreen() {
    return (
        <AuthStack.Navigator initialRouteName="SignIn" headerMode='none'>
            <AuthStack.Screen name="SignUp" component={SignUpScreen} />
            <AuthStack.Screen name="SignIn" component={SignInScreen} />
            <AuthStack.Screen name="HelpCenter" component={HelpCenterScreen} />
        </AuthStack.Navigator>
    );
}