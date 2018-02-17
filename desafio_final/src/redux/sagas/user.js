/* Presentational */
import api from 'services/api';
import { call, put } from 'redux-saga/effects';

/* Actions */
import Ux from 'redux/ducks/ux';
import User from 'redux/ducks/user';
import Login from 'redux/ducks/login';
import Notification from 'redux/ducks/notification';

/* Update infos do user */
export function* userUpdateRequest(action) {
  yield put(Ux.uxLoadingTrue());

  const response = yield call(api.post, 'user/update', {
    id: action.id,
    token: action.token,
    name: action.name,
    password: action.password,
    confirmPassword: action.confirmPassword,
  });

  switch (response.status) {
    case 200:
      yield put(Notification.notificationShow(response.data));
      yield put(User.userUpdateAll(response.data));
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

  console.tron.log(response);

  yield put(Ux.uxLoadingFalse());
}
