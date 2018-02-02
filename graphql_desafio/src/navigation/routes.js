import React from 'react';
import { StackNavigator } from 'react-navigation';
import Header from 'navigation/components/header';
import Home from 'pages/home';
import NewEmail from 'pages/newEmail';
import ReadEmail from 'pages/readEmail';

const Routes = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: props => <Header {...props} />,
    },
  },

  NewEmail: {
    screen: NewEmail,
    navigationOptions: {
      header: props => <Header {...props} />,
    },
  },

  ReadEmail: {
    screen: ReadEmail,
    navigationOptions: {
      header: props => <Header {...props} />,
    },
  },
});

export default Routes;
