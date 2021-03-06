import React, { Component } from 'react'
import { Text, View, ScrollView, ImageBackground, StyleSheet, FlatList, ActivityIndicator, RefreshControl } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { MyServiceLastService, MyServiceOngoingService } from '../../services/MyService/MyService';
import moment from 'moment'
import Loading from '../../components/Loader/Loading'
import AsyncStorage from '@react-native-community/async-storage';

export class MyService extends Component {
    constructor(props) {
        super(props);
        this.userid = null;
        this.state = {
            _id: null,
            ongoingService: [],
            lastService: [],
            refreshing: false,
            loader: true,
        }
    }

    MyServiceService(id) {
        MyServiceOngoingService(id).then(data => {
            this.setState({ ongoingService: data })
            this.wait(1000).then(() => this.setState({ loader: false }));
        })

        MyServiceLastService(id).then(data => {
            this.setState({ lastService: data })
        })
    }

    getdata = async () => {
        var getUser = await AsyncStorage.getItem('@authuser')
        if (getUser == null) {
            setTimeout(() => {
                this.props.navigation.replace('LoginScreen')
            }, 5000);
        } else {
            this.userid = JSON.parse(getUser)
            this.MyServiceService(this.userid._id)
            this.setState({ _id: this.userid._id })
        }
    }

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    onRefresh = () => {
        const { _id } = this.state;
        this.setState({ refreshing: true })
        this.MyServiceService(_id)
        this.wait(3000).then(() => this.setState({ refreshing: false }));
    }

    componentDidMount() {
        this.getdata();
    }

    renderOngoingService = ({ item }) => (
        <View style={styles.servicename}>
            <View style={{ flexDirection: 'column' }}>
                <Text style={styles.servicetext}>Service Provider Name</Text>
                <Text style={styles.bookingtext}> Booking ID - {item.prefix + item.number}</Text>
                <Text style={styles.genreltext}>{item.refid.title}</Text>
                <Text>Vehicle Number - {item.property.vehicleno}</Text>
            </View>
            <View style={{ flexDirection: 'column', marginLeft: wp('1%') }}>
                <Text style={{ padding: hp('0.5%') }}>{moment(item.appointmentdate).format('ll')}</Text>
                <MaterialCommunityIcons name="file-pdf" size={20} color="#3357BC" style={{ padding: hp('0.5%') }} />
                <Text style={{ color: '#FF0045', padding: hp('0.5%') }}>{item.status}</Text>
            </View>
        </View>
    );

    renderLastService = ({ item }) => (
        <View style={{ alignItems: "center" }}>
            <View style={styles.servicename}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.servicetext}>Service Provider Name</Text>
                    <Text style={styles.bookingtext}> Booking ID - {item.prefix + item.number}</Text>
                    <Text style={styles.genreltext}>{item.refid.title}</Text>
                    <Text>Vehicle Number - {item.property.vehicleno}</Text>
                </View>
                <View style={{ flexDirection: 'column', marginLeft: wp('1%') }}>
                    <Text style={{ padding: hp('1%') }}>{moment(item.appointmentdate).format('ll')}</Text>
                    <MaterialCommunityIcons name="file-pdf" size={20} color="#3357BC" style={{ padding: hp('1%') }} />
                    <Text style={{ color: '#FF0045', padding: hp('1%') }}>{item.status}</Text>
                </View>
            </View>
        </View>
    );

    render() {
        const { ongoingService, refreshing, loader, lastService } = this.state;
        this.wait(3000).then(() => this.setState({ refreshing: false }));

        return (
            <ImageBackground source={require('../../../assets/images/background.png')} style={styles.backgroundImage} >
                <View style={styles.header}>
                    <Text style={styles.headertext}>My Service</Text>
                </View>
                <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} />} showsVerticalScrollIndicator={false}>
                    {(ongoingService == null) || (ongoingService && ongoingService.length == 0)
                        ?
                        (loader == false ?
                            <View>
                                <View style={styles.onservice}>
                                    <Text style={styles.onservicetext}> Ongoing Service </Text>
                                </View>
                                <View style={{ alignItems: "center", justifyContent: 'center' }}>
                                    <View style={styles.ErrorMsgstyle}>
                                        <View style={{ alignItems: "center", justifyContent: 'center' }}>
                                            <Text style={{ alignItems: "center", justifyContent: 'center', fontSize: hp('2%'), marginLeft: hp('15%'), color: '#595959' }}>Data Not Available</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            : <View style={{ marginTop: hp('15%') }}><Loading /></View>
                        )
                        :
                        <>
                            <View>
                                <View style={styles.onservice}>
                                    <Text style={styles.onservicetext}> Ongoing Service </Text>
                                </View>
                                <View style={{ alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                                    <FlatList
                                        data={this.state.ongoingService}
                                        renderItem={this.renderOngoingService}
                                        keyExtractor={item => `${item._id}`}
                                    />
                                </View>
                            </View>
                        </>}
                    {(lastService == null) || (lastService && lastService.length == 0)
                        ?
                        (loader == false &&
                            <View>
                                <View style={styles.onservice}>
                                    <Text style={styles.onservicetext}> Last Service </Text>
                                </View>
                                <View style={{ alignItems: "center", justifyContent: 'center' }}>
                                    <View style={styles.ErrorMsgstyle}>
                                        <View style={{ alignItems: "center", justifyContent: 'center' }}>
                                            <Text style={{ alignItems: "center", justifyContent: 'center', fontSize: hp('2%'), marginLeft: hp('15%'), color: '#595959' }}>Data Not Available</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                        :
                        <>
                            <View style={{ marginBottom: hp('10%') }}>
                                <View style={styles.lastservice}>
                                    <Text style={styles.lastservicetext}> Last Service </Text>
                                </View>
                                <FlatList
                                    data={this.state.lastService}
                                    renderItem={this.renderLastService}
                                    keyExtractor={item => `${item._id}`}
                                />
                            </View>
                        </>}
                </ScrollView>
            </ImageBackground>
        )
    }
}

export default MyService

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        margin: hp('1%')
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
    ErrorMsgstyle: {
        aspectRatio: 2.5,
        paddingHorizontal: hp('2%'),
        width: wp("90%"),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: hp('2.5%'),
        borderRadius: wp('6%'),
        alignItems: "center",
        position: 'relative',
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