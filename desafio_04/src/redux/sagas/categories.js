import api from 'services/api';
import { call, put } from 'redux-saga/effects';
import ActionsCreators from 'redux/ducks/categories';

export function* getCategories() {
  const response = yield call(api.get, '/categories');
  if (response.ok) {
    yield put(ActionsCreators.categoriesSuccess(response.data));
  } else {
    yield put(ActionsCreators.categoriesFailure());
  }
}
