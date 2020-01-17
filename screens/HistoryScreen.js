import React, { Component } from 'react'
import { SafeAreaView, ScrollView, View, Image, Text, AsyncStorage } from 'react-native';
import ProductCard from '../components/common/ProductCard.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { initHistorySearchList, clearHistorySearchList, delFromHistorySearchList } from '../redux/actions/historyActions';
import { initHistoryScanList, clearHistoryScanList, delFromHistoryScanList } from '../redux/actions/historyActions';

import historyStyle from '../assets/styles/historyStyle';

class HistoryScreen extends Component {

  state = {
    historyProducts: null
  }

  static navigationOptions = (e) => {
    return {
      title: 'Mon historique'
    }
  }

  componentDidUpdate() {
    // TODO --> factoriser avec DidMount
    // TODO + vérifier que l'élement n'a pas déjà été chargé dans redux
    // this.props.history.scanned.init();
  }

  componentDidMount= async () => {
    await this.props.history.scanned.init();
    this.setState({ historyProducts: this.props.products.scanned.concat(this.props.products.searched) });
    console.log(this.props.products)
  }

  render() {
    return (
      <SafeAreaView style={historyStyle.container}>
        {this.state.historyProducts ? (
          <View>
            {
              this.state.historyProducts.length > 0 ? (
                <ScrollView style={historyStyle.scrollView}>
                  <View style={historyStyle.flexContainer}>
                    {
                      this.state.historyProducts.map((item, key) =>
                        <ProductCard product={item} key={item.barcode} />
                      )
                    }
                  </View>
                </ScrollView>
              ) : (
                  <Text>Aucun historique disponible</Text>
                )}
          </View>
        ) : (
            // TODO : A Remplacer par un spinner
            <Text style={historyStyle.flexContainer}>
              Spinner
              </Text>
          )}
      </SafeAreaView >
    )
  }
}

const mapStateToProps = (stateStore) => {
  return {
    products: {
      searched: stateStore.products.history.searched,
      scanned: stateStore.products.history.scanned,
    }
  }
}

const mapActionsToProps = (barcode) => {
  return {
    history: {
      searched: {
        init: bindActionCreators(initHistorySearchList, barcode),
        clear: bindActionCreators(clearHistorySearchList, barcode),
        remove: bindActionCreators(delFromHistorySearchList, barcode)
      },
      scanned: {
        init: bindActionCreators(initHistoryScanList, barcode),
        clear: bindActionCreators(clearHistoryScanList, barcode),
        remove: bindActionCreators(delFromHistoryScanList, barcode)
      }
    }
  }
}

export default connect(mapStateToProps, mapActionsToProps)(HistoryScreen);
