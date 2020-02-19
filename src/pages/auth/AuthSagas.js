import {call, put} from 'redux-saga/effects';
import axios from 'axios';

import '../../Storage.config';
import {setAuthHeaders} from '../../shared/Api';
import {loginSuccess, loginFailed} from './AuthActions';

const fetchlogin = async ({email, password}) => {
  const data = {username: email, password: password};
  const response = await axios.post('/api-token-auth', data);
  return response.data.token;
};

const fetchUser = async () => {
  const response = await axios.get('/parametros');
  return response.data;
};

export const fetchToken = async () => {
  const token = await storage.load({ key: 'token' });
  if(!token) throw 'No token';
  return token;
};

export const saveToken = async token => {
  await storage.save({key: 'token', data: token});
}

export function* loginAsync(action) {
  try {
    const token = yield call(fetchlogin, action.payload);
    yield saveToken(token);
    yield setAuthHeaders(token);
    const user = yield call(fetchUser, token);
    yield put(loginSuccess(user));
  } catch (e) {
    console.log(e);
    yield put(loginFailed());
  }
}

export function* startInitialLoadAsync() {
  try {
    console.log('start')
    const token = yield call(fetchToken);
    console.log(token)
    yield setAuthHeaders(token);
    const user = yield call(fetchUser, token);
    console.log(user)
    yield put(loginSuccess(user));  
  } catch (e) {
    console.log(e)
    yield put(loginFailed());
  }
}