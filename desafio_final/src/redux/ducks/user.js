import { createReducer, createActions } from 'reduxsauce';

/* Types & Actions Creators */
const { Types, Creators } = createActions({
  userFindPhone: ['phone'],
  userIsRegistered: ['data'],
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
  registered: null,
  name: '',
  phone: '',
  token: '',
};

/* Reducers */
export const findPhone = state => ({
  ...state,
  loading: true,
});

export const isRegistered = (state, action) => ({
  ...state,
  loading: false,
  registered: action.data,
});

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
  [Types.USER_REQUEST]: request,
  [Types.USER_REQUEST]: refresh,
  [Types.USER_SUCCESS]: success,
  [Types.USER_FAILURE]: failure,
});