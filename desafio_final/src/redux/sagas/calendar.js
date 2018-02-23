/* Presentational */
import api from 'services/api';
import { call, put } from 'redux-saga/effects';

/* Actions */
import Ux from 'redux/ducks/ux';
import Todo from 'redux/ducks/todo';
import Calendar from 'redux/ducks/calendar';
import Notification from 'redux/ducks/notification';

/* Styles */
import { colors } from 'styles';

// Get TODO by Day
export function* calendarGetMarked(action) {
  const response = yield call(api.post, 'getTodobyMonth', {
    id: action.id,
    token: action.token,
    selected: action.selected,
  });

  switch (response.status) {
    case 200:
      const selected = action.selected;
      const marked = response.data.date;
      const markedDates = {};
      for (i in marked) {markedDates[marked[i]] = { marked: true }};
      for (i in selected) {markedDates[selected] = {selected: true, selectedColor: colors.green }};
      yield put(Calendar.calendarGetMarkedSuccess(markedDates));
      break;
    case 203:
      //yield put(Notification.notificationShow(response.data));
      break;
    case 400:
      //yield put(Notification.notificationShow(response.data));
      break;
    case 404:
      //yield put(Notification.notificationShow(response.data));
      break;
    default:
      yield put(Notification.notificationShow(response.data));
  }
}
