import { createReducer, createActions } from 'reduxsauce';

/* Types & Actions Creators */
const { Types, Creators } = createActions({
  loginPhoneCheck: ['phone'],
  loginPhoneSuccess: ['response'],
  loginPhoneFailure: ['response'],
  loginRequest: ['phone', 'password'],
  loginRequestRegister: ['phone', 'name', 'password'],
  loginRequestSuccess: ['response'],
  loginRequestFailure: ['response'],
});
export { Types };
export default Creators;

/* Initial State */
export const INITIAL_STATE = { isRegistered: null, isAuthorized: false };

/* Reducers */
export const phoneCheck = state => ({ ...state });
export const phoneSuccess = state => ({ ...state, isRegistered: true });
export const phoneFailure = state => ({ ...state, isRegistered: false });
export const loginRequest = state => ({ ...state });
export const loginRequestRegister = state => ({ ...state });
export const loginSuccess = state => ({ ...state, isAuthorized: true });
export const loginFailure = state => ({ ...state });

/* Reducers to Types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_PHONE_CHECK]: phoneCheck,
  [Types.LOGIN_PHONE_SUCCESS]: phoneSuccess,
  [Types.LOGIN_PHONE_FAILURE]: phoneFailure,
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_REQUEST_REGISTER]: loginRequestRegister,
  [Types.LOGIN_REQUEST_SUCCESS]: loginSuccess,
  [Types.LOGIN_REQUEST_FAILURE]: loginFailure,
});
