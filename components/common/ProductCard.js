import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import historyStyle from '../../assets/styles/historyStyle.js';

export default class ProductCard extends Component {
  static propTypes = {
    product: PropTypes.object
  };

  render() {
    const productBarcode = this.props.product.barcode;
    const productName = this.props.product.name || '';
    const productBrand = this.props.product.brand || '';
    const productQuality = this.props.product.quality || '';

    return (
      <View style={historyStyle.itemCard}>
        <Image
          style={historyStyle.itemImage}
          source={{
            uri: 'https://static.openfoodfacts.org/images/products/325/622/351/0032/front_fr.29.full.jpg'
          }}
        />
        <Text style={historyStyle.itemName}> {productName} </Text>
        <Text style={historyStyle.itemBrand}> {productBrand} </Text>
        <Text style={historyStyle.itemQuality}> {productQuality} </Text>
      </View>
    );
  }
}
