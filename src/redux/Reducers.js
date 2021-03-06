import {combineReducers} from 'redux';

import SearchReducer from '../pages/search/SearchReducer';
import StoreReducer from '../pages/store/StoreReducer';
import CheckoutReducer from '../pages/checkout/CheckoutReducer';
import TimePickerReducer from '../pages/timepicker/TimepickerReducer';
import AuthReducer from '../pages/auth/AuthReducer';

export default combineReducers({
  SearchReducer,
  StoreReducer,
  CheckoutReducer,
  TimePickerReducer,
  AuthReducer,
});
