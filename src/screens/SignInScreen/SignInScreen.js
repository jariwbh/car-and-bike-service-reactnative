import React, { Component } from 'react';
import { ImageBackground, Dimensions, Platform, Image, View, StyleSheet, FlatList, Text, TextInput, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { LoginService } from '../../services/LoginService/LoginService';

class SignInScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        }
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.onPressSubmit = this.onPressSubmit.bind(this);
    }

    setEmail(value) {
        this.setState({ username: value })
        console.log('value', value)
    }
    setPassword(value) {
        this.setState({ password: value })
        console.log('value', value)
    }

    onPressSubmit = () => {
        //if (this.state.username != null || this.state.password != null) {
        // const body = {
        //     username: this.state.username,
        //     password: this.state.password
        // }
        // const response = {}
        // LoginService(body).then(response =>
        //     this.setState({ response: response })
        // )
        // console.log(response)
        // console.log('Login')
        this.props.navigation.navigate('Tabnavigation')
        //}
        //console.log('not Done')
        //return;
    }

    render() {

        return (
            <ImageBackground source={require('../../../assets/images/background.png')} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <Animatable.View
                        animation="fadeInUpBig"
                    >
                        <ScrollView>
                            <View style={styles.header}>
                                <Text style={styles.text_header}>Welcome Back!</Text>
                            </View>
                            <View style={styles.Image_view} >
                                <TouchableOpacity onPress={() => { alert('Facebook') }}>
                                    <Image source={require('../../../assets/icons/Facebook.png')} style={{ marginRight: 20 }} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { alert('Google') }}>
                                    <Image source={require('../../../assets/icons/Google.png')} />
                                </TouchableOpacity>
                            </View>
                            <View >
                                <Text style={styles.text_Or}>Or</Text>
                            </View>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Email Id"
                                    type='clear'
                                    placeholderTextColor="#737373"
                                    onChangeText={(text) => this.setEmail(text)}
                                />
                                <Image source={require('../../../assets/icons/user.png')} style={styles.UserName_Image} />
                            </View>
                            <View style={styles.inputView} >
                                <TextInput
                                    secureTextEntry
                                    style={styles.inputText}
                                    placeholder="Password"
                                    placeholderTextColor="#737373"
                                    onChangeText={(text) => this.setPassword(text)}
                                />
                                <Image source={require('../../../assets/icons/login.png')} style={styles.Passowrd_Image} />
                            </View>
                            <TouchableOpacity style={styles.loginBtn} onPress={() => this.onPressSubmit()}>
                                <Text style={styles.loginText} >Login Now</Text>
                            </TouchableOpacity>

                            <View style={{ marginTop: 80, justifyContent: 'center', flexDirection: 'row' }} >
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('SignUp') }} >
                                    <Text style={styles.baseText}>Signup</Text>
                                </TouchableOpacity>
                                <Text style={styles.innerText}> if you're New! or </Text>
                                <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }} >
                                    <Text style={styles.baseText}>Need Help</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </Animatable.View>
                </View>
            </ImageBackground>
        );
    }
}

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        alignItems: 'center',
    },
    header: {
        //flex: 1,
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
        marginTop: 8,
        marginLeft: '48%'
    },
    Passowrd_Image: {
        width: 25,
        height: 25,
        marginTop: 10,
        marginLeft: '66%'
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
        marginBottom: 20,
        width: "95%",
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
    Image_view: {
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
    },
    inputText: {
        height: 50,
        paddingLeft: 3,
        color: "black",
        marginLeft: 15,
    },
    loginBtn: {
        width: "95%",
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