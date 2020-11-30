
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    TextInput
} from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';


class UpdateProfileScreen extends Component {

    render() {
        return (
            <ImageBackground source={require('../../../assets/images/background.png')} style={styles.backgroundImage} >
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.text_header}>Update Profile</Text>
                    </View>
                    {/* <View style={styles.header}></View> */}
                    <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
                    <View style={styles.body}>
                        <View style={styles.bodyContent}>
                            <Text style={styles.name}>John Doe</Text>

                        </View>
                        <View style={{
                            flex: 1, flexDirection: 'column', alignItems: 'center', padding: 30,
                        }}>
                            <View style={styles.inputView}>
                                <FontAwesome name="user" size={27} color="#737373" style={{ padding: 7, paddingLeft: 20 }} />
                                {/* <Image source={require('../../../assets/icons/user.png')} style={styles.UserName_Image} /> */}
                                <TextInput
                                    label="Name"
                                    style={styles.inputText}
                                    placeholder="UserName"
                                    type='clear'
                                    placeholderTextColor="#737373"
                                    returnKeyType="next"

                                //onChangeText={this.setState({ name: name.value })}
                                />
                            </View>
                            <View style={styles.inputView}>
                                <MaterialCommunityIcons name="email" size={27} color="#737373" style={{ padding: 7, paddingLeft: 20 }} />
                                {/* <Image source={require('../../../assets/icons/user.png')} style={styles.UserName_Image} /> */}
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Email Id"
                                    type='clear'
                                    placeholderTextColor="#737373"

                                    //onChangeText={this.setState({ email: name.value })}
                                    autoCapitalize="none"
                                    autoCompleteType="email"
                                    textContentType="emailAddress"
                                    keyboardType="email-address"
                                />
                            </View>
                            <View style={styles.inputView} >
                                <FontAwesome name="phone" size={27} color="#737373" style={{ padding: 7, paddingLeft: 20 }} />
                                {/* <Image source={require('../../../assets/icons/login.png')} style={styles.Passowrd_Image} /> */}
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Mobile Number"
                                    type='clear'
                                    placeholderTextColor="#737373"

                                    //onChangeText={this.setState({ mobilenumber: name.value })}
                                    keyboardType="numeric"
                                />
                            </View>
                            <TouchableOpacity style={styles.loginBtn} onPress={() => this.props.navigation.navigate('MyProfile')}>
                                <Text style={styles.loginText} >Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {/* </View> */}
            </ImageBackground>
        );
    }
}

export default UpdateProfileScreen;

const styles = StyleSheet.create({
    // container: {
    //     // flex: 1,
    //     justifyContent: 'center'
    // },
    header: {
        justifyContent: 'flex-start',
        // backgroundColor: "#00BFFF",
        height: 200,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    text_header: {
        color: '#000',
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'monospace'
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',

    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,

    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    // updateContent: {
    //     flex: 1,
    //     alignItems: 'center',
    //     padding: 30,

    // },
    buttonContainer: {

        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        // justifyContent: 'space-around',
        // alignItems: 'stretch',
        marginBottom: 20,
        width: "80%",
        borderRadius: 30,
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
        // flexDirection: 'row',
        padding: 8,
        // justifyContent: 'space-between',
        fontSize: 20
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
});