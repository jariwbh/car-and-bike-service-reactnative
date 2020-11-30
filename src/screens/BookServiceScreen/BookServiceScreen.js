import React, { Component } from 'react';
import { ImageBackground, Dimensions, Platform, Image, View, StyleSheet, FlatList, Text, TextInput, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { AntDesign, } from '@expo/vector-icons';

class BookServiceScreen extends Component {

    render() {
        return (
            <ImageBackground source={require('../../../assets/images/background.png')} style={styles.backgroundImage} >
                <View style={styles.container}>
                    <TouchableOpacity style={styles.categoryIcon} onPress={() => { this.props.navigation.goBack() }}>
                        <AntDesign name="arrowleft" size={20} color="black" />
                    </TouchableOpacity>
                    <Animatable.View
                        animation="fadeInUpBig"
                    >





                        <View style={styles.header}>
                            <Text style={styles.text_header}>Book Service</Text>
                        </View>
                        <Text style={{ marginLeft: 50 }}>Name</Text>
                        <View style={{ alignItems: 'center' }}>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Enter Full Name"
                                    type='clear'
                                    placeholderTextColor="#AAAAAA"

                                />
                                {/* <Image source={require('../../../assets/icons/user.png')} style={styles.UserName_Image} /> */}
                            </View>
                        </View>
                        <Text style={{ marginLeft: 50 }}>Phone Number</Text>
                        <View style={{ alignItems: 'center' }}>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="Enter phone no"
                                    type='clear'
                                    placeholderTextColor="#AAAAAA"
                                />
                                {/* <Image source={require('../../../assets/icons/user.png')} style={styles.UserName_Image} /> */}
                            </View>
                        </View>
                        <Text style={{ marginLeft: 50 }}>Service Date</Text>
                        <View style={{ alignItems: 'center' }}>
                            <View style={styles.inputView} >
                                <TextInput
                                    secureTextEntry
                                    style={styles.inputText}
                                    placeholder="MM-DD-YY"
                                    type='clear'
                                    placeholderTextColor="#AAAAAA"
                                />
                                {/* <Image source={require('../../../assets/icons/login.png')} style={styles.Passowrd_Image} /> */}
                            </View>
                        </View>
                        <Text style={{ marginLeft: 50 }}>Service Time</Text>
                        <View style={{ alignItems: 'center' }}>
                            <View style={styles.inputView} >
                                <TextInput
                                    secureTextEntry
                                    style={styles.inputText}
                                    placeholder="HH-MM"
                                    type='clear'
                                    placeholderTextColor="#AAAAAA"
                                />
                                {/* <Image source={require('../../../assets/icons/login.png')} style={styles.Passowrd_Image} /> */}
                            </View>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity style={styles.bookserviceBtn} onPress={() => { this.props.navigation.navigate('MyService') }}>
                                <Text style={styles.bookserviceText} >Book Service</Text>
                            </TouchableOpacity>
                        </View>
                    </Animatable.View>
                </View>
            </ImageBackground>
        );
    }
};

export default BookServiceScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    header: {
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 30,
        //marginTop: 150
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
    bookserviceBtn: {
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
    bookserviceText: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 20
    },

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: 55,
        height: 55,
        backgroundColor: '#fff',
        borderRadius: 50,
        position: 'relative',
        paddingHorizontal: 20,
        // paddingBottom: 50,
        // marginTop: 50,
        marginLeft: 20,



    },
});