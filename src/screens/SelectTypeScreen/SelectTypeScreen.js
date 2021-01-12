import React, { Component } from 'react';
import {
    ImageBackground, FlatList,
    Image, View, StyleSheet,
    Text, TouchableOpacity,
    SafeAreaView,
    BackHandler,
    Alert,
} from 'react-native'
import { SelectTypeService } from '../../services/SelectTypeService/SelectTypeService';
import { UserService } from '../../services/UserService/UserService';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import Loading from '../../components/Loader/Loading'

class SelectTypeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectServiceType: null,
            serviceTypeList: [],
            companyname: [],
            companyicon: null,
            companyaddress: '',
            companycountry: '',
            companycity: '',
            companycontactNumber: '',
            userdata: null,
            id: null,
            loader: true,
        };
        this.onPressToSelectService = this.onPressToSelectService.bind(this);

        this._unsubscribeSiFocus = this.props.navigation.addListener('focus', e => {
            BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
        });

        this._unsubscribeSiBlur = this.props.navigation.addListener('blur', e => {
            BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton,
            );
        });
    }

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    SelectServiceType() {
        SelectTypeService()
            .then(data => {
                this.setState({ serviceTypeList: data });
                this.wait(1000).then(() => this.setState({ loader: false }));
            })
    }

    UserDetails = async () => {
        const getUser = await AsyncStorage.getItem('@authuser')
        const user = JSON.parse(getUser)
        const id = user.addedby
        await UserService(id).then(data => {
            this.setState({
                companydata: data,
                companyname: data.branchid.branchname, companyicon: data.branchid.branchlogo,
                companyaddress: data.branchid.address, companycity: data.branchid.city,
                companycontactNumber: data.property.mobile_number, companycountry: data.property.country
            });
        })
    }

    componentDidMount = async () => {
        this.SelectServiceType();
        this.UserDetails();
    }

    componentWillUnmount() {
        this._unsubscribeSiFocus();
        this._unsubscribeSiBlur();
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton = () => {
        BackHandler.exitApp();
        return true;
    }

    renderRecipes = ({ item, index }) => (
        <TouchableOpacity style={{ flexDirection: 'column' }} onPress={() => { this.onPressToSelectService(item._id, index) }}>
            <View style={styles.carBtn}>
                <Text style={item.selected ? styles.carbtnText : styles.bikebtnText}>{item && item.property.name}</Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", marginTop: hp('2.5%') }}>
                <Image source={{ uri: item && item.property.img[0]['attachment'] }} style={{ height: hp('15%'), width: wp('25%'), marginLeft: wp('9%') }} />
                <Image source={require('../../../assets/icons/keyholewhite.png')} style={item.selected ? styles.OnChnageRenderIcon : styles.renderIcon} />
            </View>
        </TouchableOpacity>
    );

    onPressToSelectService(type, index) {
        const { serviceTypeList } = this.state;
        const services = serviceTypeList.map((item) => {
            item.selected = false;
            return item;
        });
        services[index].selected = true;
        this.setState({ serviceTypeList: services })
        this.setState({ selectServiceType: type })
    }

    onNextStep() {
        const { selectServiceType } = this.state;
        if (selectServiceType != null && selectServiceType != 'undefine') {
            this.props.navigation.navigate('SelectService', { selectServiceType })
            // this.setState({ selectServiceType: null })
        } else {
            alert("Please Select your Service Type")
        }
    }

    render() {
        const { serviceTypeList, companyname, companydata, companyicon, companyaddress, companycountry, companycity, companycontactNumber, loader } = this.state;
        return (
            <ImageBackground source={require('../../../assets/images/background.png')} style={styles.backgroundImage} >
                <SafeAreaView style={{ flex: 1 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.container}>
                            <View style={styles.header}>
                                <Text style={styles.text_header}>Select Service Type</Text>
                            </View>
                            {serviceTypeList != null ? <>
                                <View style={styles.Image_view}>
                                    <FlatList
                                        vertical
                                        showsVerticalScrollIndicator={false}
                                        numColumns={2}
                                        data={serviceTypeList}
                                        renderItem={this.renderRecipes}
                                        keyExtractor={item => `${item._id}`}
                                    />
                                </View>
                                {companydata != null ? <>
                                    <View style={styles.address_view}>
                                        <Image source={{ uri: companyicon }} style={styles.companyicon} />
                                        <View >
                                            <Text style={styles.company_name}>{companyname}</Text>
                                            <Text>{companyaddress && `Address : ${companyaddress}`}</Text>
                                            <Text>{companycity && companycity + ', ' + companycountry}</Text>
                                            <Text>{companycontactNumber && `Conatct Number : ${companycontactNumber}`}</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity style={styles.next_Btn} onPress={() => this.onNextStep()}>
                                        <Text style={styles.next_text} >Next Step</Text>
                                    </TouchableOpacity>
                                </> : <Loading />}
                            </>
                                : <Loading />}
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        );
    }
};

export default SelectTypeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    header: {
        marginTop: hp('6%')
    },
    text_header: {
        color: '#000',
        textAlign: 'center',
        fontSize: hp('3.5%'),
        marginBottom: hp('1%'),
    },
    text_header2: {
        color: '#000',
        textAlign: 'center',
        marginTop: hp('1%'),
        fontSize: hp('2.5%'),
    },
    Image_view: {
        marginTop: hp('3%'),
        flexDirection: 'row',
        justifyContent: "space-around",
        marginLeft: wp('9%'),
    },
    carBtn: {
        flex: 1,
        width: wp("30%"),
        backgroundColor: "#fff",
        borderRadius: wp('6%'),
        height: hp('5%'),
        alignItems: "center",
        justifyContent: "center",
        marginLeft: wp('8%'),
        position: 'absolute'
    },
    carbtnText: {
        color: "#183BAE",
        fontWeight: 'bold',
    },
    renderIcon: {
        flex: 1,
        width: wp("6%"),
        height: wp('6%'),
        marginTop: hp('1%'),
        tintColor: '#AAAAAA',
        marginLeft: wp('8%'),
    },
    OnChnageRenderIcon: {
        flex: 1,
        width: wp("6%"),
        height: wp('6%'),
        marginTop: hp('1%'),
        tintColor: '#183BAE',
        marginLeft: wp('8%'),
    },
    bikebtnText: {
        color: "#AAAAAA",
        fontWeight: 'bold',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    companyicon: {
        height: hp('10%'),
        width: wp('25%'),
        justifyContent: 'center',
        alignItems: "center",

    },
    address_view: {
        flex: 1,
        marginTop: hp('4%'),
        width: wp('75%'),
        backgroundColor: "#fff",
        borderRadius: wp('6%'),
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: wp('8%'),
    },
    company_name: {
        fontSize: hp('2.5%'),
        marginBottom: hp('0.5%'),
        justifyContent: 'center',
        alignItems: "center",
        textTransform: 'capitalize',
    },
    next_Btn: {
        width: wp("75%"),
        backgroundColor: "#FFBA00",
        borderRadius: wp('6%'),
        height: hp('8%'),
        alignItems: "center",
        justifyContent: "center",
        marginTop: hp('4%'),
        marginBottom: hp('3%')
    },
    next_text: {
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: 'bold',
        fontSize: hp('2.5%'),
    },
});