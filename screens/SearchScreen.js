import React, { Component } from 'react'
import { Text, View } from 'react-native';
import ScannerButton from '../components/common/ScannerButton';

export default class SearchScreen extends Component {


  static navigationOptions = (e) => {
    return {
      title: 'Rechercher un produit'
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScannerButton navigation={this.props.navigation}>
          <Text>Bonjour</Text>
        </ScannerButton>
      </View>
    )
  }
}


// import React, {Component} from 'react';
// import {Share, Button} from 'react-native';

// class ShareExample extends Component {
//   onShare = async () => {
//     try {
//       const result = await Share.share({
//         message:
//           'React Native | A framework for building native apps using React',
//       });

//       if (result.action === Share.sharedAction) {
//         if (result.activityType) {
//           // shared with activity type of result.activityType
//         } else {
//           // shared
//         }
//       } else if (result.action === Share.dismissedAction) {
//         // dismissed
//       }
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   render() {
//     return <Button onPress={this.onShare} title="Share" />;
//   }
// }