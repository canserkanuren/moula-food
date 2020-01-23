import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import ScannerButton from '../components/common/ScannerButton';
import FoodService from '../services/FoodService';
export default class SearchScreen extends Component {
  foodService = new FoodService();
  state = {
    search: '',
  };

  updateSearch = async search => {
    if (search && search.length > 3) {
      const data = await this.foodService.search(search);
      console.log('data', data);
    }
    this.setState({ search });
  };

  static navigationOptions = (e) => {
    return {
      title: 'Rechercher un produit'
    }
  }

  render() {
    const { search } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <ScannerButton navigation={this.props.navigation}>
        <SearchBar
        lightTheme={false}
        round={true}
        placeholder="Tous les produits"
        returnKeyType={'search'}
        onChangeText={this.updateSearch}
        value={search}
      />
        </ScannerButton>
      </View>
    )
  }
}
