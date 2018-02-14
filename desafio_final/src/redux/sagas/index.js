import { takeLatest } from 'redux-saga/effects';

/* Types */
import { Types as UserTypes } from 'redux/ducks/user';

/* Sagas */
import { findPhone, requestLogin, requestRegister } from 'redux/sagas/user';

export default function* root() {
  yield [
    takeLatest(UserTypes.USER_FIND_PHONE, findPhone),
    takeLatest(UserTypes.USER_REQUEST_LOGIN, requestLogin),
    takeLatest(UserTypes.USER_REQUEST_REGISTER, requestRegister),
  ];
}