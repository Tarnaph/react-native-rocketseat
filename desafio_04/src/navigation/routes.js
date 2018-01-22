import { StackNavigator, TabNavigator } from 'react-navigation';

import Footer from 'navigation/components/footer';
import Home from 'pages/home';
import Cart from 'pages/cart';
import Product from 'pages/product';

const homeRoutes = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Go Native Store',
      headerTitleStyle: {
        color: '#FF9696',
      },
      headerStyle: {
        backgroundColor: '#FFFF',
      },
    },
  },
  Product: {
    screen: Product,
    navigationOptions: {
      title: 'Produto',
      headerTitleStyle: {
        color: '#FF9696',
      },
      headerStyle: {
        backgroundColor: '#FFFF',
      },
    },
  },
});

const cartRoutes = StackNavigator({
  Cart: {
    screen: Cart,
    navigationOptions: {
      title: 'Carrinho',
      headerTitleStyle: {
        color: '#FF9696',
      },
      headerStyle: {
        backgroundColor: '#FFFF',
      },
      // headerTintColor: {
      // },
    },
  },
  Product: { screen: Product },
});

const Routes = TabNavigator({
  Home: { screen: homeRoutes },
  Cart: { screen: cartRoutes },
}, {
  swipeEnabled: false,
  animationEnabled: true,
  lazy: false,
  tabBarPosition: 'bottom',
  tabBarComponent: Footer,
});

export default Routes;
