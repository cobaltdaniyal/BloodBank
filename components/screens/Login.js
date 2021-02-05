import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';

export default class Login extends Component {
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
    signInFunc = () => {
        if (this.state.email === "" || this.state.email === " " || this.state.email === undefined) {
           Alert.alert("email can't be empty!")
        } else if (this.state.password === "" || this.state.password === " " || this.state.password === undefined) {
           Alert.alert("passwod can't be empty!")
        } else {
            auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => {
                    this.props.navigation.navigate('Dashboard');
                   Alert.alert('User signed in!');
                })
                .catch(error => {
                    alert(error);
                });
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome Back!</Text>
                <Text style={styles.sign}>Sign in to continue</Text>

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
                    placeholder='Password'
                    autoCapitalize='none'
                    secureTextEntry={true}
                    onChangeText={text => this.setState({
                        password: text
                    })}
                />

                <View style={styles.loginView}>
                    <TouchableOpacity onPress={() => this.signInFunc()} style={styles.loginBtn}                    >
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                    <Text style={styles.forgot}>Forgot Password ?</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ marginTop: 20, color: 'gray' }}>Dont have an account?</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
                            <Text style={{ marginTop: 20, fontWeight: 'bold' }}> Sign Up</Text>
                        </TouchableOpacity>
                    </View>
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