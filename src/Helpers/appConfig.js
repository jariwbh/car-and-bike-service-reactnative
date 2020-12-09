import AsyncStorage from '@react-native-community/async-storage';

async function getdata() {
    const getUser = await AsyncStorage.getItem('@authuser')
    const user = JSON.parse(getUser)
    const id = user.addedby
    console.log('id', id)
    return id
}

const appConfig = {
    baseUrl: "http://app.membroz.com/api/",
    headers: {
        'Content-Type': 'application/json',
        'authkey': "5fbf8f809c28220330088e84"
    }
}

export default appConfig;