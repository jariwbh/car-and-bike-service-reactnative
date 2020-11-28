import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen'
import SignInScreen from '../screens/SignInScreen/SignInScreen'
import SplashScreen from '../screens/SplashScreen/SplashScreen'
import BookServiceScreen from '../screens/BookServiceScreen/BookServiceScreen';
import SelectTypeScreen from '../screens/SelectTypeScreen/SelectTypeScreen';
import SelectServiceScreen from '../screens/SelectServiceScreen/SelectServiceScreen';
import SelectCompanyNameScreen from '../screens/SelectCompanyNameScreen/SelectCompanyNameScreen';
import MyServiceScreen from '../screens/MyServiceScreen/MyServiceScreen';
import { isAuthenticated } from '../Helpers/Auth';

const Stack = createStackNavigator();

export default NavigationsApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignIn" headerMode="none">
                {/* {isAuthenticated() ?
                    (
                        <> */}
                <Stack.Screen name="Splash" component={SplashScreen} ></Stack.Screen>
                <Stack.Screen name="SignUp" component={SignUpScreen} ></Stack.Screen>
                <Stack.Screen name="SignIn" component={SignInScreen} ></Stack.Screen>
                {/* </>
                    ) : (
                        <> */}
                <Stack.Screen name="BookService" component={BookServiceScreen} ></Stack.Screen>
                <Stack.Screen name="SelectType" component={SelectTypeScreen} ></Stack.Screen>
                <Stack.Screen name="SelectService" component={SelectServiceScreen} ></Stack.Screen>
                <Stack.Screen name="SelectCompanyName" component={SelectCompanyNameScreen} ></Stack.Screen>
                <Stack.Screen name="MyService" component={MyServiceScreen} ></Stack.Screen>
                {/* </>
                    )
                } */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};