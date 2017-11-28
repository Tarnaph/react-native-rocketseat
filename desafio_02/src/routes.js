import { StackNavigator } from 'react-navigation';
import Repositories from 'screens/Repositories';
import Issues from 'screens/Issues';

const rootNavigator = StackNavigator({
  Repositories: { screen: Repositories },
  Issues: { screen: Issues },
});

export default rootNavigator;

