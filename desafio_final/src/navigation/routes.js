/* React */
import React from 'react';
import { Animated, Easing } from 'react-native';

/* Navigation */
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';

/* Components */
import Footer from 'navigation/components/footer';
import Header from 'navigation/components/header';
import Bugger from 'navigation/components/bugger';

/* Login */
import Identification from 'pages/identification';
import Login from 'pages/login';
import Register from 'pages/register';
import Dashboard from 'pages/dashboard';

/* Calendar */
import Calendar from 'pages/calendar';

const Stack = StackNavigator({
  Identification: { screen: Identification },
  Login: { screen: Login },
  Register: { screen: Register },
  Dashboard: { screen: Dashboard },
  Calendar: { screen: Calendar },
}, {
  initialRouteName: 'Identification',
  navigationOptions: {
    header: props => <Header {...props} defaultTitle="SCHEDULER" />,
  },
  // transitionConfig: () => ({
  //   transitionSpec: {
  //     duration: 0,
  //     timing: Animated.timing,
  //     easing: Easing.step0,
  //   },
  // }),
});

const Drawer = DrawerNavigator({
  Home: {
    screen: Stack,
  },
}, {
  contentComponent: props => <Bugger {...props} />,
  drawerWidth: 300,
});


export default Stack;
