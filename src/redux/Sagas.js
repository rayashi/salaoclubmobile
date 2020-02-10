import {takeLatest, all} from 'redux-saga/effects';

import {getStoresAsync} from '../pages/search/SearchSagas';
import {getStoreInfoAsync} from '../pages/store/StoreSagas';

export default function* rootSagas() {
  yield all([
    takeLatest('GET_STORES', getStoresAsync),
    takeLatest('GET_STORE_INFO', getStoreInfoAsync),
  ]);
}
