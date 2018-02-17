import navReducer from 'navigation/reducer';
import { reducer as user } from 'redux/ducks/user';
import { reducer as notification } from 'redux/ducks/notification';
import { reducer as ux } from 'redux/ducks/ux';
import { reducer as login } from 'redux/ducks/login';

export default {
  nav: navReducer,
  user,
  notification,
  ux,
  login,
};
