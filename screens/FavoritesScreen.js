import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native';

export default class FavoritesScreen extends Component {
  static propTypes = {
    prop: PropTypes
  }
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <Text>FavoritesScreen</Text>
    )
  }
}
