import React, { Component } from 'react';
import { ImageBackground, Dimensions, Platform, Image, View, StyleSheet, FlatList, Text, TextInput, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import * as Animatable from 'react-native-animatable';

class SignUpScreen extends Component {
    render() {
        return (
            <ImageBackground source={require('../../../assets/images/background.png')} style={styles.backgroundImage} >
                <View style={styles.container}>
                    <Animatable.View
                        animation="fadeInUpBig"
                    >
                        <View style={styles.header}>
                            <Text style={styles.text_header}>Register Now!</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <View style={styles.inputView}>
                                <Image source={require('../../../assets/icons/user.png')} style={styles.UserName_Image} />
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="UserName"
                                    type='clear'
                                    placeholderTextColor="#737373"
                                />
                            </View>
                            <View style={styles.inputView}>
                                <Image source={require('../../../assets/icons/user.png')} style={styles.UserName_Image} />
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Email"
                                    type='clear'
                                    placeholderTextColor="#737373"
                                />
                            </View>
                            <View style={styles.inputView} >
                                <Image source={require('../../../assets/icons/login.png')} style={styles.Passowrd_Image} />
                                <TextInput
                                    secureTextEntry
                                    style={styles.inputText}
                                    placeholder="Mobile"
                                    type='clear'
                                    placeholderTextColor="#737373"
                                />
                            </View>
                            <TouchableOpacity style={styles.loginBtn} onPress={() => { }}>
                                <Text style={styles.loginText} >Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 80, justifyContent: 'center', flexDirection: 'row' }} >
                            <Text style={styles.innerText}> Already got an account? </Text>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('SignIn') }} >
                                <Text style={styles.baseText}>SignIn</Text>
                            </TouchableOpacity>
                        </View>

                    </Animatable.View>
                </View>
            </ImageBackground>
        );
    }
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    header: {
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 30,
        marginTop: 150
    },
    text_Or: {
        color: '#000',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
    },
    text_header: {
        color: '#000',
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'monospace'
    },
    UserName_Image: {
        width: 20,
        height: 25,
        marginTop: 10,
        marginLeft: 20
    },
    Passowrd_Image: {
        width: 25,
        height: 25,
        marginTop: 10,
        marginLeft: 20
    },
    emailStyle: {
        padding: 8,
        margin: 5,
        height: 40,
        width: 40,
        marginLeft: 5,
    },
    passStyle: {
        padding: 8,
        margin: 5,
        height: 40,
        width: 40,
        marginLeft: 5,
    },
    inputView: {
        alignItems: "center",
        marginBottom: 20,
        width: "80%",
        flexDirection: 'row',
        backgroundColor: "#fff",
        borderColor: '#fff',
        height: 55,
        borderRadius: 25,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        margin: 10
    },
    inputText: {
        paddingLeft: 3,
        color: "black",
        marginLeft: 15,
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#FFBA00",
        borderRadius: 25,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
        marginBottom: 10,
        margin: 10
    },
    loginText: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 20
    },
    baseText: {
        fontWeight: 'normal',
        color: '#183BAE',
        fontSize: 15
    },
    innerText: {
        color: '#737373',
        fontSize: 15
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    }
});