import navReducer from 'navigation/reducer';
import { reducer as user } from 'redux/ducks/user';

export default {
  nav: navReducer,
  user,
};
