import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import servicesReducer from './reducers/servicesReducer';
import productsReducer from './reducers/productsReducer';
import shoppingReducer from './reducers/shoppingReducer';
import historyReducer from './reducers/historyReducer';

const reducers = combineReducers({
  services: servicesReducer,
  products: combineReducers({
    general: productsReducer,
    shopping: shoppingReducer,
    history: historyReducer
  })
});

export const store = createStore(reducers, applyMiddleware(thunk));