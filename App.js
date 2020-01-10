import React from 'react';
import { Provider } from 'react-redux';
import MainTabNavigator from './navigation/MainTabNavigator';

import { store } from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <MainTabNavigator />
    </Provider>
  );
}
