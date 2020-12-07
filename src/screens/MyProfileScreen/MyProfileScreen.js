import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image,
    TouchableOpacity, ImageBackground,
    ToastAndroid, ActivityIndicator, Alert
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { removeUser } from '../../Helpers/Auth';
import { UserService } from '../../services/UserService/UserService';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import AsyncStorage from '@react-native-community/async-storage';


export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyData: null,
            companyName: null,
            companyProfile: '',
        }
    }

    componentDidMount() {
        UserService().then(data => {
            this.setState({ companyData: data, companyName: data.property.fullname, companyProfile: data.branchid.branchlogo })
        })
    }

    onPressUpdateProfile() {
        const { companyData } = this.state;
        if (companyData != null) {
            this.props.navigation.navigate('UpdateProfile', { companyData })
        }
    }

    removeUser() {
        AsyncStorage.removeItem("auth_key")
    }

    onPressLogout() {
        Alert.alert(
            "Confirmation required",
            "Do you really want to logout?",
            [
                {
                    text: "Cancel",
                    onPress: () => { ToastAndroid.show("Log Out cancle!", ToastAndroid.SHORT) },
                    style: "cancel"
                },
                {
                    text: "Yes", onPress: () => {
                        ToastAndroid.show("Log Out Success!", ToastAndroid.SHORT),
                            removeUser()
                        this.props.navigation.replace('Auth')
                    }
                }
            ],
            { cancelable: false }
        );
    }

    render() {
        const { companyData, companyName, companyProfile } = this.state;
        return (
            <ImageBackground source={require('../../../assets/images/background.png')} style={styles.backgroundImage} >
                <View style={styles.container}>
                    <View style={styles.header}></View>
                    {companyData === null ?
                        <ActivityIndicator size="large" color="#AAAAAA" style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }} />
                        : <>
                            <Image style={styles.avatar} source={{ uri: (companyProfile ? companyProfile : 'https://bootdey.com/img/Content/avatar/avatar6.png') }} />
                            <View style={styles.body}>
                                <View style={styles.bodyContent}>
                                    <Text style={styles.name}>{companyName && companyName}</Text>
                                </View>
                                <View style={{
                                    flex: 1, flexDirection: 'column', alignItems: 'center'
                                }}>
                                    <TouchableOpacity style={styles.buttonContainer} onPress={() => this.onPressUpdateProfile()}>
                                        <Entypo name="edit" size={27} color="#737373" style={{ padding: hp('1.5%'), paddingLeft: hp('1%'), }} />
                                        <Text style={styles.textContainer}> Update Profile</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.buttonContainer} onPress={() => this.onPressLogout()}>
                                        <Entypo name="log-out" size={27} color="#737373" style={{ padding: hp('1.5%'), paddingLeft: hp('1%') }} />
                                        <Text style={styles.textContainer}> Log out</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </>
                    }
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    avatar: {
        width: hp('20%'),
        height: hp('20%'),
        borderRadius: wp('20%'),
        alignSelf: 'center',
        marginTop: wp('20%')
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
    buttonContainer: {

        marginTop: hp('2%'),
        height: hp('9%'),
        flexDirection: 'row',
        marginBottom: hp('2%'),
        width: wp("80%"),
        alignItems: 'center',
        borderRadius: wp('8%'),
        backgroundColor: "#FFF",
        borderColor: '#fff',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
    },
    textContainer: {
        padding: hp('1%'),
        fontSize: hp('3%'),
        color: '#737373'
    },
});