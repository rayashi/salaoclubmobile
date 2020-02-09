import {call, put} from 'redux-saga/effects';

import api from '../../shared/Api';

import {getServicesSuccess, getServicesFailed} from './StoreActions';

const fetchServices = async storeId => {
  let params = {
    salao: storeId,
    removido: 'False',
    ativo: 'True',
  };
  const response = await api.get('/servicos', {params});
  console.log(response.data);
  return response.data;
};

export function* getServicesAsync(action) {
  try {
    const services = yield call(fetchServices, action.payload);
    yield put(getServicesSuccess(services));
  } catch (e) {
    console.log(e);
    yield put(getServicesFailed());
  }
}
