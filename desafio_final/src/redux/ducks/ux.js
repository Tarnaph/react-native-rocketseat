import { createReducer, createActions } from 'reduxsauce';

/* Types & Actions Creators */
const { Types, Creators } = createActions({
  uxLoadingTrue: null,
  uxLoadingFalse: null,
  uxLoadingRemoveTrue: null,
  uxLoadingRemoveFalse: null
});
export { Types };
export default Creators;

/* Initial State */
export const INITIAL_STATE = { loading: false, loadingRemove: false };

/* Reducers */
export const loadingTrue = state => ({ ...state, loading: true });
export const loadingFalse = state => ({ ...state, loading: false });
export const loadingRemoveTrue = state => ({ ...state, loadingRemove: true });
export const loadingRemoveFalse = state => ({ ...state, loadingRemove: false });


/* Reducers to Types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.UX_LOADING_TRUE]: loadingTrue,
  [Types.UX_LOADING_FALSE]: loadingFalse,
  [Types.UX_LOADING_REMOVE_TRUE]: loadingRemoveTrue,
  [Types.UX_LOADING_REMOVE_FALSE]: loadingRemoveFalse,
});
