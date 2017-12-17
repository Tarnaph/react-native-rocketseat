import { StackNavigator } from 'react-navigation';
import Home from 'pages/Home';

const routes = StackNavigator({
  Home: { screen: Home },
}, {
  navigationOptions: {

  },
});

export default routes;
