import React, { Component } from 'react';
import {
    ImageBackground, TextInput, Image, View,
    StyleSheet, Text, TouchableOpacity, ToastAndroid, ScrollView
} from 'react-native'
import * as Animatable from 'react-native-animatable';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { LoginService } from '../../services/LoginService/LoginService';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import Loader from '../../components/Loader/Loader';
import AsyncStorage from '@react-native-community/async-storage';

class SignInScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            usererror: null,
            password: null,
            passworderror: null,
            loading: false,
        }
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.onPressSubmit = this.onPressSubmit.bind(this);
    }

    setEmail(email) {
        if (!email || email.length <= 0) {
            return this.setState({ usererror: 'User Name cannot be empty' });
        }
        return this.setState({ username: email, usererror: null })
    }

    setPassword(password) {
        if (!password || password.length <= 0) {
            return this.setState({ passworderror: 'Password cannot be empty' });
        }
        return this.setState({ password: password, passworderror: null })
    }

    resetScreen() {
        this.setState({
            username: null,
            usererror: null,
            password: null,
            passworderror: null,
            loading: false,
        })
    }

    authenticateUser = (user) => (
        AsyncStorage.setItem('@authuser', JSON.stringify(user))
    )

    onPressSubmit = async () => {
        const { username, password } = this.state;
        if (!username || !password) {
            this.setEmail(username)
            this.setPassword(password)
            return;
        }

        const body = {
            username: username,
            password: password
        }
        this.setState({ loading: true })
        try {
            await LoginService(body).then(response => {
                if (response.error) {
                    this.setState({ loading: false })
                    ToastAndroid.show("Username and Password Invalid!", ToastAndroid.LONG);
                    this.resetScreen()
                    return
                } else {
                    this.authenticateUser(response.user)
                    ToastAndroid.show("SignIn Success!", ToastAndroid.LONG);
                    this.props.navigation.navigate('Tabnavigation')
                    this.resetScreen()
                }
            })
        }
        catch (error) {
            console.log('error', error)
            this.setState({ loading: false })
            ToastAndroid.show("SignIn Failed!", ToastAndroid.LONG)
        }
    }

    render() {
        return (
            <ImageBackground source={require('../../../assets/images/background.png')} style={styles.backgroundImage}>
                <ScrollView>
                    <View style={styles.container}>
                        <Animatable.View
                            animation="fadeInUpBig"
                        >
                            <View style={styles.header}>
                                <Text style={styles.text_header}>Welcome Back!</Text>
                            </View>
                            <View style={styles.inputView}>
                                <FontAwesome5 name="user-alt" size={27} color="#737373" style={{ paddingLeft: hp('3%') }} />
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="User Name"
                                    defaultValue={this.state.username}
                                    type='clear'
                                    returnKeyType="next"
                                    placeholderTextColor="#737373"
                                    onChangeText={(email) => this.setEmail(email)}
                                />
                            </View>
                            <Text style={{ marginTop: hp('-3%'), marginLeft: wp('10%'), color: '#ff0000' }}>{this.state.usererror && this.state.usererror}</Text>
                            <View style={styles.inputView}>
                                <FontAwesome5 name="unlock-alt" size={27} color="#737373" style={{ paddingLeft: hp('3%') }} />
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="******"
                                    type='clear'
                                    defaultValue={this.state.password}
                                    placeholderTextColor="#737373"
                                    secureTextEntry={true}
                                    returnKeyType="done"
                                    onSubmitEditing={() => this.onPressSubmit()}
                                    onChangeText={(password) => this.setPassword(password)}
                                />
                            </View>
                            <Text style={{ marginTop: hp('-3%'), marginLeft: wp('10%'), color: '#ff0000' }}>{this.state.passworderror && this.state.passworderror}</Text>
                            <View>
                                <TouchableOpacity style={styles.loginBtn} onPress={() => this.onPressSubmit()} >
                                    {this.state.loading === true ? <Loader /> : <Text style={styles.loginText}>Login Now</Text>}
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: hp('5%'), justifyContent: 'center', flexDirection: 'row' }} >
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('SignUp') }} >
                                    <Text style={styles.baseText}>Signup</Text>
                                </TouchableOpacity>
                                <Text style={styles.innerText}> if you're New! or </Text>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('HelpCenter') }} >
                                    <Text style={styles.baseText}>Need Help</Text>
                                </TouchableOpacity>
                            </View>
                        </Animatable.View>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        justifyContent: 'flex-end',
        paddingBottom: hp('5%'),
        marginTop: hp('10%')
    },
    text_header: {
        color: '#000',
        fontSize: hp('4%'),
        textAlign: 'center',
    },
    inputView: {
        flexDirection: 'row',
        backgroundColor: "#fff",
        borderRadius: wp('8%'),
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        borderColor: '#fff',
        width: wp('80%'),
        height: hp('8%'),
        margin: hp('3%'),
        // marginBottom: hp('4%'),
        alignItems: "center",
    },
    TextInput: {
        fontSize: hp('2%'),
        flex: 1,
        padding: hp('2%'),
    },
    loginBtn: {
        width: wp('80%'),
        backgroundColor: "#FFBA00",
        borderRadius: wp('6%'),
        height: hp('7%'),
        alignItems: "center",
        justifyContent: "center",
        marginTop: hp('5%'),
        marginLeft: wp('7%')

    },
    loginText: {
        color: "white",
        fontWeight: 'bold',
        fontSize: hp('3%'),
    },
    baseText: {
        fontWeight: 'normal',
        color: '#183BAE',
        fontSize: hp('2%'),
    },
    innerText: {
        color: '#737373',
        fontSize: hp('2%'),
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
});