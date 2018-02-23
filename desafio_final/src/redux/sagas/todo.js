/* Presentational */
import api from 'services/api';
import { call, put } from 'redux-saga/effects';

/* Actions */
import Ux from 'redux/ducks/ux';
import Todo from 'redux/ducks/todo';
import Calendar from 'redux/ducks/calendar';
import Notification from 'redux/ducks/notification';

/* New TODO */
export function* todoRequest(action) {
  yield put(Ux.uxLoadingTrue());

  const response = yield call(api.post, 'create', {
    id: action.id,
    token: action.token,
    dateTime: action.dateTime,
    title: action.title,
    text: action.text,
    date: action.date,
  });

  switch (response.status) {
    case 200:
      yield put(Notification.notificationShow(response.data));
      yield put(Todo.todoGetDay(action.id, action.token, action.date));
      yield put(Calendar.calendarGetMarked(action.id, action.token, action.date));
      break;
    case 203:
      yield put(Notification.notificationShow(response.data));
      break;
    case 400:
      yield put(Notification.notificationShow(response.data));
      break;
    case 404:
      yield put(Notification.notificationShow(response.data));
      break;
    default:
      yield put(Notification.notificationShow(response.data));
  }
  yield put(Ux.uxLoadingFalse());
  yield put(Todo.todoHideModal());
}

// Get TODO by Day
export function* todoGetDay(action) {
  yield put(Ux.uxLoadingTrue());

  const response = yield call(api.post, 'getTodobyDay', {
    id: action.id,
    token: action.token,
    date: action.date,
  });

  switch (response.status) {
    case 200:
      yield put(Calendar.calendarGetMarked(action.id, action.token, action.date));
      yield put(Todo.todoGetDaySuccess(response.data));
      yield put(Notification.notificationShow(response.data));
      break;
    case 203:
      yield put(Notification.notificationShow(response.data));
      break;
    case 400:
      yield put(Notification.notificationShow(response.data));
      break;
    case 404:
      yield put(Notification.notificationShow(response.data));
      break;
    default:
      yield put(Notification.notificationShow(response.data));
  }
  yield put(Ux.uxLoadingFalse());
  yield put(Calendar.calendarSelectedDay(action.date));
}
