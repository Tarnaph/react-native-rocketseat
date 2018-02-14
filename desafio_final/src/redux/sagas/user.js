import api from 'services/api';
import { call, put } from 'redux-saga/effects';
import ActionsCreators from 'redux/ducks/user';

export function* findPhone(action) {
  const response = yield call(api.get, `/user/find/${action.phone}`);
  yield put(ActionsCreators.userIsRegistered(response.ok, action.phone));
}

export function* requestLogin(action) {
  const response = yield call(
    api.post, '/user/login', { phone: action.phone, password: action.password });
  if (response.ok) {
    yield put(ActionsCreators.userIsAuthorized(response.data));
  } else {
    yield put(ActionsCreators.userNotAuthorized(response.data));
  }
}

export function* requestRegister(action) {
  const response = yield call(
    api.post, '/user/register', { phone: action.phone, name: action.name, password: action.password });
  if (response.ok) {
    yield put(ActionsCreators.userRegisterAuthorized(response.data));
  } else {
    yield put(ActionsCreators.userRegisterNotAuthorized(response.data));
  }
}
