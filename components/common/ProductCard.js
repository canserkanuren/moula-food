import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import historyStyle from '../../assets/styles/historyStyle.js';

export default class ProductCard extends Component {
  static propTypes = {
    product: PropTypes.string
  };
  
  componentDidMount() {
    
  }

  render() {
    const productBarcode = this.props.product.barcode;
    const productName = this.props.product.name || '';
    const productBrand = this.props.product.brands || '';
    const productQuality = this.props.product.nutriscore || '';
    const productImage = this.props.product.imageUrl || '';

    return (
      <View style={historyStyle.itemCard}>
        <Image
          style={historyStyle.itemImage}
          source={{
            uri: `${productImage}`
          }}
        />
        <Text style={historyStyle.itemName}> {productName} </Text>
        {/* <Text style={historyStyle.itemBrand}> {productBrand} </Text> */}
        {/* <Text style={historyStyle.itemQuality}> {productQuality} </Text> */}
      </View>
    );
  }
}
