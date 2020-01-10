import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import servicesReducer from './reducers/servicesReducer';
import productsReducer from './reducers/productsReducer';

const reducers = combineReducers({
    services: servicesReducer,
    products: productsReducer
});

export const store = createStore(reducers, applyMiddleware(thunk));