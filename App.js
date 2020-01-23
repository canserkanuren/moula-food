import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MainTabNavigator from './navigation/MainTabNavigator';

import { store } from './redux/store';
import { Linking } from 'expo';
import FoodService from './services/FoodService';
import NavigationService from './services/NavigationService';

class App extends Component {
  foodService = new FoodService();

  componentDidMount() {
    Linking.addEventListener('url', async (url) => {
      const { queryParams } = await Linking.parseInitialURLAsync();
      if (queryParams.barcode) {
        const food = await this.foodService.get(queryParams.barcode);
        NavigationService.navigate('Detail', { food });
      }
    });
  }

  render() {
    return (
      <Provider store={store}>
        <MainTabNavigator ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }} />
      </Provider>
    );
  }
}

export default App;
