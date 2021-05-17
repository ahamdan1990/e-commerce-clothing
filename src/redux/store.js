import {createStore, applyMiddleware} from 'redux';

import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { persistStore } from 'redux-persist';

// import { fetchCollectionStart } from './shop/shop.sagas';

import rootReducer from './root-reducer';

import rootSaga from './root-sagas';
const sagaMiddleware = createSagaMiddleware();

//Set up a middlwares constant that will hold an array of all middlwares we want to apply to our application
const middlewares = [/*thunk*/sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

//setup the store by calling the createstore functions which take the rootReducer and applyMiddleware function which we pass into it all the middlewares we want to use by spreading them as param for this function
export const store = createStore(rootReducer,applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga)

// We wrap our store with persisStore that we imported from redux-persist
export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default {store,persistor};