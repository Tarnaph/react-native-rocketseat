import { TabNavigator } from 'react-navigation';
import { colors, fonts } from 'styles';
import Issues from 'pages/issues';
// import styles from './styles';

const issuesMenu = TabNavigator({
  Todos: { screen: Issues },
  Abertos: { screen: Issues },
  Fechados: { screen: Issues },
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
