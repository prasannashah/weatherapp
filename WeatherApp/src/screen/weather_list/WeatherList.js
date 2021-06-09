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

export default class Services extends Component {
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
        let url = constants.BASE_URL + "find?lat=23.68&lon=90.35&cnt=50&appid=" + constants.API_KEY;
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


    // Weather list item
    renderItem = ({ item }) => (
        <View style={styles.weatherItem}>
            <View style={styles.weatherItemColumn1}>
                {/* Weather city name */}
                <Text style={styles.city}>{item.name}</Text>
                {/* Weather status */}
                <Text style={styles.weatherStatus}>{item.name}</Text>
            </View>
            <View style={styles.weatherItemColumn2}>
                {/* Weather Temparatur */}
                <Text style={styles.weatherTemp}>{item.wind.deg + "°"}<Text style={styles.weatherTemp1}>{' C'}</Text></Text>
            </View>
        </View>
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
