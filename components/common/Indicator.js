import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Dimensions } from 'react-native'

export default class Indicator extends Component {
  static propTypes = {
    score: PropTypes.object.isRequired,
    scoreLength: PropTypes.number.isRequired
  };

  render() {
    return (
      <View>
        <View style={{ backgroundColor: this.props.score.color, height: 5, width: Dimensions.get('window').width / this.props.scoreLength}}>
        </View>
        <View>
          {
            (this.props.score.index === 0 ) ?
              (
                <>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{ marginTop: 5, marginLeft: 10}}>0</Text>
                    <Text style={{ marginTop: 5, textAlign: 'right '}}>{this.props.score.value}</Text>
                  </View>
                </>
              )
              :
              (
                (this.props.score.index === this.props.scoreLength -1) ?
                  (
                    <>
                      <Text style={{ marginTop: 5, marginRight: 10, textAlign: 'right'}}>{this.props.score.value}</Text>
                    </>
                  )
                  :
                  (
                    <Text style={{ marginTop: 5, textAlign: 'right'}}>{this.props.score.value}</Text>
                  )
              )

            
          }
        </View>
      </View>
    )
  }
}
