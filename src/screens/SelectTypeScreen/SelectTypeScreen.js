import React, { Component } from 'react';
import {
    ImageBackground, FlatList,
    Image, View, StyleSheet,
    Text, TouchableOpacity,
    StatusBar, Dimensions,
    ScrollView, KeyboardAvoidingView
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { SelectTypeService } from '../../services/SelectTypeService/SelectTypeService';
import { UserService } from '../../services/UserService/UserService';
const { height } = Dimensions.get('window');
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
            bike: false,
            car: false,
        };
        this.onPressToSelectService = this.onPressToSelectService.bind(this);
    }
    state = {
        // We don't know the size of the content initially, and the probably won't instantly try to scroll, so set the initial content height to 0
        screenHeight: 0,
    };

    SelectServiceType() {
        SelectTypeService()
            .then(data => {
                this.setState({ serviceTypeList: data });
            })
    }

    UserDetails() {
        UserService().then(data => {
            this.setState({
                companydata: data,
                companyname: data.branchid.branchname, companyicon: data.branchid.branchlogo,
                companyaddress: data.branchid.address, companycity: data.branchid.city,
                companycontactNumber: data.property.mobile_number, companycountry: data.property.country
            });
        })
    }

    componentDidMount() {
        this.SelectServiceType();
        this.UserDetails();
    }

    renderRecipes = ({ item }) => (
        <TouchableOpacity style={{ flexDirection: 'column' }} onPress={() => { this.onPressToSelectService(item.property.name) }}>
            <View style={styles.carBtn}>
                <Text style={styles.bikebtnText}>{item && item.property.name}</Text>
            </View>
            <View style={{ alignItems: "center", marginTop: 20 }}>
                <Image source={{ uri: item && item.property.img[0]['attachment'] }} style={{ height: 180, width: 180 }} />
                <Image source={require('../../../assets/icons/keyholewhite.png')} style={{ marginTop: 10, height: 30, width: 30 }} />
            </View>
        </TouchableOpacity>
    );

    onPressToSelectService(type) {
        this.setState({ selectServiceType: type })
        // if (type === "Bike Service") {
        //     _style = {
        //         color: "#000",
        //         fontWeight: 'bold',
        //     }
        //     //this.state.bike === true ? styles.carbtnText : styles.bikebtnText 
        // } else if (type === "Car Service") {
        //     //this.state.car === true ? styles.carbtnText : styles.bikebtnText 
        //     // _style = {
        //     //     color: "red",
        //     //     fontWeight: 'bold',
        //     // }
        // }
    }

    onNextStep() {
        const { selectServiceType } = this.state;
        if (selectServiceType != null && selectServiceType != 'undefine') {
            this.props.navigation.navigate('SelectService', { selectServiceType })
            this.setState({ selectServiceType: null })
        } else {
            alert("Please Select your Service")
        }
    }
    onContentSizeChange = (contentWidth, contentHeight) => {
        // Save the content height in state
        this.setState({ screenHeight: contentHeight });
    };

    render() {
        const scrollEnabled = this.state.screenHeight > height;
        const { serviceTypeList, companyname, companyicon, companyaddress, companycountry, companycity, companycontactNumber } = this.state;
        return (
            <ImageBackground source={require('../../../assets/images/background.png')} style={styles.backgroundImage} >
                <SafeAreaView style={styles.container}>
                    <KeyboardAvoidingView behavior='' style={styles.container}>
                        <StatusBar barStyle="light-content" backgroundColor="#468189" />
                        <View style={styles.container}>
                            <ScrollView
                                style={{ flex: 1 }}
                                contentInsetAdjustmentBehavior="automatic"
                                contentContainerStyle={styles.scrollview}
                                scrollEnabled={scrollEnabled}
                                onContentSizeChange={this.onContentSizeChange}
                            >
                                {/* <SafeAreaView style={styles.container}> */}
                                {/* <KeyboardAvoidingView behavior='' style={styles.container}> */}
                                {/* <View style={styles.container}> */}
                                {/* <ScrollView > */}
                                <View style={styles.header}>
                                    <Text style={styles.text_header}>Select Service Type</Text>
                                    <Text style={styles.text_header2}> Lorem Ipsum is simply dummy text </Text>
                                </View>
                                {this.state.companydata && <>
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
                                    <View style={styles.address_view}>
                                        <Image source={{ uri: companyicon }} style={{ height: 100, width: 100, marginLeft: 20, marginTop: 10, marginRight: 30 }} />
                                        <View >
                                            <Text style={{ fontSize: 22, marginBottom: 10, textTransform: 'capitalize' }}>{companyname}</Text>
                                            <Text>{companyaddress && `Address : ${companyaddress}`}</Text>
                                            <Text>{companycity && companycity + ', ' + companycountry}</Text>
                                            <Text>{companycontactNumber && `Conatct Number : ${companycontactNumber}`}</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity style={styles.loginBtn} onPress={() => this.onNextStep()}>
                                        <Text style={styles.loginText} >Next Step</Text>
                                    </TouchableOpacity>
                                </>
                                }

                                {/* </View> */}
                            </ScrollView>
                        </View>
                    </KeyboardAvoidingView>
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
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 30,
        marginTop: 50
    },
    text_header: {
        color: '#000',
        fontSize: 25,
        textAlign: 'center',
    },
    text_header2: {
        margin: 10,
        color: '#000',
        fontSize: 15,
        textAlign: 'center',
    },
    Image_view: {
        flexDirection: 'row',
        justifyContent: "space-around",
    },
    carBtn: {
        width: "80%",
        backgroundColor: "#fff",
        borderRadius: 25,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 15,
        position: 'absolute'
    },
    carbtnText: {
        color: "#000",
        fontWeight: 'bold',
    },
    bikebtnText: {
        color: "#AAAAAA",
        fontWeight: 'bold',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    address_view: {
        flex: 1,
        marginTop: 70,
        // width: "100%",
        width: 350,
        backgroundColor: "#fff",
        borderRadius: 25,
        height: 280,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    loginBtn: {
        width: "100%",
        backgroundColor: "#FFBA00",
        borderRadius: 25,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },
    loginText: {
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: 'bold',
        fontSize: 20
    },
});