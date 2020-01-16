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
    console.log('url', Linking.makeUrl('', { barcode: food.code }));
    try {
      const result = await Share.share({
        title: food.name,
        url: Linking.makeUrl('', { barcode: food.code })
      }, );

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return <Button onPress={this.onShare} title='Share' color={'white'}/>;
  }
}
