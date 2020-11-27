import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'
import SliderScreen from '../../components/Slider/SliderScreen'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export class SelectServiceScreen extends Component {
    render() {
        return (
            <ImageBackground source={require('../../../assets/images/background.png')} style={styles.backgroundImage} >
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.text_header}> near
                        <Text style={styles.text_hedinner}>servic</Text>
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.text_hedding}>Select Your Servic to Continue</Text>
                    </View>
                    <View>
                        <SliderScreen />
                    </View>
                    <View style={styles.inputUpperview}>
                        <View style={styles.inputView}>
                            <View style={styles.categoryIcon}>
                                <MaterialIcons name="room-service" size={30} color='#ff0080' />

                            </View>
                            <View style={styles.inputText}>
                                <Text >Genrel</Text>
                                <Text>Service</Text>
                            </View>
                        </View>
                        <View style={styles.inputView}>
                            <View style={styles.categoryIcon}>
                                <MaterialIcons name="room-service" size={30} color='#ff0080' />

                            </View>
                            <View style={styles.inputText}>
                                <Text >Full body</Text>
                                <Text>painting</Text>
                            </View>

                        </View>

                    </View>

                </View>

            </ImageBackground>
        )
    }
}

export default SelectServiceScreen


const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: 'center'
    // },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    header: {
        padding: 50
    },
    text_header: {
        color: '#e6b800',
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'monospace'
    },
    text_hedinner: {
        color: '#0066ff',
    },
    text_hedding: {
        color: '#000',
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'monospace',
        paddingBottom: 40
    },
    inputUpperview: {
        flexDirection: 'row',
        paddingTop: 20,
        justifyContent: 'center'
    },
    inputView: {
        marginBottom: 20,
        width: "40%",
        flexDirection: 'row',
        borderRadius: 25,
        margin: 10,
        alignItems: "center",
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
        paddingLeft: 25,
        color: "black",
        fontSize: 27,
        flexDirection: 'column',
        fontWeight: 'bold',

    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 55,
        height: 55,
        backgroundColor: '#ff99cc' /* '#FF6347' */,
        borderRadius: 50,
    },
})