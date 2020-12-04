import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';

export default class HelpCenterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ImageBackground source={require('../../../assets/images/background.png')} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.header}>I Can't Log in </Text>
                    </View>
                    <View >
                        <Text style={styles.text_input}>If you aren't able to locate your account after entering your username: </Text>
                    </View>
                    <View >

                        <Text style={styles.text}>Make sure that you're entering your username correctly, especially if it contains repeated characters. </Text>
                    </View>
                    <View >
                        <Text style={styles.text}>Don't include the @ symbol when entering your username. </Text>
                    </View>
                    <View >
                        <Text style={styles.text_input}>If you think your username was changed as a result of your account being compromised: </Text>
                    </View>
                    <View >
                        <Text style={styles.text}>Check if you've received an email from Instagram notifying you that your account information was changed.</Text>
                    </View>
                    <View >
                        <Text style={styles.text}>Ask a friend to visit your profile and take a screenshot of your current username.</Text>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}






const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    header: {
        fontWeight: 'bold',
        fontSize: hp('4%'),
        paddingBottom: hp('2%'),
        marginTop: hp('10%')
    },
    text: {
        color: '#737373',
        fontSize: hp('2%'),
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: hp('2%'),
        paddingHorizontal: hp('8%')
    },
    text_input: {
        fontWeight: 'bold',
        fontSize: hp('2%'),
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: hp('2%'),
        paddingHorizontal: hp('5%')
    },
});

















// If you aren't able to locate your account after entering your username:

// Make sure that you're entering your username correctly, especially if it contains repeated characters.
// Don't include the @ symbol when entering your username.
// If you think your username was changed as a result of your account being compromised:

// Check if you've received an email from Instagram notifying you that your account information was changed.
// Ask a friend to visit your profile and take a screenshot of your current username.