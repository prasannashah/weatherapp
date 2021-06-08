import React, { Component } from 'react';
import {
    SafeAreaView,
    StatusBar,
    View
} from 'react-native';
import styles from "./WeatherListStyle";
export default class Services extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    componentDidMount() {

    }
    render() {
        return (
            <SafeAreaView>
                <StatusBar backgroundColor='white' barStyle='dark-content' />
                <View style={styles.mainContainer}>
                </View>
            </SafeAreaView>
        );
    }
}
