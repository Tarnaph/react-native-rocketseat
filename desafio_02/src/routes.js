import { StackNavigator, TabNavigator } from 'react-navigation';
import { colors, fonts } from 'styles';
import Repositories from 'pages/repositories';
import Issues from 'pages/issues';

const Routes = StackNavigator({
  Repo: { screen: Repositories },
  Issu: { screen: Issues },
});

export default Routes;
