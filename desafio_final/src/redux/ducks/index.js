import navReducer from 'navigation/reducer';
import { reducer as user } from 'redux/ducks/user';
import { reducer as notification } from 'redux/ducks/notification';
import { reducer as ux } from 'redux/ducks/ux';
import { reducer as login } from 'redux/ducks/login';
import { reducer as todo } from 'redux/ducks/todo';
import { reducer as calendar } from 'redux/ducks/calendar';

export default {
  nav: navReducer,
  user,
  notification,
  ux,
  login,
  todo,
  calendar,
};
