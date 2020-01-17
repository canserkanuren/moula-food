import React, { useState, useEffect, Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToHistoryScanList } from '../redux/actions/historyActions';
import FoodService from '../services/FoodService';
import { addToHistoryScanList } from '../redux/actions/historyActions';

class ScannerScreen extends Component {
  foodService = new FoodService();
  static navigationOptions = (e) => {
    return {
      title: 'Scanner un produit',
      headerTitleStyle: {
        color: 'white'
      }
    }
  }

  state = { granted: false, scanned: false }

  async componentDidMount() {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    this.setState({ granted: status });
  }

  handleBarCodeScanned = async ({ type, data }) => {

    // 32 => Android
    // org.gs1.EAN-13 => iOS
    if (type === 'org.gs1.EAN-13' || type === 32) {
      this.setState({ scanned: true })
      if (this.state.scanned == true) {
        const food = await this.foodService.get(data);
        await this.props.products.add(data);
        this.props.navigation.navigate('Detail', { food });
      }
    }
  };

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
        {!this.state.granted ? (
          <Text>Veuillez activer l'accès à la caméra.</Text>
        ) : (
            <BarCodeScanner
              onBarCodeScanned={this.handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
            />
          )}
      </View>
    );
  }
}

mapActionsToProps = (barcode) => {
  return {
    products: {
      add: bindActionCreators(addToHistoryScanList, barcode)
    }
  }
}

export default connect(null, mapActionsToProps)(ScannerScreen);