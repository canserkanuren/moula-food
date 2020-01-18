import React from 'react';
import Icon from "react-native-vector-icons/Ionicons";

import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from '../screens/SearchScreen';
import HistoryScreen from '../screens/HistoryScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ScannerScreen from '../screens/ScannerScreen';
import DetailsScreen from '../screens/DetailsScreen';


const searchNavigator = createStackNavigator(
  {
    Search: { screen: SearchScreen },
    Scanner: { screen: ScannerScreen },
    Detail: { screen: DetailsScreen, path: 'detail' }
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'teal',
        color: 'white'
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'white'
      },
      headerBackTitle: 'Retour',
      headerBackTitleStyle: {
        color: 'white'
      }
    }
  });

const historyNavigator = createStackNavigator(
  {
    History: { screen: HistoryScreen },
    Scanner: { screen: ScannerScreen },
    Detail: { screen: DetailsScreen, path: 'detail' }
  },
  {
    initialRouteName: 'History',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'teal'
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'white'
      },
      headerBackTitle: 'Retour',
      headerBackTitleStyle: {
        color: 'white'
      }
    }
  });

const favoritesNavigator = createStackNavigator(
  {
    Favorites: { screen: FavoritesScreen },
    Scanner: { screen: ScannerScreen },
    Detail: { screen: DetailsScreen, path: 'detail' }
  },
  {
    initialRouteName: 'Favorites',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'teal'
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'white'
      },
      headerBackTitle: 'Retour',
      headerBackTitleStyle: {
        color: 'white'
      }
    }
  })

const tabNavigator = createMaterialBottomTabNavigator(
  {
    Search: {
      screen: searchNavigator,
      
      navigationOptions: {
        tabBarLabel: 'Recherche',
        tabBarIcon: ({ tintColor }) => (
          <Icon color={tintColor} size={25} name={'ios-search'} />
        ),
        barStyle: { backgroundColor: 'teal' }
      }
    },
    History: {
      screen: historyNavigator,
      path:'recherche',
      navigationOptions: {
        tabBarLabel: 'Historique',
        tabBarIcon: ({ tintColor }) => (
          <Icon color={tintColor} size={25} name={'ios-clock'} />
        ),
        barStyle: { backgroundColor: 'teal' }
      }
    },
    Favorites: {
      screen: favoritesNavigator,
      navigationOptions: {
        tabBarLabel: 'Favoris',
        tabBarIcon: ({ tintColor }) => (
          <Icon color={tintColor} size={25} name={'ios-star'} />
        ),
        barStyle: { backgroundColor: 'teal' },
      }
    }
  },
  {
    initialRouteName: 'Search'
  }
);

export default createAppContainer(tabNavigator);
