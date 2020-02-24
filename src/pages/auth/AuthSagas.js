import {call, put} from 'redux-saga/effects';
import axios from 'axios';

import storage from '../../Storage.config';
import {setAuthHeaders} from '../../shared/Api';
import {
  loginSuccess,
  loginFailed,
  logoutSuccess,
  initialLoadFailed,
} from './AuthActions';

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
  const token = await storage.load({key: 'token'});
  if (!token) {
    throw 'No token';
  }
  return token;
};

export const saveToken = async token => {
  await storage.save({key: 'token', data: token});
};

const removeToken = async () => {
  await storage.remove({key: 'token'});
};

export function* loginAsync(action) {
  try {
    const token = yield call(fetchlogin, action.payload);
    yield saveToken(token);
    yield setAuthHeaders(token);
    const user = yield call(fetchUser);
    yield put(loginSuccess(user));
  } catch (e) {
    console.log(e);
    yield put(loginFailed());
  }
}

export function* startInitialLoadAsync() {
  try {
    const token = yield call(fetchToken);
    yield setAuthHeaders(token);
    const user = yield call(fetchUser, token);
    yield put(loginSuccess(user));
  } catch (e) {
    console.log(e);
    yield put(initialLoadFailed());
  }
}

export function* logoutAsync() {
  try {
    yield call(removeToken);
    yield setAuthHeaders(null);
    yield put(logoutSuccess());
  } catch (e) {
    yield put(loginFailed());
  }
}
