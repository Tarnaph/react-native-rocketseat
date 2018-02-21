import { createReducer, createActions } from 'reduxsauce';

/* Types & Actions Creators */
const { Types, Creators } = createActions({
  notificationShow: ['reponse'],
  notificationHide: ['msg'],
});
export { Types };
export default Creators;

/* Initial State */
export const INITIAL_STATE = { show: false, msg: '', error: false };

/* Reducers */
export const show = (state, action) => ({ show: true, msg: action.reponse.msg, error: action.reponse.error });
export const hide = () => ({ show: false, msg: '', error: false });

/* Reducers to Types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.NOTIFICATION_SHOW]: show,
  [Types.NOTIFICATION_HIDE]: hide,
});
