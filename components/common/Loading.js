import React, { Component } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import MainStyle from '../../assets/styles/mainStyle';

export default class Loading extends Component {

    static propTypes = {
        displayColor: PropTypes.string.isRequired
    }

    state = {}

    render() {
        return (
            <View
                style={[MainStyle.container, { alignItems: 'center', justifyContent:'center' }]}>
                <ActivityIndicator
                    size="large"
                    color={this.props.displayColor}
                    />
                <Text
                    style={{ color: this.props.displayColor }}>
                    Chargement ...
                    </Text>
                {this.props.children}
            </View>
        )
    }
}