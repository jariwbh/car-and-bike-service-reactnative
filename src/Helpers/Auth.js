import AsyncStorage from '@react-native-community/async-storage'

export const SECRET_KEY = 'authuser'
export const isAuthenticated = async () => await (
   AsyncStorage.getItem(SECRET_KEY) != null
   ||
   AsyncStorage.getItem(SECRET_KEY) != undefined
)

export const authenticateUser = async (user) => await (
   AsyncStorage.setItem(SECRET_KEY, user)
)

export const getUser = () => {
   return AsyncStorage.getItem(SECRET_KEY);
}

export const removeUser = () => {
   return AsyncStorage.removeItem(SECRET_KEY);
}



