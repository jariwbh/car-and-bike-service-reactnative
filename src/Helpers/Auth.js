import { AsyncStorage } from 'react-native'

export const SECRET_KEY = 'authuser'
export const isAuthenticated = async () => await (AsyncStorage.getItem(SECRET_KEY) !== null)

export const authenticateUser = async (user) => await AsyncStorage.setItem(SECRET_KEY, user)

export const getUser = () => {
   return JSON.parse(AsyncStorage.getItem(SECRET_KEY));
}


