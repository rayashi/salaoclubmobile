import {takeLatest, all} from 'redux-saga/effects';

import {getStoresAsync} from '../pages/search/SearchSagas';
import {getServicesAsync} from '../pages/store/StoreSagas';

export default function* rootSagas() {
  yield all([
    takeLatest('GET_STORES', getStoresAsync),
    takeLatest('GET_SERVICES', getServicesAsync),
  ]);
}
