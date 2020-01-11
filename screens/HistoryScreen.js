import React, { Component } from 'react'
import { Text } from 'react-native';

export default class HistoryScreen extends Component {

  static navigationOptions = (e) => {
    return {
      title: 'Mon historique'
    }
  }

  render() {
    return (
      <Text>HistoryScreen</Text>
    )
  }
}
