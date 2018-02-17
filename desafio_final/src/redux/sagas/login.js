/* Presentational */
import api from 'services/api';
import { call, put } from 'redux-saga/effects';

/* Actions */
import Ux from 'redux/ducks/ux';
import User from 'redux/ducks/user';
import Login from 'redux/ducks/login';
import Notification from 'redux/ducks/notification';

/* Verifica o número do celular */
export function* loginPhoneCheck(action) {
  yield put(Ux.uxLoadingTrue());

  const response = yield call(api.get, `/user/find/${action.phone}`);

  switch (response.status) {
    case 200:
      yield put(Notification.notificationShow(response.data));
      yield put(User.userUpdatePhone(action.phone));
      yield put(Login.loginPhoneSuccess());
      break;
    case 400:
      yield put(Notification.notificationShow(response.data));
      break;
    case 404:
      yield put(Notification.notificationShow(response.data));
      yield put(User.userUpdatePhone(action.phone));
      yield put(Login.loginPhoneFailure());
      break;
    default:
      yield put(Notification.notificationShow(response.data));
  }

  yield put(Ux.uxLoadingFalse());
}

/* Request para Login */
export function* loginRequest(action) {

  yield put(Ux.uxLoadingTrue());

  const response = yield call(api.post, '/user/login', { phone: action.phone, password: action.password });

  switch (response.status) {
    case 200:
      yield put(Notification.notificationShow(response.data));
      yield put(User.userUpdateAll(response.data));
      yield put(Login.loginRequestSuccess());
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
}

/* Request para Registar */
export function* loginRequestRegister(action) {

  yield put(Ux.uxLoadingTrue());

  const response = yield call(api.post, '/user/register', { phone: action.phone, name: action.name, password: action.password });

  switch (response.status) {
    case 201:
      yield put(Notification.notificationShow(response.data));
      yield put(User.userUpdateAll(response.data));
      yield put(Login.loginRequestSuccess());
      break;
    case 400:
      yield put(Notification.notificationShow(response.data));
      break;
    default:
      yield put(Notification.notificationShow(response.data));
  }
  yield put(Ux.uxLoadingFalse());
}
