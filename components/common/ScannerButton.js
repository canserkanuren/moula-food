import React, { Component } from 'react';
import { View } from 'react-native';
import ActionButton from 'react-native-action-button';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ScannerButton extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  openScanner = () => {
    this.props.navigation.navigate('Scanner');
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* Rest of the app comes ABOVE the action button component !*/}
        {this.props.children}
        <ActionButton
          buttonColor="#EFEFEF"
          title="Open Scanner"
          onPress={this.openScanner}
          style={{ flex: 1 }}
          renderIcon={() => (<Icon name="ios-barcode" size={25} style={{ paddingTop: 3 }} />)}>
        </ActionButton>
      </View>
    );
  }
}
