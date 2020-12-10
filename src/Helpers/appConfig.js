//import AsyncStorage from '@react-native-community/async-storage';

// async function getdata() {
//     const getUser = await AsyncStorage.getItem('@authuser')
//     let id
//     const user = JSON.parse(getUser)
//     if (getUser === null || getUser === undefined) {
//         return id = "5fbf8f809c28220330088e84"
//     } else {
//         return id = user.addedby
//     }
// }

const appConfig = {
    baseUrl: "http://app.membroz.com/api/",
    headers: {
        'Content-Type': 'application/json',
        'authkey': "5fbf8f809c28220330088e84"
    }
}


export default appConfig;