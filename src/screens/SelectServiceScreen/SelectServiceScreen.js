import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, FlatList, Image } from 'react-native'
import SliderScreen from '../../components/Slider/SliderScreen'
import { SelectService } from '../../services/SelectService/SelectService';

export class SelectServiceScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serviceList: []
        }
    }

    SelectService() {
        SelectService().then(data => { this.setState({ serviceList: data }) }
        )
    }

    componentDidMount() {
        this.SelectService();
    }

    onPressService = item => {
        this.props.navigation.navigate('SelectCompanyName', { item })
    }

    renderService = ({ item }) => (
        <TouchableOpacity style={styles.inputView} onPress={() => { this.onPressService(item) }}>
            <View style={styles.categoryIcon}>
                <Image source={{ uri: item && item.property.icon_logo }} style={{ height: 60, width: 60 }} />
            </View>
            <View style={styles.inputText}>
                <Text >{item && item.property.title}</Text>
            </View>
        </TouchableOpacity>
    );

    render() {
        const { serviceList } = this.state;
        return (
            <ImageBackground source={require('../../../assets/images/background.png')} style={styles.backgroundImage} >
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.text_header}> service</Text>
                    </View>
                    <View>
                        <Text style={styles.text_hedding}>Select Your Servic to Continue</Text>
                    </View>
                    <View>
                        <SliderScreen />
                    </View>
                    <View style={{ marginLeft: 25, alignItems: "center" }}>
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
                </View>
            </ImageBackground>
        )
    }
}

export default SelectServiceScreen


const styles = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent: 'center',
        //alignItems: "center",
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    header: {
        padding: 30
    },
    text_header: {
        color: '#e6b800',
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'monospace'
    },
    text_hedinner: {
        color: '#0066ff',
    },
    text_hedding: {
        color: '#000',
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'monospace',
        paddingBottom: 40
    },
    inputUpperview: {
        flexDirection: 'row',
        paddingTop: 20,
        justifyContent: 'center',
    },
    inputView: {
        marginBottom: 20,
        width: "40%",
        flexDirection: 'row',
        borderRadius: 25,
        margin: 10,
        alignItems: "center",
        backgroundColor: "#fff",
        borderColor: '#fff',
        height: 55,
        borderRadius: 25,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 1,
        margin: 10
    },
    inputText: {
        paddingLeft: 5,
        color: "black",
        fontSize: 27,
        flexDirection: 'column',
        fontWeight: 'bold',

    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 60,
        height: 60,
        //backgroundColor: '#ff99cc',
        borderRadius: 50,
    },
})