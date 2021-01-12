import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, ImageBackground, TouchableOpacity, FlatList, Image, ActivityIndicator } from 'react-native'
import SliderScreen from '../../components/Slider/SliderScreen'
import { SelectService } from '../../services/SelectService/SelectService';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Loading from '../../components/Loader/Loading'

export class SelectServiceScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serviceList: [],
            loader: true,
        }
        this.serviceType = this.props.route.params.selectServiceType
    }

    SelectService(serviceType) {
        SelectService(serviceType).then(data => {
            this.setState({ serviceList: data });
            this.wait(1000).then(() => this.setState({ loader: false }));
        })
    }

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    componentDidMount() {
        this.SelectService(this.serviceType);
    }

    onPressToSelectService = item => {
        this.props.navigation.navigate('SelectCompanyName', { item })
    }

    renderService = ({ item }) => (
        <TouchableOpacity style={styles.inputView} onPress={() => { this.onPressToSelectService(item) }}>
            <View style={styles.categoryIcon}>
                <Image source={{ uri: item.gallery && item.gallery[0]['attachment'] }} style={{ height: 60, width: 60 }} />
            </View>
            <View style={styles.inputText}>
                <Text >{item && item.title}</Text>
            </View>
        </TouchableOpacity>
    );

    render() {
        const { serviceList, loader } = this.state;
        return (
            <ImageBackground source={require('../../../assets/images/background.png')} style={styles.backgroundImage} >
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.text_header}> Service</Text>
                    </View>
                    <View>
                        <Text style={styles.text_hedding}>Select Your Service to Continue</Text>
                    </View>
                    {(serviceList === null) || (serviceList && serviceList.length == 0) ?
                        (loader == false ?
                            <View style={{ alignItems: "center", justifyContent: 'center', marginTop: hp('25%') }}>
                                <Text style={{ fontSize: hp('2.5%'), color: '#595959' }}>Service Not Available</Text>
                            </View>
                            : <View style={{ marginTop: hp('10%') }}>
                                <Loading />
                            </View>
                        )
                        : <>
                            <View>
                                <SliderScreen />
                            </View>
                            <View style={{ marginLeft: hp('1%'), alignItems: "center" }}>
                                <View style={styles.inputUpperview} >
                                    <FlatList
                                        vertical
                                        showsVerticalScrollIndicator={false}
                                        numColumns={2}
                                        data={serviceList}
                                        renderItem={this.renderService}
                                        keyExtractor={item => `${item._id}`}
                                    />
                                </View>
                            </View>
                        </>}
                </View>
            </ImageBackground>
        )
    }
}

export default SelectServiceScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    header: {
        marginTop: hp('5%'),
    },
    text_header: {
        color: '#e6b800',
        fontSize: hp('4%'),
        textAlign: 'center',
    },
    text_hedinner: {
        color: '#0066ff',
    },
    text_hedding: {
        color: '#000',
        fontSize: hp('2.5%'),
        textAlign: 'center',
        paddingBottom: hp('2%')
    },
    inputUpperview: {
        flexDirection: 'row',
        paddingTop: hp('2%'),
        justifyContent: 'center',
    },
    inputView: {
        flex: 0.5,
        margin: wp('2%'),
        flexDirection: 'row',
        borderRadius: wp('11%'),
        alignItems: "center",
        backgroundColor: "#fff",
        borderColor: '#fff',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 6,
        marginBottom: 10,
    },
    inputText: {
        flex: 1,
        color: "black",
        paddingLeft: hp('1%'),
        fontSize: hp('4%'),
        flexDirection: 'column',
        fontWeight: 'bold',
    },

})