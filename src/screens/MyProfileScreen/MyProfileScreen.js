
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { removeUser } from '../../Helpers/Auth';

export default class Profile extends Component {
    constructor(props) {
        super(props);
    }

    onPressLogout() {
        console.log(this.props);
        removeUser()
        this.props.navigation.navigate('SignIn')
    }

    render() {
        return (
            <ImageBackground source={require('../../../assets/images/background.png')} style={styles.backgroundImage} >
                <View style={styles.container}>
                    <View style={styles.header}></View>
                    <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
                    <View style={styles.body}>
                        <View style={styles.bodyContent}>
                            <Text style={styles.name}>John Doe</Text>
                            {/* <Text style={styles.info}>UX Designer / Mobile developer</Text>
                            <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text> */}
                        </View>
                        <View style={{
                            flex: 1, flexDirection: 'column', alignItems: 'center', padding: 30,
                        }}>
                            <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('UpdateProfile')}>
                                <Entypo name="edit" size={27} color="#737373" style={{ padding: 7, paddingLeft: 20 }} />
                                <Text style={styles.textContainer}> Update Profile</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonContainer} onPress={() => this.onPressLogout()}>
                                <Entypo name="log-out" size={27} color="#737373" style={{ padding: 7, paddingLeft: 20 }} />
                                <Text style={styles.textContainer}> Log out</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        // backgroundColor: "#00BFFF",
        height: 200,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',

    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,

    },
    name: {
        fontSize: 28,
        color: "#737373",
        fontWeight: "600"
    },
    // updateContent: {
    //     flex: 1,
    //     alignItems: 'center',
    //     padding: 30,

    // },
    buttonContainer: {

        marginTop: 10,
        height: 55,
        flexDirection: 'row',
        // justifyContent: 'space-around',
        // alignItems: 'stretch',
        marginBottom: 20,
        width: "90%",
        borderRadius: 30,
        backgroundColor: "#FFF",
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
    textContainer: {
        padding: 8,
        fontSize: 25,
        color: '#737373'
    },
});