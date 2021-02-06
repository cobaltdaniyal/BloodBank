import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Body, Text, Button, View } from 'native-base';
import database from '@react-native-firebase/database';
import { StyleSheet, Image, BackHandler, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import DonorLs from './DonorLs'

var logo = require('../../Assets/images/logo.png')

export default class Dashboard extends Component {
    state = {
        currentUser: ''
    }

    backAction = () => {
        Alert.alert("Are you sure you want to go back?", [
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
    };

    componentDidMount() {
        database()
            .ref('/users')
            .on('value', function (data) {
            }),
            this.backHandler = BackHandler.addEventListener(
                "hardwareBackPress",
                this.backAction
            );
    }
    signOut = () => {
        auth()
            .signOut()
            .then(() => {
                Alert.alert('User logged out!')
                this.props.navigation.navigate('Home')
            });
    }
    Donor = () => {
        this.props.navigation.navigate('Donor')
    }
    render() {
        return (
            <Container style={{ flexDirection: 'row' }} >
                <Content >
                    <Card >
                        <CardItem style={{ justifyContent: 'center', alignItems: 'center' }} >
                            <Body style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <View>
                                    <Image source={logo} style={{ width: 140, height: 70 }}></Image>
                                </View>
                            </Body>
                            <View style={{ flexDirection: 'column' }}>
                                <Button rounded style={{ backgroundColor: '#d6004e', margin: 1, width: 170, justifyContent: 'center' }} onPress={() => this.Donor()}>
                                    <Text style={{ fontSize: 12 }}>Become a Donor</Text>
                                </Button>
                                <Button rounded style={{ backgroundColor: '#d6004e', margin: 1, width: 170, justifyContent: 'center' }} onPress={() => this.signOut()}>
                                    <Text style={{ fontSize: 12 }}>Log Out</Text>
                                </Button>
                            </View>
                        </CardItem>
                    </Card>
                
                    <DonorLs />
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
})