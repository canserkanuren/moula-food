import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import servicesReducer from './reducers/servicesReducer';
import productsReducer from './reducers/productsReducer';
import shoppingReducer from './reducers/shoppingReducer';

const reducers = combineReducers({
  services: servicesReducer,
  products: combineReducers({
    general: productsReducer,
    shopping: shoppingReducer
  })
});

export const store = createStore(reducers, applyMiddleware(thunk));