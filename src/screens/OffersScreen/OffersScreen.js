import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, ActivityIndicator } from 'react-native'

export class OffersScreen extends Component {
    render() {
        return (
            <ImageBackground source={require('../../../assets/images/background.png')} style={styles.backgroundImage} >
                <View style={styles.container}>
                    <Text style={{ fontSize: 30 }}> No Offers </Text>
                    {/* <ActivityIndicator size="large" color="#AAAAAA" /> */}
                </View>
            </ImageBackground>
        )
    }
}

export default OffersScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    }
})