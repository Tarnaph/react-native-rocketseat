import { createReducer, createActions } from 'reduxsauce';

/* Types & Actions Creators */
const { Types, Creators } = createActions({
  /* Show Modal */
  todoShowModal: null,
  todoHideModal: null,

  /* Cria Todo */
  todoRequest: ['id', 'token', 'dateTime', 'title', 'text', 'date'],
  todoRequestSuccess: null,
  todoRequestFailure: null,

  /* Get Todo */
  todoGetDay: ['id', 'token', 'date'],
  todoGetDaySuccess: ['response'],

  /* Remvove Todo */
  todoRemove: ['id', 'todoId', 'token', 'date'],
});
export { Types };
export default Creators;

/* Initial State */
export const INITIAL_STATE = {
  modal: false,
  list: '',
};

/* Reducers */
export const showModal = state => ({ ...state, modal: true });
export const hideModal = state => ({ ...state, modal: false });
export const request = state => ({ ...state });
export const getByDay = state => ({ ...state });
export const getByDaySuccess = (state, actions) => ({ ...state, list: actions.response.data });
export const remove = state => ({ ...state });

/* Reducers to Types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.TODO_SHOW_MODAL]: showModal,
  [Types.TODO_HIDE_MODAL]: hideModal,
  [Types.TODO_REQUEST]: request,
  [Types.TODO_GET_DAY]: getByDay,
  [Types.TODO_GET_DAY_SUCCESS]: getByDaySuccess,
  [Types.TODO_REMOVE]: remove,
});
