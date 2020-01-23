import React, { Component } from 'react'
import { Text, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import ScannerButton from '../components/common/ScannerButton';
import FoodService from '../services/FoodService';
import SearchListItem from '../components/common/SearchListItem';
import Loading  from '../components/common/Loading';
export default class SearchScreen extends Component {
  foodService = new FoodService();
  state = {
    search: '',
    products: []
  };

  updateSearch = async search => {
    var data = [];
    if (search) {
      data = await this.foodService.search(search);
    }
    this.setState({ search: search, products: data});
  };

  static navigationOptions = (e) => {
    return {
      title: 'Rechercher un produit'
    }
  }

  navigateToDetails = (product) => {
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
          returnKeyType={'search'}
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
                  <Text>Aucun produit</Text>
                )}

            </>
          ) : (
              <Loading displayColor="teal" />
            )}
      </ScannerButton>
    )
  }
}
