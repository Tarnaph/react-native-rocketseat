import { takeLatest } from 'redux-saga/effects';

/* Types */
import { Types as LoginTypes } from 'redux/ducks/login';
import { Types as UserTypes } from 'redux/ducks/user';
import { Types as TodoTypes } from 'redux/ducks/todo';
import { Types as CalendarTypes } from 'redux/ducks/calendar';

/* Sagas */
import { loginPhoneCheck, loginRequest, loginRequestRegister } from 'redux/sagas/login';
import { userUpdateRequest } from 'redux/sagas/user';
import { todoRequest, todoGetDay } from 'redux/sagas/todo';
import { calendarGetMarked } from 'redux/sagas/calendar';

/* Chamadas */
export default function* root() {
  yield [
    /* Login */
    takeLatest(LoginTypes.LOGIN_PHONE_CHECK, loginPhoneCheck),
    takeLatest(LoginTypes.LOGIN_REQUEST, loginRequest),
    takeLatest(LoginTypes.LOGIN_REQUEST_REGISTER, loginRequestRegister),

    /* User */
    takeLatest(UserTypes.USER_UPDATE_REQUEST, userUpdateRequest),

    /* Todo */
    takeLatest(TodoTypes.TODO_REQUEST, todoRequest),
    takeLatest(TodoTypes.TODO_GET_DAY, todoGetDay),

    /* Calendar */
    takeLatest(CalendarTypes.CALENDAR_GET_MARKED, calendarGetMarked),
  ];
}
