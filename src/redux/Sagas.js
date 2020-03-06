import {takeLatest, all} from 'redux-saga/effects';

import {getStoresAsync} from '../pages/search/SearchSagas';
import {getStoreInfoAsync} from '../pages/store/StoreSagas';
import {getAvailableTimesAsync} from '../pages/timepicker/TimePickerSagas';
import {
  loginAsync,
  startInitialLoadAsync,
  logoutAsync,
} from '../pages/auth/AuthSagas';
import {bookAsync} from '../pages/checkout/CheckoutSagas';

export default function* rootSagas() {
  yield all([
    takeLatest('GET_STORES', getStoresAsync),
    takeLatest('GET_STORE_INFO', getStoreInfoAsync),
    takeLatest('GET_AVAILABLE_TIMES', getAvailableTimesAsync),
    takeLatest('LOGIN', loginAsync),
    takeLatest('LOGOUT', logoutAsync),
    takeLatest('START_INITIAL_LOAD', startInitialLoadAsync),
    takeLatest('BOOK', bookAsync),
  ]);
}
