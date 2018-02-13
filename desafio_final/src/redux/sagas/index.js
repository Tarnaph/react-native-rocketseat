import { takeLatest } from 'redux-saga/effects';

/* Types */
import { Types as UserTypes } from 'redux/ducks/user';

/* Sagas */
import { findPhone, isRegistered } from 'redux/sagas/user';

export default function* root() {
  yield [
    takeLatest(UserTypes.USER_FIND_PHONE, findPhone),
  ];
}