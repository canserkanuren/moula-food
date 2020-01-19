import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import FoodService from '../services/FoodService'
import { nutriscore, novascore } from '../constant/constant';
import InfoNutrition from '../components/common/InfoNutrition';
import ShareButton from '../components/common/ShareButton';
import ZoomImage from 'react-native-zoom-image';
import { Easing } from 'react-native';
import FavoriteButton from '../components/common/FavoriteButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initShoppingList, addToShoppingList, delFromShoppingList } from '../redux/actions/shoppingActions';


class DetailsScreen extends Component {

  static navigationOptions = (e) => {
    return {
      title: 'Détail du produit',
      headerRight: (
        <ShareButton
          food={e.navigation.state.params.food} />)
    }
  };

  state = { produit: {}, imageUrl: '' }
  foodService = new FoodService();

  addToShoppingList = (product) => {
    this.props.shopping.add(product.barcode);
  }

  rmvFromShoppingList = (product) => {
    this.props.shopping.remove(product.barcode);
  }

  initStateOfShopping = (product) => {
    this.props.shopping.state(product.barcode);
  }

  componentDidMount() {
    const { food } = this.props.navigation.state.params;
    if (food) {
      this.setState({ produit: food, imageUrl: food.nutriscore ? nutriscore(food.nutriscore) : '', novaScore: food.novaGroup ? novascore(food.novaGroup) : '' });
    }
  }

  render() {
    return (
      <FavoriteButton product={this.state.produit} addFunc={this.addToShoppingList} rmvFunc={this.rmvFromShoppingList}>
        <View style={Styles.container}>
          <View style={Styles.row}>
            <ZoomImage
              source={{ uri: this.state.produit.imageUrl }}
              imgStyle={{ width: 90, height: 130 }}
              style={{ marginRight: 5 }}
              duration={200}
              enableScaling={false}
              easingFunc={Easing.ease}
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
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Qualités</Text>
            <Text style={{ fontSize: 20 }}>pour {this.state.produit.nutritionPer}</Text>
          </View>
          {(
            <>
              <FlatList
                data={this.state.produit.nutriments}
                keyExtractor={item => item.name}
                renderItem={({ item }) => <InfoNutrition item={item} />}
              />
            </>
          )}
        </View>
      </FavoriteButton>
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
      add: bindActionCreators(addToShoppingList, barcode),
      remove: bindActionCreators(delFromShoppingList, barcode)
    }
  }
}

export default connect(mapStateToProps, mapActionsToProps)(DetailsScreen);


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
    borderRadius: 3
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