import React from 'react';
import Home from './../company/Home';
import CompanyDetail from './../company/CompanyDetail';
import AppointmentCreate from './../company/AppointmentCreate';
import CompanyList from './../company/CompanyList';
import Login from './../auth/Login';
import Register from './../auth/Register';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StackNavigator, TabNavigator} from 'react-navigation';
import colors from './colors';

const HomeTab = StackNavigator(
  {
    HomeScene: {
      screen: Home,
      navigationOptions: {
        title: () => 'iBooky',
      },
    },
    CompanyDetailScene: {
      screen: CompanyDetail,
    },
  },
  {
    headerMode: 'screen',
  },
);

const SearchTab = StackNavigator(
  {
    CompanyListScene: {
      screen: CompanyList,
    },
    CompanyDetailScene: {
      screen: CompanyDetail,
    },
  },
  {
    headerMode: 'screen',
  },
);

const Tabs = TabNavigator(
  {
    HomeTab: {
      screen: HomeTab,
      navigationOptions: {
        tabBar: () => ({
          label: 'Home',
          icon: ({tintColor, focused}) => (
            <Ionicons
              name={focused ? 'ios-home' : 'ios-home-outline'}
              size={26}
              style={{color: focused ? colors.accent : colors.smokeGrayDark}}
            />
          ),
        }),
      },
    },
    SearchTab: {
      screen: SearchTab,
      navigationOptions: {
        tabBar: () => ({
          label: 'Search',
          icon: ({tintColor, focused}) => (
            <Ionicons
              name={focused ? 'ios-search' : 'ios-search-outline'}
              size={26}
              style={{color: focused ? colors.accent : colors.smokeGrayDark}}
            />
          ),
        }),
      },
    },
    SettingsTab: {
      screen: HomeTab,
      navigationOptions: {
        tabBar: () => ({
          label: 'Settings',
          icon: ({tintColor, focused}) => (
            <Ionicons
              name={focused ? 'ios-settings' : 'ios-settings-outline'}
              size={26}
              style={{color: focused ? colors.accent : colors.smokeGrayDark}}
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
      headerMode: 'screen',
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
