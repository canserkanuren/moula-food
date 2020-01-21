import React, { Component } from 'react';
import { Text, SafeAreaView, ScrollView, View, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loading from '../components/common/Loading';

import { initShoppingList, clearShoppingList, addToShoppingList, delFromShoppingList } from '../redux/actions/shoppingActions';
import ProductListItem from '../components/common/ProductListItem';

import historyStyle from '../assets/styles/historyStyle';


class FavoritesScreen extends Component {

  static navigationOptions = (e) => {
    return {
      title: 'Mes favoris'
    }
  }

  navigateToDetails = (product) => {
    this.props.navigation.navigate('Detail', { food: product });
  }

  removeFromShoppingList = (product) => {
    this.props.shopping.remove(product.barcode);
  }

  componentDidMount = async () => {
    await this.props.shopping.init();
    // console.log(this.props.shoppingProducts)
  }

  render() {
    return (
      <SafeAreaView style={historyStyle.container}>
        {this.props.shoppingProducts ? (
          <View>
            {
              this.props.shoppingProducts.length > 0 ? (
                <ScrollView style={historyStyle.scrollView}>
                  <View style={historyStyle.flexContainer}>
                    {
                      this.props.shoppingProducts.map((item, key) => 
                        <ProductListItem product={item} key={item.barcode} swippedPressFunc={this.removeFromShoppingList} pressFunc={this.navigateToDetails} />
                      )
                    }
                  </View>
                </ScrollView>
              ) : (
                  <Text>Aucun produit en favoris</Text>
                )}
          </View>
        ) : ( 
          <Loading displayColor="teal"/>
          )}
      </SafeAreaView >
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
      clear: bindActionCreators(clearShoppingList, barcode),
      remove: bindActionCreators(delFromShoppingList, barcode)
    }
  }
}

export default connect(mapStateToProps, mapActionsToProps)(FavoritesScreen);
