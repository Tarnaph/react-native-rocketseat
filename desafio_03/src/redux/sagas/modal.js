import api from 'services/api';
import { Types } from 'redux/ducks/modal';
import { call, put } from 'redux-saga/effects';

export function* searchAndAddMarker(action) {
  yield put({ type: Types.LOADING });
  const { latitude, longitude } = action.payload.marker.local;
  const response = yield call(api.get, `/users/${action.payload.marker.user}`);
  if (response.ok) {
    yield put({ type: Types.ADD, payload: { marker: { user: response.data, local: { latitude, longitude } }} }) }
  else {
    yield put({ type: Types.ERROR });
  };
}
