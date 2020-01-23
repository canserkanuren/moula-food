import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { nutriscore } from '../../constant/constant';
export default class SearchListItem extends Component {

  static propTypes = {
    product: PropTypes.object,
    pressFunc: PropTypes.func.isRequired
  }

  state = { imageUrl: this.props.product.nutriscore ? nutriscore(this.props.product.nutriscore) : ''}

  componentDidMount() {
  }

  render() {
    return (
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
              {
                this.state.imageUrl ? (
                  <Image
                    style={Styles.nutriscore}
                    source={this.state.imageUrl}
                  />) : (<></>)
              }
            </View>
          </View>
        </View>
      </TouchableHighlight>
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
    borderRadius: 3
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20
  },
  nutriscore: {
    width: 100,
    height: 50,
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