import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import PropTypes from 'prop-types';
import { NUTRITIONS, nutritionColor} from '../../constant/constant';
import ScoreIndicator from './ScoreIndicator';


export default class InfoNutrition extends Component {
  state = {product: {}}
  static propTypes = {
    item: PropTypes.object.isRequired
  }

  componentDidMount() {
    if (this.props.item) {
      console.log(this.props.item);
      this.setState({ product: NUTRITIONS.find(product => product.name === this.props.item.name) });
    }
  }
  render() {
    return (
      <View>
      <View style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
          <Image style={{ height: 40, width: 40 }} source={this.state.product.path}/>
          <Text style={{ marginLeft: 10}}>{this.state.product.label}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
          <Text>{this.props.item.value}<Text>{this.props.item.unit}</Text></Text>
          <View style={{ marginLeft: 10, width: 20, height: 20, borderRadius: 50, backgroundColor: nutritionColor(this.props.item.value, this.props.item.name)}}></View>
        </View>
      </View>
        <ScoreIndicator score={this.state.product.score} />
      </View>
    )
  }
}
