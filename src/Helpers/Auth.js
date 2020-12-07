import AsyncStorage from "@react-native-community/async-storage";

export const SECRET_KEY = '@authuser'

export const isAuthenticated = () => (
   AsyncStorage.getItem(SECRET_KEY) !== null
)

export const authenticateUser = (user) => (
   console.log('user', user),
   AsyncStorage.setItem(SECRET_KEY, user)
)

export const getUser = () => {
   return AsyncStorage.getItem(SECRET_KEY);
}

export const removeUser = () => {
   return AsyncStorage.removeItem(SECRET_KEY);
}



