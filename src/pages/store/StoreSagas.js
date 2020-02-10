import {all, call, put} from 'redux-saga/effects';
import Config from 'react-native-config';

import api from '../../shared/Api';

import {getStoreInfoSuccess, getStoreInfoFailed} from './StoreActions';

const fetchServices = async storeId => {
  let params = {
    salao: storeId,
    removido: 'False',
    ativo: 'True',
  };
  const response = await api.get('/servicos', {params});
  return response.data;
};

const fetchProfessionals = async storeId => {
  let params = {
    salao: storeId,
    removido: 'False',
    ativo: 'True',
  };
  const response = await api.get('/profissionais', {params});
  return response.data;
};

export function* getStoreInfoAsync(action) {
  try {
    let [services, professionals] = yield all([
      call(fetchServices, action.payload),
      call(fetchProfessionals, action.payload),
    ]);
    services = formattServices(services);
    professionals = formatProfessionals(professionals);
    yield put(getStoreInfoSuccess({services, professionals}));
  } catch (e) {
    console.log(e);
    yield put(getStoreInfoFailed());
  }
}

const formatProfessionals = profs => {
  return profs.map(prof => ({
    ...prof,
    avatar:
      prof.fotos.length > 0 &&
      `${Config.API_URL.split('api')[0]}media/${prof.fotos[0].image_small}`,
  }));
};

const formattServices = services => {
  return services.map(service => {
    let result = {
      ...service,
      preco: parseFloat(service.preco),
      formattedPrice: `R$ ${service.preco.replace('.', ',')}`,
    };

    if (service.fidel_resgate && service.fidel_acumula) {
      result.rewardMsg = `A cada ${service.fidel_resgate /
        service.fidel_acumula} você ganha 1`;
    }
    return result;
  });
};
