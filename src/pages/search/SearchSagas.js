import {call, put} from 'redux-saga/effects';
import Config from 'react-native-config';
import axios from 'axios';

import {getStoresSuccess, getStoresFailed} from './SearchActions';

const fetchStores = async () => {
  const params = {
    destaque: 'True',
    ativo: 'True',
    noar: 'True',
    page_size: 100,
  };
  const response = await axios.get('/saloes', {params});
  const {data} = await axios.get('/fotos', {params: {avatar: 'True'}});
  return response.data.results.map(store => ({
    ...store,
    avatar: `${Config.API_URL.split('api')[0]}media/${
      data.find(a => a.salao === store.id).image_small
    }`,
  }));
};

export function* getStoresAsync() {
  try {
    const stores = yield call(fetchStores);
    yield put(getStoresSuccess(stores));
  } catch (e) {
    console.log(e);
    yield put(getStoresFailed());
  }
}
