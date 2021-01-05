import React, { Component } from 'react';
import { ImageBackground, View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Fontisto, MaterialIcons, Entypo } from '@expo/vector-icons';
import { BookService } from '../../services/BookService/BookService';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';

class BookServiceScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: null,
            memberID: null,
            userData: null,
            fullname: null,
            fullnameError: null,
            mobilenumber: null,
            mobilenumberError: null,
            serviceDate: null,
            serviceDateError: null,
            serviceTime: null,
            serviceTimeError: null,
            vehicleNumber: null,
            vehicleNumberError: null,
            serviceID: this.props.route.params.serviceID._id,
            charges: this.props.route.params.serviceID.charges,
            duration: this.props.route.params.serviceID.duration,
            isDatePickerVisible: false, isTimePickerVisibility: false
        }
        this.setFullName = this.setFullName.bind(this);
        this.setMobileNumber = this.setMobileNumber.bind(this);
        this.setServiceDate = this.setServiceDate.bind(this);
        this.setServiceTime = this.setServiceTime.bind(this);
        this.setVehicleNumber = this.setVehicleNumber.bind(this);
        this.onPressSubmit = this.onPressSubmit.bind(this);
    }

    showDatePicker = () => {
        this.setState({ isDatePickerVisible: true });
    };

    hideDatePicker = () => {
        this.setState({ isDatePickerVisible: false });
    };

    handleConfirmDate = (date) => {
        this.setState({ serviceDate: moment(date).format('YYYY-MM-DD') });
        this.hideDatePicker();
    };

    showTimePicker = () => {
        this.setState({ isTimePickerVisibility: true });
    };

    hideTimePicker = () => {
        this.setState({ isTimePickerVisibility: false });
    };

    handleConfirmTime = (time) => {
        this.setState({ serviceTime: moment(time).format('HH:mm') });
        this.hideTimePicker();
    };

    getdata = async () => {
        var getUser = await AsyncStorage.getItem('@authuser')
        const user = JSON.parse(getUser)
        this.setState({
            fullname: user.property.fullname,
            mobilenumber: user.property.mobile_number,
            userID: user.addedby,
            memberID: user._id
        })
    }

    componentDidMount() {
        this.getdata()
    }

    setFullName(fullname) {
        if (!fullname || fullname.length <= 0) {
            return this.setState({ fullnameError: 'User Name cannot be empty' });
        }
        return this.setState({ fullname: fullname, fullnameError: null })
    }

    setMobileNumber(mobilenumber) {
        const reg = /^[0]?[789]\d{9}$/;
        if (!mobilenumber || mobilenumber.length <= 0) {
            return this.setState({ mobilenumberError: 'Mobile Number cannot be empty' });
        }
        if (!reg.test(mobilenumber)) {
            return this.setState({ mobilenumberError: 'Ooops! We need a valid Mobile Number' });
        }
        return this.setState({ mobilenumber: mobilenumber, mobilenumberError: null })
    }

    setServiceDate(serviceDate) {
        if (!serviceDate || serviceDate.length <= 0) {
            return this.setState({ serviceDateError: 'service Date cannot be empty' });
        }
        return this.setState({ serviceDate: serviceDate, serviceDateError: null })
    }

    setServiceTime(serviceTime) {
        if (!serviceTime || serviceTime.length <= 0) {
            return this.setState({ serviceTimeError: 'Service Time cannot be empty' });
        }
        return this.setState({ serviceTime: serviceTime, serviceTimeError: null })
    }

    setVehicleNumber(vehicleNumber) {
        if (!vehicleNumber || vehicleNumber.length <= 0) {
            return this.setState({ vehicleNumberError: 'Vehicle Number cannot be empty' });
        }
        return this.setState({ vehicleNumber: vehicleNumber, vehicleNumberError: null })
    }

    resetScreen() {
        this.setState({
            fullname: null,
            fullnameError: null,
            mobilenumber: null,
            mobilenumberError: null,
            serviceDate: null,
            serviceDateError: null,
            serviceTime: null,
            serviceTimeError: null,
            vehicleNumber: null,
            vehicleNumberError: null,
        })
    }

    onPressSubmit = async () => {
        const { fullname, mobilenumber, serviceDate, serviceTime, vehicleNumber, serviceID, userID, memberID, charges, duration } = this.state;
        if (!fullname || !mobilenumber || !serviceDate || !serviceTime || !vehicleNumber) {
            this.setFullName(fullname)
            this.setMobileNumber(mobilenumber)
            this.setServiceDate(serviceDate)
            this.setServiceTime(serviceTime)
            this.setVehicleNumber(vehicleNumber)
            return;
        }

        const body = {
            attendee: memberID,
            appointmentdate: serviceDate,
            onModel: "Member",
            refid: serviceID,
            host: userID,
            charges: charges,
            duration: duration,
            timeslot: {
                starttime: serviceTime
            },
            property: {
                vehicleno: vehicleNumber
            }
        }

        console.log('body', body)
        await BookService(body).then(response => {
            console.log('response', response)
            if (response != null) {
                ToastAndroid.show("Book Your Service!", ToastAndroid.SHORT);
                this.props.navigation.navigate('MyService')
                this.resetScreen()
            }
        })
    }

    render() {
        const { fullname, mobilenumber, serviceTime, serviceDate } = this.state;
        return (
            <ImageBackground source={require('../../../assets/images/background.png')} style={styles.backgroundImage} >
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.text_header}>Book Service</Text>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text style={{ marginLeft: hp('7%'), paddingBottom: hp('1%') }}>Name</Text>
                        <View style={{ alignItems: 'center' }}>
                            <View style={styles.inputView}>
                                <FontAwesome name="user" size={27} color="#737373" style={{ paddingLeft: hp('3%') }} />
                                <TextInput
                                    defaultValue={fullname}
                                    style={styles.TextInput}
                                    placeholder="Enter Full Name"
                                    type='clear'
                                    placeholderTextColor="#737373"
                                    onChangeText={(fullname) => this.setFullName(fullname)}
                                // editable={false}
                                />
                            </View>
                            <Text style={{ marginTop: hp('-4%'), marginRight: wp('27%'), color: '#ff0000' }}>{this.state.fullnameError && this.state.fullnameError}</Text>
                        </View>
                        <Text style={{ marginLeft: hp('7%'), paddingBottom: hp('1%') }}>Mobile Number</Text>
                        <View style={{ alignItems: 'center' }}>
                            <View style={styles.inputView}>
                                <FontAwesome name="phone" size={27} color="#737373" style={{ paddingLeft: hp('3%') }} />
                                <TextInput
                                    defaultValue={mobilenumber}
                                    style={styles.TextInput}
                                    placeholder="Mobile Number"
                                    type='clear'
                                    placeholderTextColor="#737373"
                                    keyboardType="numeric"
                                    onChangeText={(mobilenumber) => this.setMobileNumber(mobilenumber)}
                                // editable={false}
                                />
                            </View>
                            <Text style={{ marginTop: hp('-4%'), marginRight: wp('21%'), color: '#ff0000' }}>{this.state.mobilenumberError && this.state.mobilenumberError}</Text>
                        </View>
                        <Text style={{ marginLeft: hp('7%'), paddingBottom: hp('1%') }}>Service Date</Text>
                        <View style={{ alignItems: 'center' }}>
                            <View style={styles.inputView} >
                                <Fontisto name="date" size={27} color="#737373" style={{ paddingLeft: hp('3%') }} />
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="YYYY-MM-DD"
                                    type='clear'
                                    defaultValue={serviceDate}
                                    placeholderTextColor="#AAAAAA"
                                    onTouchStart={this.showDatePicker}
                                    onChangeText={(serviceDate) => this.setServiceDate(serviceDate)}
                                >
                                </TextInput>
                                <DateTimePickerModal
                                    isVisible={this.state.isDatePickerVisible}
                                    mode="date"
                                    onConfirm={this.handleConfirmDate}
                                    onCancel={this.hideDatePicker}
                                />
                            </View>
                            <Text style={{ marginTop: hp('-4%'), marginRight: wp('27%'), color: '#ff0000' }}>{this.state.serviceDateError && this.state.serviceDateError}</Text>
                        </View>
                        <Text style={{ marginLeft: hp('7%'), paddingBottom: hp('1%') }}>Service Time</Text>
                        <View style={{ alignItems: 'center' }}>
                            <View style={styles.inputView} >
                                <MaterialIcons name="timer" size={27} color="#737373" style={{ paddingLeft: hp('3%') }} />
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="HH-MM"
                                    type='clear'
                                    defaultValue={serviceTime}
                                    placeholderTextColor="#AAAAAA"
                                    onTouchStart={this.showTimePicker}
                                    onChangeText={(serviceTime) => this.setServiceTime(serviceTime)}
                                >
                                </TextInput>
                                <DateTimePickerModal
                                    isVisible={this.state.isTimePickerVisibility}
                                    mode="time"
                                    onConfirm={this.handleConfirmTime}
                                    onCancel={this.hideTimePicker}
                                />
                            </View>
                            <Text style={{ marginTop: hp('-4%'), marginRight: wp('27%'), color: '#ff0000' }}>{this.state.serviceTimeError && this.state.serviceTimeError}</Text>
                        </View>
                        <Text style={{ marginLeft: hp('7%'), paddingBottom: hp('1%') }}>vehicle Number</Text>
                        <View style={{ alignItems: 'center' }}>
                            <View style={styles.inputView} >
                                <Entypo name="credit-card" size={27} color="#737373" style={{ paddingLeft: hp('3%') }} />
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="XX-XX-XX-XX"
                                    type='clear'
                                    placeholderTextColor="#AAAAAA"
                                    onChangeText={(vehicleNumber) => this.setVehicleNumber(vehicleNumber)}
                                >
                                </TextInput>
                            </View>
                            <Text style={{ marginTop: hp('-4%'), marginRight: wp('21%'), color: '#ff0000' }}>{this.state.vehicleNumberError && this.state.vehicleNumberError}</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity style={styles.bookserviceBtn} onPress={() => this.onPressSubmit()} >
                                <Text style={styles.bookserviceText} >Book Service</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
        );
    }
};

export default BookServiceScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    header: {
        flex: 1,
        paddingHorizontal: hp('3%'),
        paddingBottom: hp('4%'),
        marginTop: hp('6%'),
        marginBottom: hp('5%')
    },
    text_header: {
        color: '#000',
        fontSize: hp('4%'),
        textAlign: 'center',
    },
    inputView: {
        flexDirection: 'row',
        backgroundColor: "#fff",
        borderRadius: wp('6%'),
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        borderColor: '#fff',
        width: wp('80%'),
        height: hp('8%'),
        marginBottom: hp('4%'),
        alignItems: "center",
    },
    TextInput: {
        fontSize: hp('2%'),
        flex: 1,
        padding: hp('2%'),
    },
    bookserviceBtn: {
        width: wp('80%'),
        backgroundColor: "#FFBA00",
        borderRadius: wp('6%'),
        height: hp('7%'),
        alignItems: "center",
        justifyContent: "center",
        marginTop: hp('3%'),
        marginBottom: hp('12%'),
    },
    bookserviceText: {
        color: "white",
        fontWeight: 'bold',
        fontSize: hp('3%'),
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',

    },
});