import React, { Component } from 'react';
import { View } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class FavoriteButton extends Component {

  state = { fav: false }

  openScanner = () => {
    this.setState({ fav: !this.state.fav});
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* Rest of the app comes ABOVE the action button component !*/}
        {this.props.children}
        <ActionButton
          buttonColor="#EFEFEF"
          title="Open Scanner"
          onPress={this.openScanner}
          renderIcon={() => (<Icon raised
            style={{ paddingTop: 4}}
            name =  { this.state.fav ? 'ios-heart' : 'ios-heart-empty' }
            size={30}
            color="#E63950" />)}>
        </ActionButton>
      </View>
    )
  }
}
