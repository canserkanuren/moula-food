import React, { useState, useEffect, Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToHistoryScanList } from '../redux/actions/historyActions';

class ScannerScreen extends Component {
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
    console.log('type', type);
    if (type !== 'org.iso.QRCode') {
      console.log('slt');
      this.setState({ scanned: true })
      if (this.state.scanned == true) {
        const food = await this.props.service.get(data);
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

mapStateToProps = (stateStore) => {
  return {
    service: stateStore.services.foodService
  }
};

mapActionsToProps = (barcode) => {
  return {
    products: {
      add: bindActionCreators(addToHistoryScanList, barcode)
    }
  }
}

export default connect(mapStateToProps, mapActionsToProps)(ScannerScreen);