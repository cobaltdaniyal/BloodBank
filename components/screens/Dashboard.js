import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Body, Text, Button } from 'native-base';
import database from '@react-native-firebase/database';
import { StyleSheet, Image } from 'react-native';
import auth from '@react-native-firebase/auth';
import DonorLs from './DonorLs'

var logo = require('../../Assets/images/logo.png')

export default class Dashboard extends Component {
    state = {
        currentUser: ''
    }

    componentDidMount() {
        database()
            .ref('/users')
            .on('value', function (data) {
                console.log(data)
            })
    }
    signOut = () => {
        auth()
            .signOut()
            .then(() => {
                alert('User signed out!')
                this.props.navigation.navigate('Home')
            });
    }
    Donor = () => {
        this.props.navigation.navigate('Donor')
    }

    render() {
        return (
            <Container>
                <Content >
                    <Card >
                        <CardItem style={{ justifyContent: 'center', alignItems: 'center' }} >
                            <Body>
                                <Image source={logo} style={{ width: 120, height: 50 }}></Image>
                            </Body>
                            <Button rounded style={{ backgroundColor: '#d6004e', marginRight: 5 }} onPress={() => this.Donor()}>
                                <Text style={{ fontSize: 12 }}>Be a Donor</Text>
                            </Button>

                            <Button rounded style={{ backgroundColor: '#d6004e' }} onPress={() => this.signOut()}>
                                <Text style={{ fontSize: 12 }}>Sign Out</Text>
                            </Button>
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