// Core
// import React from 'react';
// import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { colors } from 'styles';
// import Icon from 'react-native-vector-icons/FontAwesome';

// Components, Pages
import Repositories from 'screens/Repositories';
// import Issues from 'screens/issues';
import headerIssues from 'screens/issues/components/header';
import issuesMenu from 'components/menu';

const Routes = StackNavigator({
  Repo: { screen: Repositories },
  Issu: {
    screen: issuesMenu,
    navigationOptions: {
      headerTitle: headerIssues,
      headerStyle: { backgroundColor: colors.white },
    },
  },
});

export default Routes;
