import { createReducer, createActions } from 'reduxsauce';

/* Types & Actions Creators */
const { Types, Creators } = createActions({
  notificationShow: ['reponse'],
  notificationHide: ['msg'],
});
export { Types };
export default Creators;

/* Initial State */
export const INITIAL_STATE = { show: false, msg: '' };

/* Reducers */
export const show = (state, action) => ({ show: true, msg: action.reponse.msg });
export const hide = () => ({ show: false, msg: '' });

/* Reducers to Types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.NOTIFICATION_SHOW]: show,
  [Types.NOTIFICATION_HIDE]: hide,
});
