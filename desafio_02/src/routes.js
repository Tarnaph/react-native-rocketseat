// Core
// import React from 'react';
// import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { colors } from 'styles';
// import Icon from 'react-native-vector-icons/FontAwesome';

// Components, Pages
import Repositorys from 'pages/repositorys';
// import Issues from 'pages/issues';
import headerRepositorys from 'components/headers/repositorys';
import headerIssues from 'components/headers/issues';
import issuesMenu from 'components/menu';

const Routes = StackNavigator({
  Repo: {
    screen: Repositorys,
    navigationOptions: {
      headerTitle: headerRepositorys,
      headerStyle: { backgroundColor: colors.white,
      },
    },
  },
  Issu: {
    screen: issuesMenu,
    navigationOptions: {
      headerTitle: headerIssues,
      headerStyle: { backgroundColor: colors.white },
    },
  },
});

export default Routes;
