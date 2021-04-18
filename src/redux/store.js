import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

//Set up a middlwares constant that will hold an array of all middlwares we want to apply to our application
const middlewares = [logger];

//setup the store by calling the createstore functions which take the rootReducer and applyMiddleware function which we pass into it all the middlewares we want to use by spreading them as param for this function
const store = createStore(rootReducer,applyMiddleware(...middlewares));

export default store;
