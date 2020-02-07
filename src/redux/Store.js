import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reducers from './Reducers';
import rootSagas from './Sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(Reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSagas);

export default store;
