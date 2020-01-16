import React, { Component } from 'react';
import { Text } from 'react-native';

export default class FavoritesScreen extends Component {

  static navigationOptions = (e) => {
    return {
      title: 'Mes favoris'
    }
  }

  render() {
    return (
      <Text>FavoritesScreen</Text>
    )
  }
}
