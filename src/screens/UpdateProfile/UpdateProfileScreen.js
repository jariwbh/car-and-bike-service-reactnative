import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    ToastAndroid,
    ScrollView
} from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { UserService } from '../../services/UserService/UserService';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

class UpdateProfileScreen extends Component {
    constructor(props) {
        super(props)
        this.companyData = this.props.route.params.companyData;
        this.state = {
            fullname: this.companyData.property.fullname,
            fullnameError: null,
            username: this.companyData.property.email,
            usernameError: null,
            mobilenumber: this.companyData.property.mobile_number,
            mobilenumberError: null,
            userProfile: this.companyData.branchid.branchlogo
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

        // await UserService(body).then(response => {
        //     if (response != null) {
        ToastAndroid.show("Your Profile Update!", ToastAndroid.SHORT);
        this.props.navigation.navigate('MyProfile')
        //     }
        // })
    }

    render() {
        const { fullname, username, mobilenumber, userProfile } = this.state;
        return (
            <ImageBackground source={require('../../../assets/images/background.png')} style={styles.backgroundImage} >
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Text style={styles.text_header}>Update Profile</Text>
                        </View>
                        <Image style={styles.avatar} source={{ uri: (userProfile ? userProfile : 'https://bootdey.com/img/Content/avatar/avatar6.png') }} />
                        <View style={styles.body}>
                            <View style={styles.bodyContent}>
                                <Text style={styles.name}>{fullname && fullname}</Text>
                            </View>
                            <View
                                style={{
                                    flex: 1, flexDirection: 'column', alignItems: 'center'
                                }} >
                                <View style={styles.inputView}>
                                    <FontAwesome name="user" size={27} color="#737373" style={{ paddingLeft: hp('2%') }} />
                                    <TextInput
                                        label="Name"
                                        value={fullname}
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
                                    <MaterialCommunityIcons name="email" size={27} color="#737373" style={{ paddingLeft: hp('2%') }} />
                                    <TextInput
                                        value={username}
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
                                    <FontAwesome name="phone" size={27} color="#737373" style={{ paddingLeft: hp('2%') }} />
                                    <TextInput
                                        value={mobilenumber}
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
                                    <Text style={styles.loginText} >Update Profile</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

export default UpdateProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        // justifyContent: 'flex-start',
        // // backgroundColor: "#00BFFF",
        // height: 100,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    text_header: {
        marginTop: wp('9%'),
        color: '#000',
        fontSize: hp('4%'),
        textAlign: 'center',
        fontFamily: 'monospace'
    },
    avatar: {
        width: hp('20%'),
        height: hp('20%'),
        borderRadius: wp('20%'),
        alignSelf: 'center',
        marginTop: wp('10%')
    },
    body: {
        marginTop: hp('3%'),
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: hp('7%')
    },
    name: {
        fontSize: hp('4%'),
        color: "#737373",
        fontWeight: 'bold',
    },
    inputView: {
        flexDirection: 'row',
        backgroundColor: "#fff",
        borderRadius: wp('6%'),
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
    update_Btn: {
        width: wp('80%'),
        backgroundColor: "#FFBA00",
        borderRadius: wp('6%'),
        height: hp('7%'),
        alignItems: "center",
        justifyContent: "center",
        marginTop: hp('5%'),
    },
    update_text: {
        color: "white",
        fontWeight: 'bold',
        fontSize: hp('3%'),
    },
});