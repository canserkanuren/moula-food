import React, { Component } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loading from '../components/common/Loading';

import { initShoppingList, clearShoppingList, delFromShoppingList } from '../redux/actions/shoppingActions';
import ProductListItem from '../components/common/ProductListItem';
import InfoCard from '../components/common/InfoCard';

import historyStyle from '../assets/styles/historyStyle';
import ScannerButton from '../components/common/ScannerButton';


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
    this.props.shopping.remove(product);
  }

  componentDidMount = async () => {
    await this.props.shopping.init();
  }

  render() {


    return (
      <ScannerButton navigation={this.props.navigation}>
        <SafeAreaView style={historyStyle.container}>
          {this.props.shoppingProducts ? (
            <>
              {this.props.shoppingProducts.length > 0 ? (
                <FlatList
                  data={this.props.shoppingProducts}
                  keyExtractor={item => item.barcode}
                  renderItem={({ item }) => <ProductListItem product={item} swippedPressFunc={this.removeFromShoppingList} pressFunc={this.navigateToDetails} />}
                />
              ) : (
                  <InfoCard text={'Aucun produit en favoris'}/>
                )}
            </>
          ) : (
              <Loading displayColor="teal" />
            )}
        </SafeAreaView>
      </ScannerButton>
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
