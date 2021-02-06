import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

export default class Signup extends Component {
    state = {
        email: '',
        password: ''
    }
    componentDidMount() {
        auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.navigation.navigate('Dashboard');
            }
        })
    }
    signupFunc = () => {
        if (this.state.email === "" || this.state.email === " " || this.state.email === undefined) {
            Alert.alert("email can't be empty!")
        } else if (this.state.password === "" || this.state.password === " " || this.state.password === undefined) {
            Alert.alert("passwod can't be empty!")
        } else {
            auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => {
                    Alert.alert('User account created & logged in!');
                    this.props.navigation.navigate('Dashboard');
                    database()
                        .ref('/users')
                        .push({
                            email: this.state.email,
                            password: this.state.password
                        })
                        .then((res) => console.log(res))
                })
                .catch(error => {
                    alert(error);
                });
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome !</Text>
                <Text style={styles.sign}>Sign up to continue</Text>

                <TextInput
                    style={styles.username}
                    placeholder='Email'
                    autoCapitalize='none'
                    onChangeText={text => this.setState({
                        email: text
                    })}
                />
                <TextInput
                    style={styles.username}
                    secureTextEntry={true}
                    placeholder='Password'
                    autoCapitalize='none'
                    onChangeText={text => this.setState({
                        password: text
                    })}
                />

                <View style={styles.loginView}>
                    <TouchableOpacity onPress={() => this.signupFunc()} style={styles.loginBtn}                    >
                        <Text style={styles.loginText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },
    welcome: {
        fontSize: 26
    },
    sign: {
        fontSize: 16,
        color: 'gray',
        marginTop: 20
    },
    username: {
        marginTop: 30,
        borderBottomColor: '#d6004e',
        borderBottomWidth: 1,
        paddingBottom: 20
    },
    loginView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    loginBtn: {
        width: 200,
        backgroundColor: '#d6004e',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        marginTop: 20
    },
    loginText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center'
    },
    forgot: {
        marginTop: 20,
        color: 'gray'
    },
})