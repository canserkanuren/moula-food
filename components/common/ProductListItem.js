import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';
import Swipeout from 'react-native-swipeout';

import PropTypes from 'prop-types';

export default class ProductListItem extends Component {

  static propTypes = {
    product: PropTypes.object,
    pressFunc: PropTypes.func.isRequired,
    swippedPressFunc: PropTypes.func.isRequired
  }

  state = {}

  componentDidMount() {
  }

  render() {

    const swipeoutOpts = {
      autoClose: true,
      backgroundColor: 'none',
      right: [
        {
          onPress: () => this.props.swippedPressFunc(this.props.product),
          text: 'Retirer',
          type: 'delete'
        }
      ]
    }

    return (
      <Swipeout {...swipeoutOpts}>
        <TouchableHighlight
          activeOpacity={0.9}
          onPress={() => this.props.pressFunc(this.props.product)}
          style={{ flex: 1 }}>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginVertical: 15
          }}>
            <View>
              <Image
                style={{ width: 60, height: 60, borderRadius: 5, marginRight: 10 }}
                source={{ uri: this.props.product.imageUrl }} />
            </View>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }} numberOfLines={2} ellipsizeMode='tail'>{this.props.product.name}</Text>

              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', fontSize: 6 }}>
                <Text>{this.props.product.brands}</Text>
                <Text>{this.props.product.nutriscore}</Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeout>
    )
  }
}
