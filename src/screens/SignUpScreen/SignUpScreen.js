import React, { Component, useState } from 'react';
import { ImageBackground, Dimensions, Platform, Image, View, StyleSheet, FlatList, Text, TextInput, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RegisterService } from '../../services/RegisterService/RegisterService';

class SignUpScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fullname: null,
            fullnameError: null,
            username: null,
            usernameError: null,
            mobilenumber: null,
            mobilenumberError: null,
        }
        this.setFullName = this.setFullName.bind(this);
        this.setUserName = this.setUserName.bind(this);
        this.setMobileNumber = this.setMobileNumber.bind(this);
        this.onPressSubmit = this.onPressSubmit.bind(this);
    }

    setFullName(fullname) {
        if (!fullname || fullname.length <= 0) {
            return this.setState({ fullnameError: 'User Name cannot be empty' });
        }
        return this.setState({ fullname: fullname, fullnameError: null })
    }

    setUserName(email) {
        const re = /\S+@\S+\.\S+/;
        if (!email || email.length <= 0) {
            return this.setState({ usernameError: 'Email cannot be empty' });
        }
        if (!re.test(email)) {

            return this.setState({ usernameError: 'Ooops! We need a valid email address' });
        }
        return this.setState({ username: email, usernameError: null })
    }

    setMobileNumber(mobilenumber) {
        const reg = /^[0]?[789]\d{9}$/;
        if (!mobilenumber || mobilenumber.length <= 0) {
            return this.setState({ mobilenumberError: 'Mobile Number cannot be empty.' });
        }
        if (!reg.test(mobilenumber)) {
            return this.setState({ mobilenumberError: 'Ooops! We need a valid Mobile Number.' });
        }
        return this.setState({ mobilenumber: mobilenumber, mobilenumberError: null })
    }

    resetScreen() {
        this.setState({
            fullname: null,
            fullnameError: null,
            username: null,
            usernameError: null,
            mobilenumber: null,
            mobilenumberError: null,
        })
    }

    onPressSubmit = async () => {
        const { fullname, username, mobilenumber } = this.state;
        if (!fullname || !username || !mobilenumber) {
            this.setFullName(fullname)
            this.setUserName(username)
            this.setMobileNumber(mobilenumber)
            return;
        }

        const body = {
            property: {
                fullname: fullname,
                email: username,
                mobile_number: mobilenumber,
            }
        }

        await RegisterService(body).then(response => {
            if (response != null) {
                this.props.navigation.navigate('SignIn')
                this.resetScreen()
            }
        })
    }

    render() {
        return (
            <ImageBackground source={require('../../../assets/images/background.png')} style={styles.backgroundImage} >
                <View style={styles.container}>
                    <Animatable.View
                        animation="fadeInUpBig"
                    >
                        <ScrollView>
                            <View style={styles.header}>
                                <Text style={styles.text_header}>Register Now!</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <View style={styles.inputView}>
                                    <FontAwesome name="user" size={27} color="#737373" style={{ paddingLeft: 15 }} />
                                    <TextInput
                                        label="User Name"
                                        style={styles.TextInput}
                                        placeholder="User Name"
                                        type='clear'
                                        placeholderTextColor="#737373"
                                        returnKeyType="next"
                                        onChangeText={(fullname) => this.setFullName(fullname)}
                                    />
                                    <Text>{this.state.fullnameError && this.state.fullnameError}</Text>
                                </View>
                                <View style={styles.inputView}>
                                    <MaterialCommunityIcons name="email" size={27} color="#737373" style={{ paddingLeft: 15 }} />
                                    <TextInput
                                        style={styles.TextInput}
                                        placeholder="Email Id"
                                        type='clear'
                                        placeholderTextColor="#737373"
                                        autoCapitalize="none"
                                        autoCompleteType="email"
                                        textContentType="emailAddress"
                                        keyboardType="email-address"
                                        onChangeText={(username) => this.setUserName(username)}
                                    />
                                    <Text>{this.state.usernameError && this.state.usernameError}</Text>
                                </View>
                                <View style={styles.inputView} >
                                    <FontAwesome name="phone" size={27} color="#737373" style={{ paddingLeft: 15 }} />
                                    <TextInput
                                        style={styles.TextInput}
                                        placeholder="Mobile Number"
                                        type='clear'
                                        placeholderTextColor="#737373"
                                        keyboardType="numeric"
                                        onChangeText={(mobilenumber) => this.setMobileNumber(mobilenumber)}
                                    />
                                    <Text>{this.state.mobilenumberError && this.state.mobilenumberError}</Text>
                                </View>
                                <TouchableOpacity style={styles.loginBtn} onPress={() => this.onPressSubmit()}>
                                    <Text style={styles.loginText} >Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: 80, justifyContent: 'center', flexDirection: 'row' }} >
                                <Text style={styles.innerText}> Already got an account? </Text>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('SignIn') }} >
                                    <Text style={styles.baseText}>SignIn</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
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
        flexDirection: 'row',
        backgroundColor: "#fff",
        borderRadius: 25,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        borderColor: '#fff',
        width: "80%",
        height: 55,
        marginBottom: 20,
        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 17,


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