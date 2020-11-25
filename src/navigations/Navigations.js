import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen/SplashScreen'
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen'

const Stack = createStackNavigator();

export default Navigations = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" headerMode="none">
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};