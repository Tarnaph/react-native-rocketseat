import { takeLatest } from 'redux-saga/effects';

/* Types */
import { Types as CategoriesTypes } from 'redux/ducks/categories';
import { Types as ProductsTypes } from 'redux/ducks/products';

/* Sagas */
import { getCategories } from 'redux/sagas/categories';
import { getProducts } from 'redux/sagas/products';

export default function* root() {
  yield [
    takeLatest(CategoriesTypes.CATEGORIES_REQUEST, getCategories),
    takeLatest(ProductsTypes.PRODUCTS_REQUEST, getProducts),
    takeLatest(ProductsTypes.PRODUCTS_REFRESH, getProducts),
  ];
}
