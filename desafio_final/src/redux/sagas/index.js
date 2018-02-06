import { takeLatest } from 'redux-saga/effects';
import { Types as FavoritesTypes } from 'redux/ducks/favorites';
import { searchAndAddRepository } from 'redux/sagas/favorites';

export default function* root() {
  yield [
    takeLatest(FavoritesTypes.SEARCH, searchAndAddRepository),
  ];
}
