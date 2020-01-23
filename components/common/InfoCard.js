import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

export default class InfoCard extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column',  alignContent: 'center'}}>
        <View style={{ borderRadius: 5, height: 150, backgroundColor: 'teal', marginLeft: 50, marginRight: 50, justifyContent: 'center'}}>
          <Text style={{ fontSize: 20, textAlign: 'center', color: 'white', fontWeight: 'bold' }}>{this.props.text}</Text>
        </View>
      </View>
    )
  }
}
