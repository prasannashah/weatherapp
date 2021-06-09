import React, { Component } from 'react';
import {
    SafeAreaView,
    StatusBar,
    Text,
    View,
    Alert
} from 'react-native';
import styles from "./SplashStyle.js";
import Geocoder from 'react-native-geocoding';
import GetLocation from 'react-native-get-location';
import Constants from '../../common/Constants.js';

Geocoder.init("AIzaSyAlffqFYr8RW-R_LpPESnvF535HW7niAKk");
export default class Services extends Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        this._requestLocation()
        setTimeout(() => {
            //Navigate Weather list screen after 3 seconds.
            this.props.navigation.navigate('MainNavigation')
        }, 3000)
    }

    _requestLocation = () => {
        this.setState({ loading: true, location: null });

        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 150000,
        })
            .then(location => {
                // Set latitude and longitude
                Constants.LATITUDE = location.latitude;
                Constants.LONGITUDE = location.longitude;

                // Call API for weather
                this.getWeather()
            })
            .catch(ex => {
                const { code, message } = ex;
                if (code === 'CANCELLED') {
                    Alert.alert('Location cancelled by user or by another request');
                }
                if (code === 'UNAVAILABLE') {
                    Alert.alert('Location service is disabled or unavailable');
                }
                if (code === 'TIMEOUT') {
                    Alert.alert('Location request timed out');
                }
                if (code === 'UNAUTHORIZED') {
                    Alert.alert('Authorization denied');
                }
            });

    }

    getWeather = () => {
        let url = constants.BASE_URL + "weather?lat={" + Constants.LONGITUDE + "}&lon={" + Constants.LATITUDE + "}&appid=" + constants.API_KEY;
        axios.get(url)
            .then((response) => {
                // Set weather data
                this.setState({
                    weather: response.data
                })
            })
            .catch((error) => { });
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
