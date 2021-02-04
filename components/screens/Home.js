import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';

var loginImage = require('../../Assets/images/login.png')
export default class Home extends Component {

    componentDidMount() {
        auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.navigation.navigate('Dashboard');
            }
        })
    }
    render() {
        return (
            <View style={styles.container}>

                <Image
                    style={styles.loginImage}
                    source={loginImage}
                    resizeMode='contain'
                />

                <Text style={styles.hello}>
                    Hello!
                </Text>

                <Text style={styles.welcome}>
                    Welcome To the Blood Bank Application,
                    where you can register as a donor or contact
                    donors near you.
                </Text>

                <View style={styles.loginView}>

                    <TouchableOpacity style={styles.loginBtn}
                        onPress={() => this.props.navigation.navigate('Login')}
                    >
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.signupBtn}
                        onPress={() => this.props.navigation.navigate('Signup')}
                    >
                        <Text style={styles.signupText}>Sign Up</Text>
                    </TouchableOpacity>

                </View>
                <Text style={{ fontSize: 16, marginTop: 10 }}>Or Via Social Media</Text>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <View
                        style={{
                            height: 40,
                            width: 40,
                            borderRadius: 40 / 2,
                            backgroundColor: '#3f51b5',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#fff'
                            }}>f</Text>
                    </View>

                    <View
                        style={{
                            height: 40,
                            width: 40,
                            borderRadius: 40 / 2,
                            backgroundColor: '#f44336',
                            marginHorizontal: 10,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#fff'
                            }}>G</Text>
                    </View>

                    <View
                        style={{
                            height: 40,
                            width: 40,
                            borderRadius: 40 / 2,
                            backgroundColor: '#1565c0',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#fff'
                            }}>in</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginImage: {
        width: 250,
        height: 250
    },
    hello: {
        fontSize: 36,
        fontWeight: 'bold'
    },
    welcome: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
        marginHorizontal: 20,
    },
    loginView: {
        flexDirection: 'row',
        margin: 20,
        paddingVertical: 20
    },
    loginBtn: {
        backgroundColor: '#d6004e',
        padding: 10,
        width: 150,
        borderRadius: 30,
        marginHorizontal: 2
    },
    loginText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18
    },
    signupBtn: {
        backgroundColor: '#fff',
        padding: 10,
        width: 150,
        borderRadius: 30,
        marginHorizontal: 2,
        borderWidth: 1,
        borderColor: '#d6004e'
    },
    signupText: {
        textAlign: 'center',
        color: '#d6004e',
        fontSize: 18
    },

});