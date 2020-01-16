import React, { Component } from 'react'
import { SafeAreaView, ScrollView, View, Image, Text } from 'react-native';
import ProductCard from '../components/common/ProductCard.js';

import historyStyle from '../assets/styles/historyStyle.js';

export default class HistoryScreen extends Component {

  state = {
    historyItems: [
      {
        barcode: '3256223510025',
        name: 'Eau de source de montagne',
        brand: 'Super U',
        quality: 'Good'
      },
      {
        barcode: '3256223510026',
        name: 'Eau de source de montagne',
        brand: 'Super U',
        quality: 'Good'
      },
      {
        barcode: '3256223510027',
        name: 'Eau de source de montagne',
        brand: 'Super U',
        quality: 'Good'
      },
      {
        barcode: '3256223510028',
        name: 'Eau de source de montagne',
        brand: 'Super U',
        quality: 'Good'
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
            {
              this.state.historyItems.map((item, key) =>
                <ProductCard product={item} key={item.barcode}/>
              )
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
