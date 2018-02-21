import { createReducer, createActions } from 'reduxsauce';

/* Types & Actions Creators */
const { Types, Creators } = createActions({
  calendarSelectedDay: ['response'],
});
export { Types };
export default Creators;

/* Initial State */
export const INITIAL_STATE = {
  date: '',
};

/* Reducers */
export const selectedDay = (state, action) => ({ ...state, date: action.response });

/* Reducers to Types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.CALENDAR_SELECTED_DAY]: selectedDay,
});
