import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Constant from './src/common/Constants.js';

import Splash from './src/screen/splash/Splash.js';
import WeatherList from './src/screen/weather_list/WeatherList.js';

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