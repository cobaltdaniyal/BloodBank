import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

var logo = require('../../Assets/images/logo.png')

export default class Splash extends Component {
    constructor(props) {
        super(props)
        setTimeout(() => {
            this.props.navigation.navigate('Home');
        },2000);
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={logo} style={styles.logo}></Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    logo: {
        height: 300,
        width: 300,
    },
});