import React, { Component, useState } from 'react';
import { ImageBackground, View, StyleSheet, ToastAndroid, Text, TextInput, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RegisterService } from '../../services/RegisterService/RegisterService';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import Loader from '../../components/Loader/Loader'

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
            loading: false,
        }
        this.setFullName = this.setFullName.bind(this);
        this.setUserName = this.setUserName.bind(this);
        this.setMobileNumber = this.setMobileNumber.bind(this);
        this.onPressSubmit = this.onPressSubmit.bind(this);
        this.secondTextInputRef = React.createRef();
        this.thirdTextInputRef = React.createRef();
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
            return this.setState({ usernameError: 'Email Id can not be empty' });
        }
        if (!re.test(email)) {

            return this.setState({ usernameError: 'Ooops! We need a valid email address' });
        }
        return this.setState({ username: email, usernameError: null })
    }

    setMobileNumber(mobilenumber) {
        const reg = /^[0]?[789]\d{9}$/;
        if (!mobilenumber || mobilenumber.length <= 0) {
            return this.setState({ mobilenumberError: 'Mobile Number cannot be empty' });
        }
        if (!reg.test(mobilenumber)) {
            return this.setState({ mobilenumberError: 'Ooops! We need a valid Mobile Number' });
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
            loading: false,
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

        this.setState({ loading: true })
        try {
            await RegisterService(body).then(response => {
                if (response.error) {
                    this.setState({ loading: false })
                    ToastAndroid.show("SignUp Failed!", ToastAndroid.LONG);
                    this.resetScreen()
                    return
                }
                if (response != null) {
                    ToastAndroid.show("SignUp Success!", ToastAndroid.LONG);
                    this.props.navigation.navigate('SignIn')
                    this.resetScreen()
                }
            })
        }
        catch (error) {
            this.setState({ loading: false })
            ToastAndroid.show("SignUp Failed!", ToastAndroid.LONG)
        }
    }

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
                        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'always'}>
                            <View style={{ alignItems: 'center' }}>
                                <View style={styles.inputView}>
                                    <FontAwesome name="user" size={27} color="#737373" style={{ paddingLeft: hp('3%') }} />
                                    <TextInput
                                        style={styles.TextInput}
                                        placeholder="Full Name"
                                        type='clear'
                                        placeholderTextColor="#737373"
                                        returnKeyType="next"
                                        blurOnSubmit={false}
                                        onSubmitEditing={() => { this.secondTextInputRef.current.focus() }}
                                        onChangeText={(fullname) => this.setFullName(fullname)}
                                    />
                                </View>
                                <Text style={{ marginTop: hp('-3%'), marginLeft: wp('-20%'), color: '#ff0000' }}>{this.state.fullnameError && this.state.fullnameError}</Text>
                                <View style={styles.inputView}>
                                    <MaterialCommunityIcons name="email" size={27} color="#737373" style={{ paddingLeft: hp('3%') }} />
                                    <TextInput
                                        style={styles.TextInput}
                                        placeholder="Email Id"
                                        type='clear'
                                        placeholderTextColor="#737373"
                                        autoCompleteType="email"
                                        textContentType="emailAddress"
                                        keyboardType="email-address"
                                        ref={this.secondTextInputRef}
                                        blurOnSubmit={false}
                                        onSubmitEditing={() => { this.thirdTextInputRef.current.focus() }}
                                        onChangeText={(username) => this.setUserName(username)}
                                    />
                                </View>
                                <Text style={{ marginTop: hp('-3%'), marginLeft: wp('-15%'), color: '#ff0000' }}>{this.state.usernameError && this.state.usernameError}</Text>
                                <View style={styles.inputView} >
                                    <FontAwesome name="phone" size={27} color="#737373" style={{ paddingLeft: hp('3%') }} />
                                    <TextInput
                                        style={styles.TextInput}
                                        placeholder="Mobile Number"
                                        type='clear'
                                        placeholderTextColor="#737373"
                                        keyboardType="number-pad"
                                        returnKeyType="done"
                                        ref={this.thirdTextInputRef}
                                        onSubmitEditing={() => this.onPressSubmit()}
                                        onChangeText={(mobilenumber) => this.setMobileNumber(mobilenumber)}
                                    />
                                </View>
                                <Text style={{ marginTop: hp('-3%'), marginLeft: wp('-15%'), color: '#ff0000' }}>{this.state.mobilenumberError && this.state.mobilenumberError}</Text>
                                <TouchableOpacity style={styles.loginBtn} onPress={() => this.onPressSubmit()}>
                                    {this.state.loading === true ? <Loader /> : <Text style={styles.loginText} >Sign Up</Text>}
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: hp('5%'), justifyContent: 'center', flexDirection: 'row' }} >
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
        justifyContent: 'center',
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
        // marginBottom: hp('2.5%'),
        alignItems: "center",
        margin: hp('3%'),
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
        marginLeft: wp('3%')
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
        resizeMode: 'cover',
        height: hp('100%'),
        width: wp('100%')
    }
});