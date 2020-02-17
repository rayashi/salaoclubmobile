import {call, put} from 'redux-saga/effects';

import api, {setAuthHeaders} from '../../shared/Api';

import {loginSuccess, loginFailed} from './AuthActions';

const fetchlogin = async ({email, password}) => {
  const data = {username: email, password: password};
  const response = await api.post('/api-token-auth', data);
  return response.data.token;
};

const fetchUser = async token => {
  setAuthHeaders(token);
  const response = await api.post('/parametros', data);
  return response.data;
};



export function* loginAsync(action) {
  try {
    const token = yield call(fetchlogin, action.payload);
    yield put(loginSuccess(token));
    alert(token)
  } catch (e) {
    console.log(e);
    yield put(loginFailed());
  }
}
