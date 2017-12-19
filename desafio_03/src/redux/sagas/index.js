import { takeLatest } from 'redux-saga/effects';
import { Types as ModalTypes } from 'redux/ducks/modal';
import { searchAndAddMarker } from 'redux/sagas/modal';

export default function* root() {
  yield [
    takeLatest(ModalTypes.SEARCH, searchAndAddMarker),
  ];
}
