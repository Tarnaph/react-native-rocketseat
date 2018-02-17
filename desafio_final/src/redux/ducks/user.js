import { createReducer, createActions } from 'reduxsauce';

/* Types & Actions Creators */
const { Types, Creators } = createActions({
  userUpdateRequest: ['id', 'token', 'name', 'password', 'confirmPassword'],
  userUpdateAll: ['response'],
  userUpdatePhone: ['response'],
});
export { Types };
export default Creators;

/* Initial State */
export const INITIAL_STATE = {
  id: '',
  name: '',
  phone: '',
  token: '',
  created_at: '',
  updated_at: '',
};

/* Reducers */
export const userUpdateRequest = state => ({
  ...state,
});

export const userUpdateAll = (state, action) => ({
  id: action.response.data.id,
  name: action.response.data.name,
  phone: action.response.data.phone,
  token: action.response.token,
  created_at: action.response.data.created_at,
  updated_at: action.response.data.updated_at,
});

export const userUpdatePhone = (state, action) => ({
  ...state,
  phone: action.response,
});

/* Reducers to Types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.USER_UPDATE_REQUEST]: userUpdateRequest,
  [Types.USER_UPDATE_ALL]: userUpdateAll,
  [Types.USER_UPDATE_PHONE]: userUpdatePhone,
});
