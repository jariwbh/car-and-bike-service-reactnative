import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen'
import SignInScreen from '../screens/SignInScreen/SignInScreen'
import SplashScreen from '../screens/SplashScreen/SplashScreen'



import TabNavigation from './TabNavigation';
// import { isAuthenticated } from '../Helpers/Auth';

const Stack = createStackNavigator();

export default NavigationsApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignIn" headerMode='none'>
                {/* {isAuthenticated() ?
                    (
                        <> */}
                <Stack.Screen name="Splash" component={SplashScreen} ></Stack.Screen>
                <Stack.Screen name="SignUp" component={SignUpScreen} ></Stack.Screen>
                <Stack.Screen name="SignIn" component={SignInScreen} ></Stack.Screen>
                <Stack.Screen name="Tabnavigation" component={TabNavigation} ></Stack.Screen>
                {/* </>
                    ) : (
                        <> */}

                {/* </>
                    )
                } */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};