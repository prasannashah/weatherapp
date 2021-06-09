import React, { Component } from 'react';
import {
    SafeAreaView,
    StatusBar,
    Text,
    View
} from 'react-native';
import styles from "./SplashStyle.js";
export default class Services extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    componentDidMount() {
        setTimeout(() => {
            //Navigate Weather list screen after 3 seconds.
            this.props.navigation.navigate('MainNavigation')
        }, 3000)
    }
    render() {
        return (
            <SafeAreaView>
                {/* Statusbar */}
                <StatusBar backgroundColor='white' barStyle='dark-content' />

                <View style={styles.mainContainer}>
                    {/* Splash screen App label */}
                    <Text style={styles.splashTitle}>WeatherApp</Text>
                </View>
            </SafeAreaView>
        );
    }
}
