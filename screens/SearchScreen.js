import React, { Component } from 'react'
import { FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import ScannerButton from '../components/common/ScannerButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToHistorySearchList } from '../redux/actions/historyActions';

import InfoCard from '../components/common/InfoCard';
import SearchListItem from '../components/common/SearchListItem';
import Loading  from '../components/common/Loading';
class SearchScreen extends Component {

  state = {
    search: '',
    products: []
  };

  updateSearch = async search => {
    var data = [];
    this.setState({ search: search })
    if (search) {
      data = await this.props.service.search(search);
      this.setState({ products: data });
    } else {
      this.setState({ products: data });
    }
  };

  static navigationOptions = (e) => {
    return {
      title: 'Rechercher un produit'
    }
  }

  navigateToDetails = async (product) => {
    await this.props.products.add(product.barcode);
    this.props.navigation.navigate('Detail', { food: product });
  }

  render() {
    const { search } = this.state;
    return (
        <ScannerButton navigation={this.props.navigation}>
          <SearchBar
          lightTheme={false}
          round={true}
          placeholder="Tous les produits"
          returnKeyType={'done'}
          onChangeText={this.updateSearch}
          value={search}
        />
          {this.state.products ? (
            <>
              {this.state.products.length > 0 ? (
                <FlatList
                  data={this.state.products}
                  keyExtractor={item => item.barcode}
                  renderItem={({ item }) => <SearchListItem product={item} key={item.barcode} pressFunc={this.navigateToDetails}  />}
                />
              ) : (
                  <InfoCard text={'Aucun résultats'}/>
                )}
            </>
          ) : (
              <Loading displayColor="teal" />
            )}
      </ScannerButton>
    )
  }
}

mapStateToProps = (stateStore) => {
  return {
    service: stateStore.services.foodService
  }
};

mapActionsToProps = (barcode) => {
  return {
    products: {
      add: bindActionCreators(addToHistorySearchList, barcode)
    }
  }
}

export default connect(mapStateToProps, mapActionsToProps)(SearchScreen);
