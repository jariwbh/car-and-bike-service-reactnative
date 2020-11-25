import React, { useEffect } from 'react'
import { View, Image, StyleSheet } from 'react-native'

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('SignIn')
        }, 3000)
    }, [])
    return (
        <View>
            <Image source={require('../../../assets/images/splash.png')} style={styles.Splash} />
        </View>
    )
};

export default SplashScreen;

const styles = StyleSheet.create({
    Splash: {
        flex: 1,
        resizeMode: "cover"
    }
})
