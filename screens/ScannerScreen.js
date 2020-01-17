import React, { useState, useEffect, Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FoodService from '../services/FoodService';
import { addToHistoryScanList } from '../redux/actions/historyActions';

function ScannerScreen(props) {
  const foodService = new FoodService();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    const food = await foodService.get(data);
    await props.products.add(data);
    props.navigation.navigate('Detail', { food });
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
        onTouchEndCapture={handleBarCodeScanned}
      />
    </View>
  );
}

ScannerScreen.navigationOptions = (e) => {
  return {
    title: 'Scanner un produit',
    headerTitleStyle: {
      color: 'white'
    }
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