import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import AuthStackScreen from './AuhStack';
//import AsyncStorage from '@react-native-community/async-storage';
const Stack = createStackNavigator();

export default class NavigationsApp extends Component {
    // getdata = async () => {
    //     await AsyncStorage.getItem('@authuser') !== null
    // }
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator headerMode='none' initialRouteName="Auth">
                    <Stack.Screen name="Tabnavigation" component={TabNavigation} />
                    <Stack.Screen name="Auth" component={AuthStackScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

// const NavigationsApp = () => {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator headerMode='none' initialRouteName="Auth">
//                 <Stack.Screen name="Tabnavigation" component={TabNavigation} />
//                 <Stack.Screen name="Auth" component={AuthStackScreen} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// };

// export default NavigationsApp
