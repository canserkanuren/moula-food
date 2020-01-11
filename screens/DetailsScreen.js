import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import FoodService from '../services/FoodService'
import { nutriscore, novascore } from '../constant/constant';

export default class DetailsScreen extends Component {
  state = { produit: {}, imageUrl: '' }
  foodService = new FoodService();

  componentDidMount() {
    if (this.props.navigation.state.params.codebarre) {
      this.foodService.get(this.props.navigation.state.params.codebarre)
        .then((data) => {
          this.setState({ produit: data, imageUrl: nutriscore(data.nutriscore), novaScore: novascore(data.novaGroup)});
          console.log(data);
        })
    }
  }

  render() {
    return (
      <View style={{ margin: 10}}>
        <Image
          style={{ width: 100, height: 200, borderRadius: 5, margin: 3, resizeMode: 'stretch' }}
          source={{ uri: this.state.produit.imageUrl }}
        />
        <Text>{this.state.produit.name}</Text>
        <Text>{this.state.produit.brands}</Text>
        {
          this.state.imageUrl ? (
          <Image
            style={{ width: 150, height: 90, borderRadius: 5, margin: 3, resizeMode: 'stretch'}}
            source={this.state.imageUrl}
          />) : (<></>)
        }
        {
          this.state.novaScore ? (
          <Image
            style={{ width: 50, height: 100, borderRadius: 5, margin: 3, resizeMode: 'stretch'}}
            source={this.state.novaScore}
          />) : (<></>)
        }
      </View>
    )
  }
}
