import {combineReducers} from 'redux';

import SearchReducer from '../pages/search/SearchReducer';
import StoreReducer from '../pages/store/StoreReducer';

export default combineReducers({
  SearchReducer,
  StoreReducer,
});
