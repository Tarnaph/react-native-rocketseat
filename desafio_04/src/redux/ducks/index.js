import navReducer from 'navigation/reducer';
import { reducer as categories } from 'redux/ducks/categories';
import { reducer as products } from 'redux/ducks/products';
import { reducer as cart } from 'redux/ducks/cart';

export default {
  nav: navReducer,
  categories,
  products,
  cart,
};
