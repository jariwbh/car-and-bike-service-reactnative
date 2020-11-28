import React, { Component } from 'react';
import {
    ImageBackground, FlatList, Image, View,
    StyleSheet, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { SelectTypeService } from '../../services/SelectTypeService/SelectTypeService';
import { UserService } from '../../services/UserService/UserService';

class SelectTypeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            serviceTypeList: [],
            companyname: [],
            companyicon: null,
            companyaddress: '',
            companycountry: '',
            companycity: '',
            companycontactNumber: ''
        };
    }

    SelectServiceType() {
        SelectTypeService()
            .then(data => {
                this.setState({ serviceTypeList: data });
            })
    }

    UserDetails() {
        UserService().then(data => {
            this.setState({
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
        <View style={{ flexDirection: 'column' }}>
            <View style={styles.carBtn}>
                <Text style={styles.carbtnText}>{item && item.property.name}</Text>
            </View>
            <View style={{ alignItems: "center", marginTop: 20 }}>
                <Image source={{ uri: item && item.property.img[0]['attachment'] }} style={{ height: 180, width: 180 }} />
                <Image source={require('../../../assets/icons/keyholewhite.png')} style={{ marginTop: 10, height: 30, width: 30 }} />
            </View>
        </View>
    );

    render() {
        const { serviceTypeList, companyname, companyicon, companyaddress, companycountry, companycity, companycontactNumber } = this.state;
        return (
            <ImageBackground source={require('../../../assets/images/background.png')} style={styles.backgroundImage} >
                <SafeAreaView style={styles.container}>
                    <KeyboardAvoidingView behavior='position' style={styles.container}>
                        <View style={styles.container}>
                            <ScrollView >
                                <View style={styles.header}>
                                    <Text style={styles.text_header}>Select Service Type</Text>
                                    <Text style={styles.text_header2}> Lorem Ipsum is simply dummy text </Text>
                                </View>

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
                                <TouchableOpacity style={styles.loginBtn} onPress={() => { this.props.navigation.navigate('SelectService') }}>
                                    <Text style={styles.loginText} >Next Step</Text>
                                </TouchableOpacity>
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
        color: "#AAAAAA",
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
        width: 300,
        backgroundColor: "#ffF",
        borderRadius: 25,
        height: 150,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        flexDirection: 'row'
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