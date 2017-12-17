import api from 'services/api';
import { Types } from 'redux/ducks/issues';
import { call, put } from 'redux-saga/effects';

export function* searchAndAddIssues(action) {
  const response = yield call(api.get,`repos/${action.payload.repositoryName}/issues?state=all`);
  yield put({ type: Types.ADD, payload: { issues: response.data } });
}
