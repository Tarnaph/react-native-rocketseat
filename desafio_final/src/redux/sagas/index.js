import { takeLatest } from 'redux-saga/effects';

/* Types */
import { Types as LoginTypes } from 'redux/ducks/login';

/* Sagas */
import { loginPhoneCheck, loginRequest, loginRequestRegister } from 'redux/sagas/login';

/* Chamadas */
export default function* root() {
  yield [
    takeLatest(LoginTypes.LOGIN_PHONE_CHECK, loginPhoneCheck),
    takeLatest(LoginTypes.LOGIN_REQUEST, loginRequest),
    takeLatest(LoginTypes.LOGIN_REQUEST_REGISTER, loginRequestRegister),
  ];
}