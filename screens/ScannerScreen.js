import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addProduct } from '../redux/actions/productsActions';

function ScannerScreen(props) {
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
    await props.products.add(data);
    props.navigation.navigate('Detail', { codebarre: data });
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
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
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
      add: bindActionCreators(addProduct, barcode)
    }
  }
}


export default connect(null, mapActionsToProps)(ScannerScreen);