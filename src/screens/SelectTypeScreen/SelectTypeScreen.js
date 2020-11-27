import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { ImageBackground, Dimensions, Platform, Image, View, StyleSheet, FlatList, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';



class SelectTypeScreen extends Component {
    render() {
        return (

            <ImageBackground source={require('../../../assets/images/background.png')} style={styles.backgroundImage} >
                <SafeAreaView style={styles.container}>
                    <KeyboardAvoidingView behavior='position' style={styles.container}>
                        <View style={styles.container}>
                            <ScrollView >
                                <View style={styles.header}>
                                    <Text style={styles.text_header}>Select Service Type</Text>
                                    <Text style={styles.text_header2}> Lorem Ipsum is simply dummy text </Text>
                                </View>

                                <View style={styles.Image_view}>
                                    <View style={{ flexDirection: 'column' }}>
                                        <View style={styles.carBtn}>
                                            <Text style={styles.carbtnText}>Car Service</Text>
                                        </View>
                                        <View style={{ alignItems: "center", marginTop: 20 }}>
                                            <Image source={require('../../../assets/icons/CarService.png')} style={{ height: 180, width: 180 }} />
                                            <Image source={require('../../../assets/icons/keyholeblue.png')} style={{ marginTop: 10, height: 30, width: 30 }} />
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: 'column' }}>
                                        <View style={styles.carBtn}>
                                            <Text style={styles.bikebtnText}>Bike Service</Text>
                                        </View>
                                        <View style={{ alignItems: "center", marginTop: 20 }}>
                                            <Image source={require('../../../assets/icons/BikeService.png')} style={{ height: 180, width: 180 }} />
                                            <Image source={require('../../../assets/icons/keyholewhite.png')} style={{ marginTop: 10, height: 30, width: 30 }} />
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.address_view}>
                                    <Image source={require('../../../assets/logo.png')} style={{ height: 100, width: 100, marginLeft: 20, marginTop: 10, marginRight: 30 }} />
                                    <View style={{ justifyContent: 'center', alignItems: "center" }}>
                                        <Text style={{ fontSize: 25, marginBottom: 10 }}>Krtya Infotech</Text>
                                        <Text>Address : </Text>
                                        <Text>A1-02/02 Habitat,</Text>
                                        <Text>surat-395002</Text>
                                        <Text>Gujarat,India</Text>
                                        {/* <Text>Conatct Number : +91 8574968574</Text> */}
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.loginBtn} onPress={() => { this.props.navigation.navigate('SelectService') }}>
                                    <Text style={styles.loginText} >Next Step</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                    </KeyboardAvoidingView>
                </SafeAreaView>
            </ImageBackground>

        );
    }
};

export default SelectTypeScreen;
//const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        // marginTop: 80,
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    header: {
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 30,
        marginTop: 50
    },
    text_header: {
        color: '#000',
        fontSize: 25,
        textAlign: 'center',
        //fontFamily: 'monospace'
    },
    text_header2: {
        margin: 10,
        color: '#000',
        fontSize: 15,
        textAlign: 'center',
        //fontFamily: 'monospace'
    },
    Image_view: {
        flexDirection: 'row',
        justifyContent: "center",
    },
    carBtn: {
        width: "80%",
        backgroundColor: "#fff",
        borderRadius: 25,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 15,
        position: 'absolute'
    },
    carbtnText: {
        color: "#183BAE",
        //fontFamily: 'monospace',
        fontWeight: 'bold',
    },
    bikebtnText: {
        color: "#AAAAAA",
        //fontFamily: 'monospace',
        fontWeight: 'bold',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    address_view: {
        // flex: 1,
        marginTop: 70,
        width: "90%",
        backgroundColor: "#ffF",
        borderRadius: 25,
        height: 160,
        marginLeft: 17,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        flexDirection: 'row'
    },
    loginBtn: {
        width: "90%",
        backgroundColor: "#FFBA00",
        borderRadius: 25,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        marginLeft: 20,
    },
    loginText: {
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: 'bold',
        fontSize: 20
    },
});