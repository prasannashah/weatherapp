import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React, { Component } from 'react';

import Constant from './src/common/Constants.js';

import Splash from './src/screen/splash/Splash.js';
import WeatherList from './src/screen/weather_list/WeatherList.js';
import WeatherDetail from './src/screen/weather_detail/WeatherDetail.js';
import { Button, TouchableOpacity, View } from 'react-native';

const MainNavigation = createStackNavigator({
  WeatherList: {
    screen: WeatherList,
    navigationOptions: {
      title: 'WeatherApp',
      headerTitleStyle: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Roboto-Regular',
      },
      headerStyle: {
        backgroundColor: Constant.COLOR.GREEN,
      }
    }
  },
  WeatherDetail: {
    screen: WeatherDetail,
    navigationOptions: {
      title: 'WeatherApp',
      headerTitleStyle: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Roboto-Regular',
      },
      headerStyle: {
        backgroundColor: Constant.COLOR.GREEN,
      },
      headerTintColor: 'white',
      headerRight: () => <View style={{ width: 20 }} />
    }
  },
});
const AppNavigator = createSwitchNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {
      headerShown: false,
    }
  },
  MainNavigation: {
    screen: MainNavigation,
    navigationOptions: {
      headerShown: false,
    },
  }
});
export default createAppContainer(AppNavigator);