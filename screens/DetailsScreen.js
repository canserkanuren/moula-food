import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
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
      <View style={Styles.container}>
        <View style={Styles.row}>
          <Image
            style={Styles.imageProduit}
            source={{ uri: this.state.produit.imageUrl }}
          />
          <View>
            <Text style={Styles.title}>{this.state.produit.name}</Text>
            <Text>{this.state.produit.brands}</Text>
          </View>
        </View>
        <View style={Styles.score}>
        {
          this.state.imageUrl ? (
          <Image
            style={Styles.nutriscore}
            source={this.state.imageUrl}
          />) : (<></>)
        }
        {
          this.state.novaScore ? (
          <Image
            style={Styles.novascore}
            source={this.state.novaScore}
          />) : (<></>)
        }
        </View>
      </View>
    )
  }
}
export const Styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    margin: 10
  },
  row: {
    flexDirection: 'row',
    margin: 0,
    padding: 0
  },
  imageProduit: {
    height: 130,
    width: 80,
    marginRight: 5,
    borderRadius: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20
  },
  nutriscore: {
    width: 150,
    height: 80,
    borderRadius: 5,
    margin: 3,
    resizeMode: 'stretch'
  },
  novascore: {
    width: 50,
    height: 80,
    borderRadius: 5,
    margin: 3,
    resizeMode: 'stretch'
  },
  score: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})