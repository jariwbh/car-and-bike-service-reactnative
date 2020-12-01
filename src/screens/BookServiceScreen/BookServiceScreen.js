import React, { Component } from 'react';
import { ImageBackground, Dimensions, View, StyleSheet, FlatList, Text, TextInput, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import * as Animatable from 'react-native-animatable';

import Moment from 'moment';
// import DateTimePickerModal from "react-native-modal-datetime-picker";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Fontisto, MaterialIcons } from '@expo/vector-icons';

class BookServiceScreen extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isDatePickerVisible: [],
    //         setDatePickerVisibility: []
    //     }
    //     const [isDatePickerVisible, setDatePickerVisibility] = this.state(false);
    // }

    // static showDatePicker = () => {
    //     setDatePickerVisibility(true);
    // };

    // static hideDatePicker = () => {
    //     setDatePickerVisibility(false);
    // };

    // static handleConfirm = (date) => {
    //     console.warn("A date has been picked: ", date);
    //     hideDatePicker();
    // };




    render() {
        return (
            <ImageBackground source={require('../../../assets/images/background.png')} style={styles.backgroundImage} >
                <View style={styles.container}>
                    <Animatable.View
                        animation="fadeInUpBig"
                    >

                        <ScrollView>
                            <View style={styles.header}>
                                <Text style={styles.text_header}>Book Service</Text>
                            </View>
                            <Text style={{ marginLeft: 50, paddingBottom: 10 }}>Name</Text>
                            <View style={{ alignItems: 'center' }}>
                                <View style={styles.inputView}>
                                    <FontAwesome name="user" size={27} color="#737373" style={{ paddingLeft: 15 }} />
                                    <TextInput
                                        style={styles.TextInput}
                                        placeholder="Enter Full Name"
                                        type='clear'
                                        placeholderTextColor="#737373"
                                    // onChangeText={(email) => this.setEmail(email)}
                                    />
                                </View>
                            </View>
                            <Text style={{ marginLeft: 50, paddingBottom: 10 }}>Phone Number</Text>
                            <View style={{ alignItems: 'center' }}>
                                <View style={styles.inputView}>
                                    <FontAwesome name="phone" size={27} color="#737373" style={{ paddingLeft: 15 }} />
                                    <TextInput
                                        style={styles.TextInput}
                                        placeholder="Mobile Number"
                                        type='clear'
                                        placeholderTextColor="#737373"
                                        keyboardType="numeric"
                                    // onChangeText={(email) => this.setEmail(email)}
                                    />
                                </View>
                            </View>
                            <Text style={{ marginLeft: 50, paddingBottom: 10 }}>Service Date</Text>
                            <View style={{ alignItems: 'center' }}>
                                <View style={styles.inputView} >
                                    <Fontisto name="date" size={27} color="#737373" style={{ paddingLeft: 15 }} />
                                    <TextInput
                                        secureTextEntry
                                        style={styles.TextInput}
                                        placeholder="MM-DD-YY"
                                        type='clear'
                                        placeholderTextColor="#AAAAAA"
                                    // onPress={this.state(showDatePicker)}
                                    />
                                    {/* <DateTimePickerModal
                                        isVisible={isDatePickerVisible}
                                        mode="date"
                                        onConfirm={handleConfirm}
                                        onCancel={hideDatePicker}
                                    /> */}
                                </View>
                            </View>
                            <Text style={{ marginLeft: 50, paddingBottom: 10 }}>Service Time</Text>
                            <View style={{ alignItems: 'center' }}>
                                <View style={styles.inputView} >
                                    <MaterialIcons name="timer" size={27} color="#737373" style={{ paddingLeft: 15 }} />
                                    <TextInput
                                        secureTextEntry
                                        style={styles.TextInput}
                                        placeholder="HH-MM"
                                        type='clear'
                                        placeholderTextColor="#AAAAAA"
                                    />
                                </View>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity style={styles.bookserviceBtn} onPress={() => { this.props.navigation.navigate('MyService') }}>
                                    <Text style={styles.bookserviceText} >Book Service</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
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
    // inputView: {
    //     alignItems: "center",
    //     marginBottom: 20,
    //     width: "80%",
    //     flexDirection: 'row',
    //     backgroundColor: "#fff",
    //     borderColor: '#fff',
    //     height: 55,
    //     borderRadius: 25,
    //     shadowOpacity: 0.5,
    //     shadowRadius: 3,
    //     shadowOffset: {
    //         height: 0,
    //         width: 0,
    //     },
    //     elevation: 2,
    //     margin: 10
    // },
    // inputText: {
    //     paddingLeft: 3,
    //     color: "black",
    //     marginLeft: 15,
    // },
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
    // datePickerStyle: {
    //     width: 200,
    //     marginTop: 20,
    // },
});