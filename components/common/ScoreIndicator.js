import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View, FlatList} from 'react-native'
import Indicator from './Indicator';

export default class ScoreIndicator extends Component {
  static propTypes = {
    score: PropTypes.array.isRequired
  };

  render() {
    return (
      <View>
          {(
            <>
              <FlatList
                style={{ justifyContent: 'center', flexDirection: 'row'}}
                data={this.props.score}
                keyExtractor={item => item.color}
                renderItem={({ item }) => <Indicator score={item} scoreLength={this.props.score.length} />}
              />
            </>
          )}
      </View>
    )
  }
}
