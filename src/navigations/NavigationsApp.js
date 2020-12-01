import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createSwitchNavigator } from "@react-navigation/compat";
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen'
import SignInScreen from '../screens/SignInScreen/SignInScreen'
import SplashScreen from '../screens/SplashScreen/SplashScreen'
import TabNavigation from './TabNavigation';
import { isAuthenticated } from '../Helpers/Auth';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
function AuthStackScreen() {
    return (
        <AuthStack.Navigator initialRouteName="SignIn" headerMode='none'>
            <AuthStack.Screen name="Splash" component={SplashScreen} />
            <AuthStack.Screen name="SignUp" component={SignUpScreen} />
            <AuthStack.Screen name="SignIn" component={SignInScreen} />
        </AuthStack.Navigator>
    );
}

export default NavigationsApp = () => {
    return (
        <NavigationContainer>
            {isAuthenticated() ? (
                <>
                    <Stack.Navigator initialRouteName="Tabnavigation" headerMode='none'>
                        <Stack.Screen name="Tabnavigation" component={TabNavigation} />
                    </Stack.Navigator>
                </>
            ) : (
                    <>
                        <AuthStackScreen />
                    </>
                )
            }
        </NavigationContainer>
    );
};