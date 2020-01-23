import React, { Component } from 'react';
import { View, Image, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import historyStyle from '../../assets/styles/historyStyle.js';

export default class ProductCard extends Component {

  static propTypes = {
    product: PropTypes.object,
    pressFunc: PropTypes.func
  };

  componentDidMount() {

  }

  render() {
    const productName = this.props.product.name || '';
    const productBrand = this.props.product.brands || '';
    const productQuality = this.props.product.nutriscore || '';
    const productImage = this.props.product.imageUrl || '';

    return (
      <TouchableHighlight style={historyStyle.itemCard}
        onPress={() => this.props.pressFunc(this.props.product)} >
        <View>
          <Image
            style={historyStyle.itemImage}
            source={{
              uri: `${productImage}`
            }}
          />
          <Text style={historyStyle.itemName}> {productName} </Text>
          <Text style={historyStyle.itemBrand}> {productBrand} </Text>
          <Text style={historyStyle.itemQuality}> {productQuality} </Text>
        </View >
      </TouchableHighlight>
    );
  }
}
