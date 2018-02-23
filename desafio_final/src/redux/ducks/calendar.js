import { createReducer, createActions } from 'reduxsauce';

/* Types & Actions Creators */
const { Types, Creators } = createActions({
  calendarSelectedDay: ['response'],
  calendarGetMarked: ['id', 'token', 'selected'],
  calendarGetMarkedSuccess: ['response'],
});
export { Types };
export default Creators;

/* Initial State */
export const INITIAL_STATE = {
  date: '',
  marked: '',
};

/* Reducers */
export const selectedDay = (state, action) => ({ ...state, date: action.response });
export const getMarked = (state, action) => ({ ...state });
export const getMarkedSuccess = (state, action) => ({ ...state, marked: action.response });

/* Reducers to Types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.CALENDAR_SELECTED_DAY]: selectedDay,
  [Types.CALENDAR_GET_MARKED]: getMarked,
  [Types.CALENDAR_GET_MARKED_SUCCESS]: getMarkedSuccess,
});
