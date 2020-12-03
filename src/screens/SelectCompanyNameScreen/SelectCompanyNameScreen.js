import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, ImageBackground, Image, KeyboardAvoidingView } from 'react-native'
import { AntDesign, } from '@expo/vector-icons';
import HTML from 'react-native-render-html';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

export class SelectCompanyNameScreen extends Component {
    constructor(props) {
        super(props);
        console.log('this.props.route.params.item', this.props.route.params.item)
        this.serviceDetails = this.props.route.params.item
    }

    render() {
        return (
            <ImageBackground source={require('../../../assets/images/background.png')} style={styles.backgroundImage} >
                <ScrollView>
                    <View style={styles.container}>
                        <View>
                            <Image source={require('../../../assets/images/Image16.png')} style={{ width: wp("100%"), resizeMode: 'cover' }} />
                        </View>

                        <TouchableOpacity style={styles.categoryIcon} onPress={() => { this.props.navigation.goBack() }}>
                            <AntDesign name="arrowleft" size={20} color="black" />
                        </TouchableOpacity>

                        <View style={styles.inputView}>
                            <View style={styles.inputineerView}>
                                <View >
                                    <Text style={{ fontSize: hp('2%'), fontWeight: 'bold', color: '#FFBA00', }}> Service Name </Text>
                                    <Text style={{ fontSize: hp('3%'), fontWeight: 'bold', }}> {this.serviceDetails.property.title}</Text>
                                    <Text style={{ fontSize: hp('2%'), fontWeight: 'bold', }}>  Expected Price - $ {this.serviceDetails.charges}</Text>
                                </View>
                            </View>
                            <View >
                                <View style={styles.inputservice}>
                                    <Text style={styles.inputservicetext}>Service Includes</Text>
                                    <Text style={styles.inputinnerservice}>
                                        <HTML html={this.serviceDetails.property.description} />
                                    </Text>
                                </View>
                                <View>
                                    <TouchableOpacity style={styles.book} onPress={() => { this.props.navigation.navigate('BookService') }}>
                                        <Text style={styles.textbook} >Book Service</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }
}

export default SelectCompanyNameScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    inputView: {
        flex: 1,
        width: wp("80%"),
        height: hp("85%"),
        borderRadius: wp('6%'),
        marginTop: wp('-15%'),
        marginLeft: wp('10%'),
        alignContent: 'center',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderColor: '#fff',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
    },
    inputineerView: {
        aspectRatio: 2,
        margin: wp('2%'),
        width: wp("60%"),
        flexDirection: 'row',
        borderRadius: wp('6%'),
        alignItems: "center",
        backgroundColor: "#fff",
        borderColor: '#fff',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    inputinnerservice: {
        paddingBottom: hp('2%'),
        fontWeight: 'bold',
        fontSize: hp('2%'),
        paddingLeft: wp('2%'),
    },
    inputservicetext: {
        paddingBottom: hp('2%'),
        paddingLeft: wp('2%'),
        fontWeight: 'bold',
        fontSize: hp('4%'),
    },
    book: {
        aspectRatio: 6,
        backgroundColor: '#FFBA00',
        borderRadius: wp('6%'),
        width: wp("7%"),
        height: hp("5%"),
        marginLeft: hp('4%'),
        alignItems: "center",
        justifyContent: 'center',
        marginTop: hp('2%'),
    },
    textbook: {
        fontWeight: 'bold',
        fontSize: 20,
        color: "#fff",
    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: wp("7%"),
        height: wp("7%"),
        borderRadius: hp('6%'),
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: wp('8%'),
        marginLeft: wp('5%'),
    },
})