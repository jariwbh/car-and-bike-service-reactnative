import * as React from 'react';
import { isAuthenticated } from '../../Helpers/Auth';
import {
    View, ActivityIndicator, StyleSheet
} from 'react-native'

const SplashScreen = ({ navigation }) => {
    navigation.replace(isAuthenticated() ? 'Auth' : 'Tabnavigation')
    return (
        <View style={styles.container}>
            <ActivityIndicator
                color="#FFFFFF"
                size="large"
            />
        </View>)
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#307ecc',
    }
});
