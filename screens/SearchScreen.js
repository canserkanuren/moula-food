import React, { Component } from 'react'
import { Text, View } from 'react-native';
import ScannerButton from '../components/common/ScannerButton';

export default class SearchScreen extends Component {
  static navigationOptions = (e) => {
    return {
      title: 'Rechercher un produit'
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScannerButton navigation={this.props.navigation}>
          <Text>Bonjour</Text>
        </ScannerButton>
      </View>
    )
  }
}
