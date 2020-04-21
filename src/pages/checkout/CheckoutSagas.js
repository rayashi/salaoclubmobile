import {call, put} from 'redux-saga/effects';
import axios from 'axios';

import {bookSuccess, bookFailed} from './CheckoutActions';

const fetchBook = async ({item, user}) => {
  const headerData = {
    cliente: user.cliente.id,
    origem: 2,
    salao: item.store.id,
    vlr: 0,
    itens: [],
    status: 0,
  };
  const headerResponse = await axios.post('/compromissos', headerData);
  const itemData = {
    compromisso: headerResponse.data.id,
    inicio: item.time.apiTime,
    status: 0,
    profissional: item.professional.id,
    servico: item.service.id,
  };
  await axios.post('/itens', itemData);
};

export function* bookAsync(action) {
  try {
    yield call(fetchBook, action.payload);
    yield put(bookSuccess());
  } catch (e) {
    console.log(e);
    yield put(bookFailed());
  }
}
