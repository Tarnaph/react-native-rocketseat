import { createReducer, createActions } from 'reduxsauce';

/* Types & Actions Creators */
const { Types, Creators } = createActions({
  uxLoadingTrue: null,
  uxLoadingFalse: null,
});
export { Types };
export default Creators;

/* Initial State */
export const INITIAL_STATE = { loading: false };

/* Reducers */
export const loadingTrue = state => ({ ...state, loading: true });
export const loadingFalse = state => ({ ...state, loading: false });

/* Reducers to Types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.UX_LOADING_TRUE]: loadingTrue,
  [Types.UX_LOADING_FALSE]: loadingFalse,
});
