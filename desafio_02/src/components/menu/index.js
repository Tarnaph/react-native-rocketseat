import { TabNavigator } from 'react-navigation';
import { colors, fonts } from 'styles';
import Issues from 'pages/issues';
import IssuesOpen from 'pages/issues/open';
import IssuesClose from 'pages/issues/close';
// import styles from './styles';

const issuesMenu = TabNavigator({
  Todos: { screen: Issues },
  Abertos: { screen: IssuesOpen },
  Fechados: { screen: IssuesClose },
}, {
  tabBarPosition: 'Top',
  tabBarOptions: {
    activeTintColor: colors.darker,
    // inactiveTintColor: fonts.inactive,
    style: {
      backgroundColor: colors.light,
      borderRadius: 5,
      marginHorizontal: 10,
      marginTop: 10,
      paddingBottom: 8,
      height: 30,
      justifyContent: 'center',
      borderTopWidth: 0,
    },
  },
});

export default issuesMenu;

