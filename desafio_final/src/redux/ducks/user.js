import { createReducer, createActions } from 'reduxsauce';

/* Types & Actions Creators */
const { Types, Creators } = createActions({
  userFindPhone: ['phone'],
  userIsRegistered: ['data', 'phone'],

  userRequestLogin: ['phone', 'password'],
  userIsAuthorized: ['response'],
  userNotAuthorized: ['response'],

  userRequestRegister: ['phone', 'name', 'password'],
  userRegisterAuthorized: ['response'],
  userRegisterNotAuthorized: ['response'],

  userRequest: ['data'],
  userRefresh: ['id'],
  userSuccess: ['data'],
  userFailure: null,
});
export { Types };
export default Creators;

/* Initial State */
export const INITIAL_STATE = {
  loading: false,
  error: false,
  msgError: '',
  registered: null,
  isAuthorized: false,
  name: '',
  phone: '',
  token: '',
  isPhoneScreen: false,
  isLoginScreen: false,
  isRegisterScreen: false,
};

/* Reducers */
export const findPhone = state => ({
  ...state,
  loading: true,
  isPhoneScreen: true,
  isLoginScreen: false,
  isRegisterScreen: false,
});

export const isRegistered = (state, action) => ({
  ...state,
  loading: false,
  registered: action.data,
  phone: action.phone,
});

export const requestLogin = state => ({
  ...state,
  loading: true,
  isPhoneScreen: false,
  isLoginScreen: true,
  isRegisterScreen: false,
});

export const userIsAuthorized = (state, action) => ({
  ...state,
  loading: false,
  phone: action.response.data.phone,
  user: action.response.data,
  token: action.response.token,
  isAuthorized: true,
  isPhoneScreen: false,
  isLoginScreen: false,
  isRegisterScreen: false,
  error: false,
  msgError: '',
});

export const userNotAuthorized = (state, action) => ({
  ...state,
  isAuthorized: false,
  loading: false,
  error: action.response.error,
  msgError: action.response.msg,
});

export const requestRegister = state => ({
  ...state,
  loading: true,
  isPhoneScreen: false,
  isLoginScreen: false,
  isRegisterScreen: true,
});

export const userRegisterAuthorized = (state, action) => ({
  ...state,
  loading: false,
  phone: action.response.data.phone,
  user: action.response.data,
  token: action.response.token,
  error: false,
  msgError: '',
  isAuthorized: true,
  isPhoneScreen: false,
  isLoginScreen: false,
  isRegisterScreen: false,
});

// Aqui
export const userRegisterNotAuthorized = (state, action) => ({
  ...state,
  loading: false,
  error: true,
  msgError: action.response.msg,
});

// Parei Aqui ˆ ˆ ˆ ˆ
export const request = state => ({
  ...state,
  loading: true,
});

export const refresh = state => ({
  ...state,
  loading: true,
});

export const success = (state, action) => ({
  data: action.data.products,
  loading: false,
  error: false,
});

export const failure = state => ({
  loading: false,
  error: true,
  data: [],
});

/* Reducers to Types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.USER_FIND_PHONE]: findPhone,
  [Types.USER_IS_REGISTERED]: isRegistered,

  [Types.USER_REQUEST_LOGIN]: requestLogin,
  [Types.USER_IS_AUTHORIZED]: userIsAuthorized,
  [Types.USER_NOT_AUTHORIZED]: userNotAuthorized,

  [Types.USER_REQUEST_REGISTER]: requestRegister,
  [Types.USER_REGISTER_AUTHORIZED]: userRegisterAuthorized,
  [Types.USER_REGISTER_NOT_AUTHORIZED]: userRegisterNotAuthorized,


  [Types.USER_REQUEST]: request,
  [Types.USER_REQUEST]: refresh,
  [Types.USER_SUCCESS]: success,
  [Types.USER_FAILURE]: failure,
});