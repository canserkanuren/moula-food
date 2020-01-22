import React, { Component } from 'react';
import { View } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes, { array } from 'prop-types';
import { initShoppingList } from '../../redux/actions/shoppingActions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class FavoriteButton extends Component {

  state = { fav: false }

  static propTypes = {
    product: PropTypes.object,
    addFunc: PropTypes.func,
    rmvFunc: PropTypes.func
  };

  changeState = async (product) => {

    if (this.state.fav == true) {
      await this.props.rmvFunc(product);
    } else {
      await this.props.addFunc(product);
    }
    this.setState({ fav: !this.state.fav });
  }

  componentDidMount = async () => {
    await this.props.shopping.init();
    const findState = !!this.props.shoppingProducts.find(element => element.barcode === this.props.product.barcode);

    this.setState({ fav: findState });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* Rest of the app comes ABOVE the action button component !*/}
        {this.props.children}
        <ActionButton
          buttonColor="#EFEFEF"
          title="Open Scanner"
          onPress={() => this.changeState(this.props.product)}
          renderIcon={() => (<Icon raised
            style={{ paddingTop: 4 }}
            name={this.state.fav ? 'ios-heart' : 'ios-heart-empty'}
            size={30}
            color="#E63950" />)}>
        </ActionButton>
      </View>
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
    }
  }
}

export default connect(mapStateToProps, mapActionsToProps)(FavoriteButton);

