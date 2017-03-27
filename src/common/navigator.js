import React from 'react';
import Login from './../auth/Login';
import Register from './../auth/Register';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StackNavigator, TabNavigator} from 'react-navigation';
import colors from './colors';

const SettingTab = StackNavigator({
  SettingsScene: {
    screen: Login,
    navigationOptions: {
      title: () => 'Settings',
    },
  },
});

const Tabs = TabNavigator(
  {
    PropertyTab: {
      screen: SettingTab,
      navigationOptions: {
        tabBar: () => ({
          label: 'Home',
          icon: ({tintColor, focused}) => (
            <Ionicons
              name={focused ? 'ios-home' : 'ios-home-outline'}
              size={26}
              style={{color: focused ? colors.accent : colors.smokeGreyDark}}
            />
          ),
        }),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: colors.accent,
    },
    animationEnabled: false,
    swipeEnabled: false,
    lazyLoad: true,
    navigationOptions: {
      cardStack: {
        gesturesEnabled: false,
      },
    },
  },
);

export default (Navigator = StackNavigator(
  {
    Tabs: {screen: Tabs},
    Login: {screen: Login},
    Register: {screen: Register},
  },
  {
    headerMode: 'none',
    mode: 'modal',
    initialRouteName: 'Tabs',
  },
));
