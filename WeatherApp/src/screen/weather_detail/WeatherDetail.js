import React, { Component } from 'react';
import {
    Dimensions,
    SafeAreaView,
    StatusBar,
    Text,
    View
} from 'react-native';
import styles from "./WeatherDetailStyle";
import MapView, { Marker } from 'react-native-maps';
import Constants from '../../common/Constants';

export default class WeatherDetail extends Component {
    constructor() {
        super();
        this.state = {
            detail: {},
            weather: '',
            humidity: '',
            speed: '',
            max: '',
            min: '',
            temp: '',
            latitude: '0000',
            longitude: '0000'
        };
    }

    componentDidMount() {
        this.setState({
            detail: this.props.navigation.getParam('detail', ''),
            temp: this.props.navigation.getParam('temp', ''),
            weather: this.props.navigation.getParam('weather', ''),
            humidity: this.props.navigation.getParam('humidity', ''),
            speed: this.props.navigation.getParam('speed', ''),
            max: this.props.navigation.getParam('max', ''),
            min: this.props.navigation.getParam('min', ''),
        })
    }
    render() {
        const { detail, weather, humidity, speed, max, min, latitude, longitude, temp } = this.state
        return (
            <SafeAreaView>
                {/* Statusbar */}
                <StatusBar backgroundColor='white' barStyle='dark-content' />

                <View style={styles.mainContainer}>
                    {/* Google map */}
                    {latitude && longitude &&
                        <MapView
                            style={styles.map}
                            initialRegion={{
                                latitude: parseFloat(Constants.LATITUDE),
                                longitude: parseFloat(Constants.LONGITUDE),
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}>
                            <Marker draggable
                                coordinate={{ latitude: parseFloat(Constants.LATITUDE), longitude: parseFloat(Constants.LONGITUDE) }}
                                onDragEnd={(e) =>
                                    this.setLatLong(e)}
                            />
                        </MapView>
                    }

                    {/* Temprature view */}
                    <View style={{ height: '30%', flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                        <View>
                            {/* City name */}
                            <Text style={styles.city}>{detail.name}</Text>
                            {/* Status */}
                            <Text style={styles.smallText}>{weather}</Text>
                            {/* Humidity */}
                            <Text style={styles.smallText}>{'Humidity: ' + humidity}</Text>
                            {/* Wind SPeed */}
                            <Text style={styles.smallText}>{'Wind Speed: ' + speed}</Text>
                            {/* Max Temp */}
                            <Text style={styles.smallText}>{'Max. Temp,: ' + ((max - 32) * 5 / 9).toFixed(2) + '° c'}</Text>
                            {/* Min Temp */}
                            <Text style={styles.smallText}>{'Min. Temp,: ' + ((min - 32) * 5 / 9).toFixed(2) + '° c'}</Text>
                        </View>

                        <View style={styles.tempView}>
                            {/* Temprature */}
                            <Text style={styles.weatherTemp}>{((temp - 32) * 5 / 9).toFixed(2) + "° c"}</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
