import { StackNavigator } from 'react-navigation';
import Home from 'pages/home';

const routes = StackNavigator({
  Home: { screen: Home },
}, {
  navigationOptions: {

  },
});

export default routes;
