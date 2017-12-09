import { StackNavigator, TabNavigator } from 'react-navigation';
import { colors } from 'styles';
import Repositories from 'pages/repositories';
import Issues from 'pages/issues';
import IssuesOpen from 'pages/issues/components/open';
import IssuesClose from 'pages/issues/components/close';

const Routes = StackNavigator({
  Repo: { screen: Repositories },
  Issu: {
    screen: TabNavigator({
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
    }),
    navigationOptions: {
      headerTitle: 'Repositório',
      headerStyle: { backgroundColor: colors.white },
    },
  },
});

export default Routes;
