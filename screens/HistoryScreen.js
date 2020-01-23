import React, { Component } from 'react'
import { SafeAreaView, ScrollView, View, Image, Text, AsyncStorage } from 'react-native';
import ProductCard from '../components/common/ProductCard.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loading from '../components/common/Loading';

import { initHistorySearchList, clearHistorySearchList, delFromHistorySearchList } from '../redux/actions/historyActions';
import { initHistoryScanList, clearHistoryScanList, delFromHistoryScanList } from '../redux/actions/historyActions';

import historyStyle from '../assets/styles/historyStyle';
import ScannerButton from '../components/common/ScannerButton';

class HistoryScreen extends Component {

  state = {
    historyProducts: null
  }

  static navigationOptions = (e) => {
    return {
      title: 'Mon historique'
    }
  }

  navigateToDetails = (product) => {
    this.props.navigation.navigate('Detail', { food: product });
  }

  componentDidUpdate() {
    // TODO --> factoriser avec DidMount
    // TODO + vérifier que l'élement n'a pas déjà été chargé dans redux
    // this.props.history.scanned.init();
  }

  componentDidMount = async () => {

    this.setHistoryProducts();

    this.eventListener = this.props.navigation.addListener('willFocus', () => {
      this.setHistoryProducts();
    });

  }

  setHistoryProducts = async () => {
    await this.props.history.scanned.init();
    const scanned = this.props.products.scanned;
    await this.props.history.searched.init();
    const searched = this.props.products.searched;
    const historyProducts = scanned.concat(searched);
    this.setState({ historyProducts: historyProducts });
  }

  render() {

    return (
      <ScannerButton navigation={this.props.navigation}>
        <SafeAreaView style={historyStyle.container}>
          {this.state.historyProducts ? (
            <View>
              {
                this.state.historyProducts.length > 0 ? (
                  <ScrollView style={historyStyle.scrollView}>
                    <View style={historyStyle.flexContainer}>
                      {
                        this.state.historyProducts.map((item, key) =>
                          <ProductCard product={item} key={item.barcode} pressFunc={this.navigateToDetails} />
                        )
                      }
                    </View>
                  </ScrollView>
                ) : (
                    <Text>Aucun historique disponible</Text>
                  )}
            </View>
          ) : (
              <Loading displayColor="teal" />
            )}
        </SafeAreaView >
      </ScannerButton>
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
