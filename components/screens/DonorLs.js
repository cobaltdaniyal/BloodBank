import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, Alert } from 'react-native';
import database from '@react-native-firebase/database';
import { Spinner, CardItem, Button } from 'native-base';
import Clipboard from '@react-native-community/clipboard';

export default class DonorLs extends Component {

    state = {
        donors: [],
        isData: false,
    }

    componentDidMount() {
        database()
            .ref('donors')
            .on('value', (data) => {
                setTimeout(() => {
                    for (var key in data.val()) {
                            this.setState({
                                donors: [data.val()[key], ...this.state.donors],
                            })
                    }
                    this.setState({
                        isData: true
                    })
                }, 1000);
            })
    }

    list = () => {
        const { donors, isData } = this.state;
        return (
            isData ? donors.map((donor, id) => {
                return (
                    <ScrollView key={id}>
                        <View style={styles.donors}>
                            <CardItem >
                                <Text style={{ fontWeight: 'bold' }}>Donor : </Text>
                                <Text style={styles.donorText}> {donor.name}</Text>
                            </CardItem>
                            <CardItem >
                                <Text style={{ fontWeight: 'bold' }}>Blood Group : </Text>
                                <Text style={styles.donorText}> {donor.bloodGroup}</Text>
                            </CardItem>
                            <CardItem >
                                <Text style={{ fontWeight: 'bold' }}>Age : </Text>
                                <Text style={styles.donorText}> {donor.age}</Text>
                            </CardItem>
                            <CardItem >
                                <Text style={{ fontWeight: 'bold' }}>Location : </Text>
                                <Text style={styles.donorText}> {donor.location}</Text>
                            </CardItem>
                            <View style={{ borderBottomWidth: 1, borderBottomColor: 'grey', paddingBottom: 10 }}>
                                <CardItem >
                                    <Button onPress={() => { Clipboard.setString(donor.contact); Alert.alert('Text Copied') }} style={{ padding: 10, backgroundColor: 'pink', borderRadius: 5 }}>
                                        <Text style={{ fontWeight: 'bold' }}>Contact : </Text>
                                        <Text style={styles.donorText}> {donor.contact}</Text>
                                    </Button>
                                </CardItem>
                            </View>
                        </View>
                    </ScrollView>
                );
            })
                :
                (<View>
                    <Spinner color='red' />
                </View>)
        );
    };

    render() {
        return (
            <View style={styles.main}>
                <Text>{this.list()}</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    donors: {
        flex: 1,
        flexDirection: 'column',
        margin: 10,
        width: 300,
        justifyContent: 'center',
    },
    main: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    donorText: {
        fontSize: 16,
    }
});