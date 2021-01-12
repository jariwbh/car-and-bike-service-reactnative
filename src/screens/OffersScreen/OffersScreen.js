import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, RefreshControl, FlatList, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import moment from 'moment';
import Loading from '../../components/Loader/Loading';
import { OfferService } from '../../services/OfferService/OfferService';
//import Clipboard from '@react-native-community/clipboard';

export class OffersScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offerService: [],
            refreshing: false,
            loader: true,
        }
    }

    OfferService() {
        OfferService().then(data => {
            this.setState({ offerService: data });
            this.wait(1000).then(() => this.setState({ loader: false }));
        })
    }

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    onRefresh = () => {
        this.setState({ refreshing: true });
        this.OfferService();
        this.wait(3000).then(() => this.setState({ refreshing: false }));
    }

    componentDidMount() {
        this.OfferService();
    }

    onClipboardCopy = (couponcode) => {
        //Clipboard.setString(couponcode)
        ToastAndroid.show("Copy Coupon Code!", ToastAndroid.SHORT);
    }

    renderOfferService = ({ item }) => (
        <View style={styles.servicename}>
            <MaterialIcons name="local-offer" size={25} color="#000000" />
            <View style={{ flexDirection: 'column', marginLeft: hp('0%') }}>
                <Text style={styles.servicetext}>{item.property.description}</Text>
                <Text style={{ marginTop: hp('1%') }}>Offer Valid till {moment(item.enddate).format('ll')}</Text>
            </View>
            <TouchableOpacity style={{ flexDirection: 'column', marginLeft: wp('1%') }} onPress={() => this.onClipboardCopy(item.property.couponcode)}>
                <MaterialCommunityIcons name="content-copy" size={20} color="#000000" style={{ padding: hp('1%') }} />
            </TouchableOpacity>
        </View>
    );

    render() {
        const { offerService, refreshing, loader } = this.state;
        this.wait(3000).then(() => this.setState({ refreshing: false }));
        return (
            <ImageBackground source={require('../../../assets/images/background.png')} style={styles.backgroundImage} >
                <View style={styles.header}>
                    <Text style={styles.headertext}>Offers</Text>
                </View>
                {(offerService === null) || (offerService && offerService.length == 0)
                    ?
                    (loader == false ?
                        <View style={{ alignItems: "center", justifyContent: 'center' }}>
                            <View style={{ alignItems: "center", justifyContent: 'center' }}>
                                <Text style={{ alignItems: "center", justifyContent: 'center', fontSize: hp('2%'), color: '#595959' }}>No Offers</Text>
                            </View>
                        </View>
                        : <Loading />
                    )
                    :
                    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} />} showsVerticalScrollIndicator={false}>
                        <View style={{ alignItems: "center", marginTop: hp('5%') }}>
                            <FlatList
                                data={offerService}
                                renderItem={this.renderOfferService}
                                keyExtractor={item => `${item._id}`}
                            />
                        </View>
                    </ScrollView>
                }

            </ImageBackground>
        )
    }
}

export default OffersScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
    servicename: {
        aspectRatio: 4,
        paddingHorizontal: hp('2%'),
        width: wp("90%"),
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: hp('2.5%'),
        borderRadius: wp('2%'),
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
})