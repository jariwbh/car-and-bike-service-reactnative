import React, { Component } from 'react'
import { Text, View, ScrollView, ImageBackground, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'


export class MyService extends Component {
    render() {
        return (
            <ImageBackground source={require('../../../assets/images/background.png')} style={styles.backgroundImage} >
                <ScrollView>
                    <View style={styles.header}>
                        <Text style={styles.headertext}>My Service</Text>
                    </View>
                    <View>
                        <View style={styles.onservice}>
                            <Text style={styles.onservicetext}> Ongoing Service </Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                            <View style={styles.servicename}>
                                <View style={{ flexDirection: 'column' }}>

                                    <Text style={styles.servicetext}>Service Provider Name</Text>
                                    <Text style={styles.bookingtext}> Booking ID - AT345FGT</Text>
                                    <Text style={styles.genreltext}>General Service</Text>
                                    <Text>Vehicle Number - XX XX YYYY</Text>
                                </View>

                                <View style={{ flexDirection: 'column', marginLeft: wp('2%') }}>
                                    <Text style={{ padding: hp('1%') }}>Oct 29, 2020</Text>
                                    <MaterialCommunityIcons name="file-pdf" size={20} color="#3357BC" style={{ padding: hp('2%') }} />
                                    <Text style={{ color: '#FF0045', padding: hp('1%') }}>Pending</Text>
                                </View>

                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={styles.lastservice}>
                            <Text style={styles.lastservicetext}> Last Service </Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <View style={styles.servicename}>
                                <View style={{ flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                                    <Text style={styles.servicetext}>Service Provider Name</Text>
                                    <Text style={styles.bookingtext}> Booking ID - AT345FGT</Text>
                                    <Text style={styles.genreltext}>Full Body Panting</Text>
                                    <Text>Vehicle Number - XX XX YYYY</Text>
                                </View>
                                <View style={{ flexDirection: 'column', marginLeft: wp('2%') }}>
                                    <Text style={{ padding: hp('1%') }}>Oct 29, 2020</Text>
                                    <MaterialCommunityIcons name="file-pdf" size={20} color="#3357BC" style={{ padding: hp('2%') }} />
                                    <Text style={{ color: '#0022FF', padding: hp('1%') }}>Paid</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ alignItems: "center", justifyContent: 'space-between', flex: 1 }}>
                            <View style={styles.servicename}>
                                <View style={{ flexDirection: 'column', marginLeft: wp('2%') }}>
                                    <Text style={styles.servicetext}>Service Provider Name</Text>
                                    <Text style={styles.bookingtext}> Booking ID - AT345FGT</Text>
                                    <Text style={styles.genreltext}>Water Wash</Text>
                                    <Text>Vehicle Number - XX XX YYYY</Text>
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ padding: hp('1%') }}>Oct 29, 2020</Text>
                                    <MaterialCommunityIcons name="file-pdf" size={20} color="#3357BC" style={{ padding: hp('2%') }} />
                                    <Text style={{ color: '#0022FF', padding: hp('1%') }}>Paid</Text>
                                </View>
                            </View>
                            <View style={{ alignItems: "center", justifyContent: 'space-between', flex: 1 }}>
                                <View style={styles.servicename}>
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={styles.servicetext}>Service Provider Name</Text>
                                        <Text style={styles.bookingtext}> Booking ID - AT345FGT</Text>
                                        <Text style={styles.genreltext}>Complete Car Spa</Text>
                                        <Text>Vehicle Number - XX XX YYYY</Text>
                                    </View>
                                    <View style={{ flexDirection: 'column', marginLeft: wp('2%') }}>
                                        <Text style={{ padding: hp('1%') }}>Oct 29, 2020</Text>
                                        <MaterialCommunityIcons name="file-pdf" size={20} color="#3357BC" style={{ padding: hp('2%') }} />
                                        <Text style={{ color: '#0022FF', padding: hp('1%') }}>Paid</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }
}

export default MyService


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    header: {
        alignItems: "center",
        marginTop: hp('3.5%'),
    },
    headertext: {
        fontSize: hp('3%'),
    },
    onservice: {
        paddingHorizontal: hp('2%'),
        paddingBottom: hp('2%'),
        marginTop: hp('3%'),
    },
    onservicetext: {
        fontSize: hp('2.5%'),
    },
    servicename: {
        aspectRatio: 2.5,
        paddingHorizontal: hp('2%'),
        width: wp("90%"),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: hp('2.5%'),
        borderRadius: wp('6%'),
        alignItems: "center",
        position: 'relative',
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
    servicetext: {
        fontSize: hp('2.5%'),

    },
    bookingtext: {
        color: "#999999",
        paddingTop: hp('1%'),
    },
    genreltext: {
        paddingTop: hp('1%'),
        color: '#FFBA00',
        fontSize: hp('2.5%'),
        paddingBottom: hp('1%'),
    },
    lastservice: {
        paddingHorizontal: hp('3%'),
        paddingBottom: hp('1%'),
    },
    lastservicetext: {
        fontSize: hp('2.5%'),
    },


})