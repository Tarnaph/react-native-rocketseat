import { createReducer, createActions } from 'reduxsauce';

/* Types & Actions Creators */
const { Types, Creators } = createActions({
  calendarSelectedDay: ['response'],
  calendarGetMarked: ['id', 'token', 'selected'],
  calendarGetMarkedSuccess: ['response'],
  calendarShowMini: [null],
  calendarHideMini: [null],
});
export { Types };
export default Creators;

/* Initial State */
export const INITIAL_STATE = {
  date: '',
  marked: '',
  miniCalendar: false,
};

/* Reducers */
export const selectedDay = (state, action) => ({ ...state, date: action.response });
export const getMarked = (state) => ({ ...state });
export const getMarkedSuccess = (state, action) => ({ ...state, marked: action.response });
export const showMini = (state) => ({ ...state, miniCalendar: true });
export const HideMini = (state) => ({ ...state, miniCalendar: false });

/* Reducers to Types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.CALENDAR_SELECTED_DAY]: selectedDay,
  [Types.CALENDAR_GET_MARKED]: getMarked,
  [Types.CALENDAR_GET_MARKED_SUCCESS]: getMarkedSuccess,
  [Types.CALENDAR_SHOW_MINI]: showMini,
  [Types.CALENDAR_HIDE_MINI]: HideMini,
});
