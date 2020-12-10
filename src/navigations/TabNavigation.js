import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

//-------ProfileStackScreen
import MyProfileScreen from '../screens/MyProfileScreen/MyProfileScreen';
import UpdateProfileScreen from '../screens/UpdateProfile/UpdateProfileScreen';

//-------HomeStackScreen
import SelectTypeScreen from '../screens/SelectTypeScreen/SelectTypeScreen';
import SelectServiceScreen from '../screens/SelectServiceScreen/SelectServiceScreen';
import SelectCompanyNameScreen from '../screens/SelectCompanyNameScreen/SelectCompanyNameScreen';
import MyServiceScreen from '../screens/MyServiceScreen/MyServiceScreen';
import BookServiceScreen from '../screens/BookServiceScreen/BookServiceScreen';
import OffersScreen from '../screens/OffersScreen/OffersScreen';
import { BackHandler } from 'react-native';

const ProfileStack = createStackNavigator();
function ProfileStackScreen() {
    return (
        <ProfileStack.Navigator initialRouteName="MyProfile" headerMode='none'>
            <ProfileStack.Screen name="MyProfile" component={MyProfileScreen} />
            <ProfileStack.Screen name="UpdateProfile" component={UpdateProfileScreen} />
        </ProfileStack.Navigator>
    );
}

const HomeStack = createStackNavigator();
function HomeStackScreen() {
    return (
        <HomeStack.Navigator initialRouteName="SelectType" headerMode='none'>
            <HomeStack.Screen name="SelectType" component={SelectTypeScreen} />
            <HomeStack.Screen name="SelectService" component={SelectServiceScreen} />
            <HomeStack.Screen name="SelectCompanyName" component={SelectCompanyNameScreen} />
            <HomeStack.Screen name="MyService" component={MyServiceScreen} />
            <HomeStack.Screen name="BookService" component={BookServiceScreen} />
            <HomeStack.Screen name="Offers" component={OffersScreen} />
        </HomeStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Home') {
                        return (
                            <Ionicons
                                name={focused ? 'ios-home' : 'ios-home'}
                                size={20}
                                color={color}
                            />
                        );
                    } else if (route.name === 'Offers') {
                        return (
                            <MaterialCommunityIcons
                                name={focused ? 'gift-outline' : 'gift-outline'}
                                size={20}
                                color={color}
                            />
                        );
                    } else if (route.name === 'Profile') {
                        return (
                            <Ionicons
                                name={focused ? 'ios-person' : 'ios-person'}
                                size={20}
                                color={color}
                            />
                        );
                    } else if (route.name === 'My Service') {
                        return (
                            <Ionicons
                                name={focused ? 'ios-list' : 'ios-list'}
                                size={20}
                                color={color}
                            />
                        );
                    }
                },
            })}
            tabBarOptions={{
                style: {
                    backgroundColor: '#FFFFFF',
                    borderTopRightRadius: 21,
                    borderTopLeftRadius: 21,
                    position: 'absolute',
                },
                activeTintColor: '#FFBA00',
                inactiveTintColor: '#808B96',
                keyboardHidesTabBar: true,
                backBehavior: "history",
            }}
        >
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Offers" component={OffersScreen} />
            <Tab.Screen name="Profile" component={ProfileStackScreen} />
            <Tab.Screen name="My Service" component={MyServiceScreen} />
        </Tab.Navigator>
    );
}
