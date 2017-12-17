import { takeLatest } from 'redux-saga/effects';
import { Types as FavoritesTypes } from 'redux/ducks/favorites';
import { searchAndAddRepository } from 'redux/sagas/favorites';
import { Types as IssuesTypes } from 'redux/ducks/issues';
import { searchAndAddIssues } from 'redux/sagas/issues';

export default function* root() {
  yield [
    takeLatest(FavoritesTypes.SEARCH, searchAndAddRepository),
    takeLatest(IssuesTypes.SEARCH, searchAndAddIssues),
  ];
}
