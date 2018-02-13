import api from 'services/api';
import { call, put } from 'redux-saga/effects';
import ActionsCreators from 'redux/ducks/user';

export function* findPhone(action) {
  const response = yield call(api.get, `/user/find/${action.phone}`);
  yield put(ActionsCreators.userIsRegistered(response.ok));


  // console.tron.log(response);
  // if (response.ok) {
  //   yield put(ActionsCreators.userSuccess(response.data));
  // } else {
  //   yield put(ActionsCreators.userFailure());
  // }
}