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
          buttonColor="rgba(231,76,60,1)"
          title="Open Scanner"
          onPress={this.openScanner}
          renderIcon={() => (<Icon name="md-camera" />)}>
        </ActionButton>
      </View>
    );
  }
}
