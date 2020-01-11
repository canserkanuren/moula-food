import React, { Component } from 'react'
import { SafeAreaView, ScrollView, View, Image, Text } from 'react-native';

import historyStyle from '../assets/styles/historyStyle.js';

export default class HistoryScreen extends Component {

  state = {
    historyItems: [
      {
        barcode: '3256223510025',
        name: 'Eau de source de montagne'
      },
      {
        barcode: '3256223510025',
        name: 'Eau de source de montagne'
      },
      {
        barcode: '3256223510025',
        name: 'Eau de source de montagne'
      },
      {
        barcode: '3256223510025',
        name: 'Eau de source de montagne'
      }
    ]
  }

  static navigationOptions = (e) => {
    return {
      title: 'Mon historique'
    }
  }

  render() {
    return (
      <SafeAreaView style={historyStyle.container}>
        <ScrollView style={historyStyle.scrollView}>
          <View style={historyStyle.flexContainer}>
            <View style={historyStyle.itemCard} >
              <Image
                style={historyStyle.itemImage}
                source={{
                  uri: 'https://static.openfoodfacts.org/images/products/325/622/351/0032/front_fr.29.full.jpg'
                }}
              />
              <Text style={historyStyle.itemName}> Nom du produit </Text>
              <Text style={historyStyle.itemBrand}> Marque </Text>
              <Text style={historyStyle.itemQuality}> Qualité </Text>
            </View>
            <View style={historyStyle.itemCard} >
              <Image
                style={historyStyle.itemImage}
                source={{
                  uri: 'https://static.openfoodfacts.org/images/products/325/622/351/0032/front_fr.29.full.jpg'
                }}
              />
              <Text style={historyStyle.itemName}> Nom du produit </Text>
              <Text style={historyStyle.itemBrand}> Marque </Text>
              <Text style={historyStyle.itemQuality}> Qualité </Text>
            </View>
            <View style={historyStyle.itemCard} >
              <Image
                style={historyStyle.itemImage}
                source={{
                  uri: 'https://static.openfoodfacts.org/images/products/325/622/351/0032/front_fr.29.full.jpg'
                }}
              />
              <Text style={historyStyle.itemName}> Nom du produit </Text>
              <Text style={historyStyle.itemBrand}> Marque </Text>
              <Text style={historyStyle.itemQuality}> Qualité </Text>
            </View>
            <View style={historyStyle.itemCard} >
              <Image
                style={historyStyle.itemImage}
                source={{
                  uri: 'https://static.openfoodfacts.org/images/products/325/622/351/0032/front_fr.29.full.jpg'
                }}
              />
              <Text style={historyStyle.itemName}> Nom du produit </Text>
              <Text style={historyStyle.itemBrand}> Marque </Text>
              <Text style={historyStyle.itemQuality}> Qualité </Text>
            </View>
            <View style={historyStyle.itemCard} >
              <Image
                style={historyStyle.itemImage}
                source={{
                  uri: 'https://static.openfoodfacts.org/images/products/325/622/351/0032/front_fr.29.full.jpg'
                }}
              />
              <Text style={historyStyle.itemName}> Nom du produit </Text>
              <Text style={historyStyle.itemBrand}> Marque </Text>
              <Text style={historyStyle.itemQuality}> Qualité </Text>
            </View>
            <View style={historyStyle.itemCard} >
              <Image
                style={historyStyle.itemImage}
                source={{
                  uri: 'https://static.openfoodfacts.org/images/products/325/622/351/0032/front_fr.29.full.jpg'
                }}
              />
              <Text style={historyStyle.itemName}> Nom du produit </Text>
              <Text style={historyStyle.itemBrand}> Marque </Text>
              <Text style={historyStyle.itemQuality}> Qualité </Text>
            </View>
            <View style={historyStyle.itemCard} >
              <Image
                style={historyStyle.itemImage}
                source={{
                  uri: 'https://static.openfoodfacts.org/images/products/325/622/351/0032/front_fr.29.full.jpg'
                }}
              />
              <Text style={historyStyle.itemName}> Nom du produit </Text>
              <Text style={historyStyle.itemBrand}> Marque </Text>
              <Text style={historyStyle.itemQuality}> Qualité </Text>
            </View>
            <View style={historyStyle.itemCard} >
              <Image
                style={historyStyle.itemImage}
                source={{
                  uri: 'https://static.openfoodfacts.org/images/products/325/622/351/0032/front_fr.29.full.jpg'
                }}
              />
              <Text style={historyStyle.itemName}> Nom du produit </Text>
              <Text style={historyStyle.itemBrand}> Marque </Text>
              <Text style={historyStyle.itemQuality}> Qualité </Text>
            </View>
            <View style={historyStyle.itemCard} >
              <Image
                style={historyStyle.itemImage}
                source={{
                  uri: 'https://static.openfoodfacts.org/images/products/325/622/351/0032/front_fr.29.full.jpg'
                }}
              />
              <Text style={historyStyle.itemName}> Nom du produit </Text>
              <Text style={historyStyle.itemBrand}> Marque </Text>
              <Text style={historyStyle.itemQuality}> Qualité </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
