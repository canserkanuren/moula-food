import React from 'react';
import Icon from "react-native-vector-icons/Ionicons";

import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import SearchScreen from '../screens/SearchScreen';
import HistoryScreen from '../screens/HistoryScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const tabNavigator = createMaterialBottomTabNavigator(
  {
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarLabel: 'Accueil',
        tabBarIcon: ({ tintColor }) => (
          <Icon color={tintColor} size={25} name={'ios-home'} />
        ),
        barStyle: { backgroundColor: 'black' }
      }
    },
    History: {
      screen: HistoryScreen,
      navigationOptions: {
        tabBarLabel: 'Paramètres',
        tabBarIcon: ({ tintColor }) => (
          <Icon color={tintColor} size={25} name={'ios-settings'} />
        ),
        barStyle: { backgroundColor: 'teal' }
      }
    },
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: {
        tabBarLabel: 'Favoris',
        tabBarIcon: ({ tintColor }) => (
          <Icon color={tintColor} size={25} name={'ios-star'} />
        ),
        barStyle: { backgroundColor: 'teal' }
      }
    }
  },
  {
    initialRouteName: 'Search'
  }
);

export default createAppContainer(tabNavigator);