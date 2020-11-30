import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export class MyService extends Component {
    render() {
        return (
            <ImageBackground source={require('../../../assets/images/background.png')} style={styles.backgroundImage} >
                <View style={styles.header}>
                    <Text style={styles.headertext}>My Service</Text>
                </View>
                <View>
                    <View style={styles.onservice}>
                        <Text style={styles.onservicetext}> Ongoing Service </Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.servicename}>
                            <View style={{ flexDirection: 'column' }}>

                                <Text style={styles.servicetext}>Service Provider Name</Text>
                                <Text style={styles.bookingtext}> Booking ID - AT345FGT</Text>
                                <Text style={styles.genreltext}>General Service</Text>
                                <Text>Vehicle Number - XX XX YYYY</Text>
                            </View>

                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ padding: 10 }}>Oct 29, 2020</Text>
                                <MaterialCommunityIcons name="file-pdf" size={20} color="#3357BC" style={{ padding: 10 }} />
                                <Text style={{ color: '#FF0045', padding: 10 }}>Pending</Text>
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
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.servicetext}>Service Provider Name</Text>
                                <Text style={styles.bookingtext}> Booking ID - AT345FGT</Text>
                                <Text style={styles.genreltext}>Full Body Panting</Text>
                                <Text>Vehicle Number - XX XX YYYY</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ padding: 10 }}>Oct 29, 2020</Text>
                                <MaterialCommunityIcons name="file-pdf" size={20} color="#3357BC" style={{ padding: 10 }} />
                                <Text style={{ color: '#0022FF', padding: 10 }}>Paid</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <View style={styles.servicename}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.servicetext}>Service Provider Name</Text>
                                <Text style={styles.bookingtext}> Booking ID - AT345FGT</Text>
                                <Text style={styles.genreltext}>Water Wash</Text>
                                <Text>Vehicle Number - XX XX YYYY</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ padding: 10 }}>Oct 29, 2020</Text>
                                <MaterialCommunityIcons name="file-pdf" size={20} color="#3357BC" style={{ padding: 10 }} />
                                <Text style={{ color: '#0022FF', padding: 10 }}>Paid</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <View style={styles.servicename}>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={styles.servicetext}>Service Provider Name</Text>
                                    <Text style={styles.bookingtext}> Booking ID - AT345FGT</Text>
                                    <Text style={styles.genreltext}>Complete Car Spa</Text>
                                    <Text>Vehicle Number - XX XX YYYY</Text>
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ padding: 10 }}>Oct 29, 2020</Text>
                                    <MaterialCommunityIcons name="file-pdf" size={20} color="#3357BC" style={{ padding: 10 }} />
                                    <Text style={{ color: '#0022FF', padding: 10 }}>Paid</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
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
        marginTop: 15,
    },
    headertext: {
        fontSize: 20,
    },
    onservice: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        marginTop: 10,
    },
    onservicetext: {
        fontSize: 20,
    },
    servicename: {
        aspectRatio: 3,
        paddingHorizontal: 20,
        width: "85%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        borderRadius: 20,
        alignItems: "center",
        position: 'relative',
        backgroundColor: "#fff",
        borderColor: '#fff',
        borderRadius: 20,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,

    },
    servicetext: {
        fontSize: 20,


    },
    bookingtext: {
        color: "#999999",
        paddingTop: 5,
    },
    genreltext: {
        paddingTop: 8,
        color: '#FFBA00',
        fontSize: 18,
        paddingBottom: 5,
    },
    lastservice: {
        paddingHorizontal: 20,
        paddingBottom: 30,
    },
    lastservicetext: {
        fontSize: 20
    },


})