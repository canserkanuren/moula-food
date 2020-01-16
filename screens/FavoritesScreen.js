import React, { Component } from 'react'
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { initShoppingList, clearShoppingList, delFromShoppingList } from '../redux/actions/shoppingActions';

class FavoritesScreen extends Component {

  componentDidMount() {
    this.props.shopping.init();
  }

  render() {
    return (
      <Text>FavoritesScreen</Text>
    )
  }
}

const mapStateToProps = (stateStore) => {
  return {
    shoppingProducts: stateStore.products.shopping.shoppingProducts,
  }
}

const mapActionsToProps = (barcode) => {
  return {
    shopping: {
      init: bindActionCreators(initShoppingList, barcode),
      clear: clearShoppingList(clearShoppingList, barcode),
      remove: bindActionCreators(delFromShoppingList, barcode)
    }
  }
}

export default connect(mapStateToProps, mapActionsToProps)(FavoritesScreen);
