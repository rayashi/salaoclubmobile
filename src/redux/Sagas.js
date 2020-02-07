import { takeLatest, all } from 'redux-saga/effects';

import { getStoresAsync } from '../pages/search/SearchSagas';

export default function* rootSagas() {
  yield all([
    takeLatest('GET_STORES', getStoresAsync)
  ]);
}