import { takeLatest } from 'redux-saga/effects';

/* Types */
import { Types as LoginTypes } from 'redux/ducks/login';
import { Types as UserTypes } from 'redux/ducks/user';

/* Sagas */
import { loginPhoneCheck, loginRequest, loginRequestRegister } from 'redux/sagas/login';
import { userUpdateRequest } from 'redux/sagas/user';

/* Chamadas */
export default function* root() {
  yield [
  	/* Login */
    takeLatest(LoginTypes.LOGIN_PHONE_CHECK, loginPhoneCheck),
    takeLatest(LoginTypes.LOGIN_REQUEST, loginRequest),
    takeLatest(LoginTypes.LOGIN_REQUEST_REGISTER, loginRequestRegister),

    /* User */
    takeLatest(UserTypes.USER_UPDATE_REQUEST, userUpdateRequest),
  ];
}