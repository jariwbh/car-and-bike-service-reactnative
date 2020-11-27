import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'

export class SelectCompanyNameScreen extends Component {
    render() {
        return (
            <ImageBackground source={require('../../../assets/images/background.png')} style={styles.backgroundImage} >
                {/* <View>
                    <Text> textInComponent </Text>
                </View> */}
            </ImageBackground>
        )
    }
}

export default SelectCompanyNameScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    }
})