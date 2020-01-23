import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Share } from 'react-native';
import { Linking } from 'expo';

export default class ShareButton extends Component {
  static propTypes = {
    food: PropTypes.object.isRequired
  };

  onShare = async () => { 
    const { food } = this.props;
    const url = `${Linking.makeUrl('')}?barcode=${food.barcode}`;
    try {
      await Share.share({
        title: food.name,
        url
      });
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (<Button onPress={this.onShare} title='Partager' color={'white'}/>);
  }
}
