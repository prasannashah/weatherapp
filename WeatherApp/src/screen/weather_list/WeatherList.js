import React, { Component } from 'react';
import {
    SafeAreaView,
    StatusBar,
    View,
    FlatList,
    TouchableOpacity,
    Text,
    ActivityIndicator
} from 'react-native';
import styles from "./WeatherListStyle";
import constants from '../../common/Constants.js';
import axios from 'axios';

export default class WeatherList extends Component {
    constructor() {
        super();
        this.state = {
            showIndicator: true
        };
    }

    componentDidMount() {
        // Weather list api call
        this.getWeather();
    }

    getWeather() {
        let url = constants.BASE_URL + "find?units=imperial&lat=23.68&lon=90.35&cnt=50&appid=" + constants.API_KEY;
        axios.get(url)
            .then((response) => {
                // Set weather list data and dismiss progress bar
                this.setState({
                    showIndicator: false,
                    weatherList: response.data.list
                })
            })
            .catch((error) => {
                this.setState({
                    showIndicator: false
                })
            });
    }

    openDetails = (item) => {
        constants.LATITUDE = item.coord.lat;
        constants.LONGITUDE = item.coord.lon;
        this.props.navigation.navigate('WeatherDetail',
            {
                detail: item,
                temp: item.main.temp,
                weather: item.weather[0].main,
                humidity: item.main.humidity,
                speed: item.wind.speed,
                max: item.main.temp_max,
                min: item.main.temp_min,
                icon: item.weather[0].icon
            })
    }

    // Weather list item
    renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => this.openDetails(item)}>
            <View style={styles.weatherItem}>
                <View style={styles.weatherItemColumn1}>
                    {/* Weather city name */}
                    <Text style={styles.city}>{item.name}</Text>
                    {/* Weather status */}
                    <Text style={styles.weatherStatus}>{item.weather[0].main}</Text>
                </View>
                <View style={styles.weatherItemColumn2}>
                    {/* Weather Temparatur */}
                    {/* Temperaature calculation (84°F − 32) × 5/9 = 28.889°C */}
                    <Text style={styles.weatherTemp}>{((item.main.temp - 32) * 5 / 9).toFixed(2) + "°"}<Text style={styles.weatherTemp1}>{' C'}</Text></Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    // Weather list item separator
    renderSeparatorView = () => {
        return (<View style={styles.itemSeparator} />);
    };

    render() {
        return (
            <SafeAreaView>
                <StatusBar backgroundColor='white' barStyle='dark-content' />
                {this.state.showIndicator ?
                    <View style={styles.mainContainerProgress}>
                        <ActivityIndicator animating={true} size="large" color="#05162E" />
                    </View>
                    :
                    <View style={styles.mainContainer}>
                        {/* Weather list flatlist */}
                        <FlatList
                            data={this.state.weatherList}
                            keyExtractor={item => item.id}
                            renderItem={this.renderItem}
                            ItemSeparatorComponent={this.renderSeparatorView}
                        />
                    </View>
                }
            </SafeAreaView>
        );
    }
}
