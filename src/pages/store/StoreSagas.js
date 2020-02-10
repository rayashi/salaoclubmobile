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
  return response.data;
};

export function* getServicesAsync(action) {
  try {
    let services = yield call(fetchServices, action.payload);
    services = formattServices(services);
    yield put(getServicesSuccess(services));
  } catch (e) {
    console.log(e);
    yield put(getServicesFailed());
  }
}

formattServices = services => {
  return services.map(service => {
    let result = {
      ...service,
      preco: parseFloat(service.preco),
      formattedPrice: `R$ ${service.preco.replace('.', ',')}`,    
    }
    
    if(service.fidel_resgate && service.fidel_acumula){
      result.rewardMsg = `A cada ${service.fidel_resgate/service.fidel_acumula} você ganha 1`;
    }
    return result;
  });
}