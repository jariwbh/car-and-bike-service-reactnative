import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image, KeyboardAvoidingView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';



export class SelectCompanyNameScreen extends Component {
    render() {
        return (

            <ImageBackground source={require('../../../assets/images/background.png')} style={styles.backgroundImage} >

                <View>

                    <Image source={require('../../../assets/images/Image16.png')} style={{ width: "100%" }} />
                </View>
                {/* <View style={{ alignItems: "center" }}> */}
                <View style={styles.inputView}>
                    <View style={styles.inputineerView}>
                        <View >
                            <Text style={styles.inputineertext}>Brandon Dan CK </Text>
                            <Text style={styles.inputtext}>Mechanic / Service </Text>
                        </View>
                        <View >
                            <Image source={require('../../../assets/images/img1.png')} style={{ borderRadius: 20, height: 50, width: 50, marginLeft: 30, }} />
                        </View>
                    </View>
                    <View >
                        <View style={styles.inputservice}>
                            <Text style={styles.inputservicetext}>Service Includes</Text>

                            <Text style={styles.inputinnerservice}>
                                <AntDesign name="check" size={20} color="#3357BC" /> Engine oil</Text>
                            <Text style={styles.inputinnerservice}>
                                <AntDesign name="check" size={20} color="#3357BC" /> Readiator coolant</Text>
                            <Text style={styles.inputinnerservice}>
                                <AntDesign name="check" size={20} color="#3357BC" /> Windscreens & mirrors - for cracks</Text>
                            <Text style={styles.inputinnerservice}>
                                <AntDesign name="check" size={20} color="#3357BC" /> Power steering fluid</Text>
                            <Text style={styles.inputinnerservice}>
                                <AntDesign name="check" size={20} color="#3357BC" /> Windscreens washer fluid</Text>
                            <Text style={styles.inputinnerservice}>
                                <AntDesign name="check" size={20} color="#3357BC" /> Clutch fluid (manual cars)</Text>
                            <Text style={styles.inputinnerservice} >
                                <AntDesign name="check" size={20} color="#3357BC" /> Gearbox oil</Text>
                            <Text style={styles.inputinnerservice} >
                                <AntDesign name="check" size={20} color="#3357BC" /></Text>

                        </View>
                        <View>
                            <Text style={styles.textview}>View All</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.book} onPress={() => { this.props.navigation.navigate('BookService') }}>

                                <Text style={styles.textbook} >Book Service</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
                {/* </View> */}


            </ImageBackground>

        )
    }
}

export default SelectCompanyNameScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    inputView: {
        marginTop: 235,
        position: 'absolute',
        width: "80%",
        borderRadius: 25,
        alignContent: 'center',
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 45,
        backgroundColor: "#fff",
        borderColor: '#fff',
        height: 600,
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
    inputineerView: {
        aspectRatio: 3,
        margin: 20,
        width: "70%",
        flexDirection: 'row',
        borderRadius: 25,
        marginLeft: 50,
        alignItems: "center",
        position: 'relative',
        backgroundColor: "#fff",
        borderColor: '#fff',
        borderRadius: 25,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,

    },
    inputineertext: {
        paddingLeft: 20,
        color: "black",
        fontSize: 17,
        fontWeight: 'bold',
    },
    inputtext: {
        paddingLeft: 20,
        color: "black",
        fontSize: 13,

    },
    inputservice: {
        paddingLeft: 0,
    },
    inputinnerservice: {
        paddingBottom: 15,
        fontWeight: 'bold',
        fontSize: 15,
        paddingLeft: 25,
    },
    inputservicetext: {
        paddingBottom: 10,
        paddingLeft: 20,
        fontWeight: 'bold',
        fontSize: 25,

    },
    textview: {
        paddingLeft: 40,
        fontWeight: 'bold',
        fontSize: 20
    },
    book: {
        aspectRatio: 6,
        backgroundColor: '#FFBA00',
        borderRadius: 25,
        width: "80%",
        marginLeft: 35,
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 10,
        margin: 10
    },
    textbook: {
        fontWeight: 'bold',
        fontSize: 20,
        color: "#fff",

    }
})