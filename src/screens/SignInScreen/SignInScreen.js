import React, { Component } from 'react';
import {
    ImageBackground, TextInput, Image, View,
    StyleSheet, Text, TouchableOpacity, ToastAndroid
} from 'react-native'
import * as Animatable from 'react-native-animatable';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { authenticateUser } from '../../Helpers/Auth';
import { LoginService } from '../../services/LoginService/LoginService';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

class SignInScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            usererror: null,
            password: null,
            passworderror: null,
        }
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.onPressSubmit = this.onPressSubmit.bind(this);
    }

    setEmail(email) {
        const re = /\S+@\S+\.\S+/;

        if (!email || email.length <= 0) {
            return this.setState({ usererror: 'Email cannot be empty' });
        }
        if (!re.test(email)) {

            return this.setState({ usererror: 'Ooops! We need a valid email address' });
        }
        console.log('email', email)
        return this.setState({ username: email, usererror: null })
    }

    setPassword(password) {
        if (!password || password.length <= 0) {
            return this.setState({ passworderror: 'Password cannot be empty' });
        }
        console.log('password', password)
        return this.setState({ password: password, passworderror: null })
    }

    resetScreen() {
        this.setState({
            username: null,
            usererror: null,
            password: null,
            passworderror: null,
        })
    }

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

        await LoginService(body).then(response => {
            if (response != null) {
                authenticateUser(body)
                ToastAndroid.show("SignIn Success!", ToastAndroid.SHORT);
                this.props.navigation.navigate('Tabnavigation')
                this.resetScreen()
            }
        })
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
                            <View style={styles.Image_view} >
                                <TouchableOpacity onPress={() => { alert('Facebook') }}>
                                    <Image source={require('../../../assets/icons/Facebook.png')} style={{ marginRight: hp('3%') }} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { alert('Google') }}>
                                    <Image source={require('../../../assets/icons/Google.png')} />
                                </TouchableOpacity>
                            </View>
                            <View >
                                <Text style={styles.text_Or}>Or</Text>
                            </View>

                            <View style={styles.inputView}>
                                <FontAwesome5 name="user-alt" size={27} color="#737373" style={{ paddingLeft: hp('3%') }} />
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="Email"
                                    placeholderTextColor="#003f5c"
                                    onChangeText={(email) => this.setEmail(email)}
                                />
                                <Text>{this.state.usererror && this.state.usererror}</Text>
                            </View>
                            <View style={styles.inputView}>
                                <FontAwesome5 name="unlock-alt" size={27} color="#737373" style={{ paddingLeft: hp('3%') }} />
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="******"
                                    placeholderTextColor="#003f5c"
                                    secureTextEntry={true}
                                    onChangeText={(password) => this.setPassword(password)}
                                />
                                <Text>{this.state.passworderror && this.state.passworderror}</Text>
                            </View>

                            <View>
                                <TouchableOpacity style={styles.loginBtn} onPress={() => this.onPressSubmit()} >
                                    <Text style={styles.loginText}>Login Now</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ marginTop: 80, justifyContent: 'center', flexDirection: 'row' }} >
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('SignUp') }} >
                                    <Text style={styles.baseText}>Signup</Text>
                                </TouchableOpacity>
                                <Text style={styles.innerText}> if you're New! or </Text>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('SignUp') }} >
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
    text_Or: {
        color: '#000',
        fontSize: hp('2.5%'),
        textAlign: 'center',
        marginBottom: hp('2%'),
    },
    text_header: {
        color: '#000',
        fontSize: hp('4%'),
        textAlign: 'center',
    },
    Image_view: {
        marginBottom: hp('3%'),
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
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
        marginBottom: hp('2.5%'),
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

    },
    loginText: {
        color: "white",
        fontWeight: 'bold',
        fontSize: hp('3%'),
    },
    baseText: {
        fontWeight: 'normal',
        color: '#183BAE',
        fontSize: hp('1.5%'),
    },
    innerText: {
        color: '#737373',
        fontSize: hp('1.5%'),
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    }
});