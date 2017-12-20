import api from 'services/api';
import { Types } from 'redux/ducks/modal';
import { call, put } from 'redux-saga/effects';

export function* searchAndAddMarker(action) {
  yield put({ type: Types.LOADING });
  const response = yield call(api.get, `/users/${action.payload.marker.user}`);
  const { latitude, longitude } = action.payload.marker.local;
  switch (response.status) {
    case 200:
      yield put({ type: Types.ADD, payload: { marker: { user: response.data, local: { latitude, longitude } } } });
      break;
    case 404:
      yield put({ type: Types.ERROR404 });
      break;
    default:
      yield put({ type: Types.ERROR });
  }
}
