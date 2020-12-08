import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import AuthStackScreen from './AuhStack';

const Stack = createStackNavigator();

const NavigationsApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none' initialRouteName="Auth">
                <Stack.Screen name="Tabnavigation" component={TabNavigation} />
                <Stack.Screen name="Auth" component={AuthStackScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigationsApp