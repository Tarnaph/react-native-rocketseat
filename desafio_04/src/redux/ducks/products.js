import { createReducer, createActions } from 'reduxsauce';

/* Types & Actions Creators */
const { Types, Creators } = createActions({
  productsRequest: ['id'],
  productsRefresh: ['id'],
  productsSuccess: ['data'],
  productsFailure: null,
});
export { Types };
export default Creators;

/* Initial State */
export const INITIAL_STATE = {
  loading: false,
  error: false,
  data: [],
};

/* Reducers */
export const request = state => ({
  ...state,
  loading: true,
});

export const refresh = state => ({
  ...state,
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
  [Types.PRODUCTS_REQUEST]: request,
  [Types.PRODUCTS_REQUEST]: refresh,
  [Types.PRODUCTS_SUCCESS]: success,
  [Types.PRODUCTS_FAILURE]: failure,
});
