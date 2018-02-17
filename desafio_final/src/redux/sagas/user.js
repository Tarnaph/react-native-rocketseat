import api from 'services/api';
import { call, put } from 'redux-saga/effects';
import ActionsCreatorsUser from 'redux/ducks/user';
import ActionsCreatorsNotification from 'redux/ducks/notification';
import ActionsCreatorsUX from 'redux/ducks/ux';

export function* findPhone(action) {
  yield put(ActionsCreatorsUX.uxLoadingTrue());
  const response = yield call(api.get, `/user/find/${action.phone}`);
  if (response.ok) {
    yield put(ActionsCreatorsUX.uxLoadingFalse());
    yield put(ActionsCreatorsUser.userIsRegistered(response.ok, action.phone));
  } else {
    yield put(ActionsCreatorsUX.uxLoadingFalse());
    yield put(ActionsCreatorsNotification.notificationShow(response.data));
  }
}

export function* loginRequest(action) {
  const response = yield call(
    api.post, '/user/login', { phone: action.phone, password: action.password });
  if (response.ok) {
    yield put(ActionsCreatorsUser.userIsAuthorized(response.data));
  } else {
    yield put(ActionsCreatorsNotification.userNotAuthorized(response.data));
  }
}

export function* requestRegister(action) {
  const response = yield call(
    api.post, '/user/register', { phone: action.phone, name: action.name, password: action.password });
  if (response.ok) {
    yield put(ActionsCreatorsUser.userRegisterAuthorized(response.data));
  } else {
    yield put(ActionsCreatorsUser.userRegisterNotAuthorized(response.data));
  }
}
