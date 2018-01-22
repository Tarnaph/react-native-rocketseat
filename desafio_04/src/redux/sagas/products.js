import api from 'services/api';
import { call, put } from 'redux-saga/effects';
import ActionsCreators from 'redux/ducks/products';

export function* getProducts(action) {
  const response = yield call(api.get, `/category_products/${action.id}`);
  if (response.ok) {
    yield put(ActionsCreators.productsSuccess(response.data));
  } else {
    yield put(ActionsCreators.productsFailure());
  }
}
