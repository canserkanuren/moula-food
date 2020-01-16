import React, { Component } from 'react'
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { initHistorySearchList, clearHistorySearchList, delFromHistorySearchList } from '../redux/actions/historyActions';
import { initHistoryScanList, clearHistoryScanList, delFromHistoryScanList } from '../redux/actions/historyActions';

class HistoryScreen extends Component {

  componentDidMount() {
    this.props.history.scanned.init();
  }

  render() {
    return (
      <Text>HistoryScreen</Text>
    )
  }
}

const mapStateToProps = (stateStore) => {
  return {
    products: {
      searched: stateStore.products.history.searched,
      scanned: stateStore.products.history.scanned,
    }
  }
}

const mapActionsToProps = (barcode) => {
  return {
    history: {
      searched: {
        init: bindActionCreators(initHistorySearchList, barcode),
        clear: bindActionCreators(clearHistorySearchList, barcode),
        remove: bindActionCreators(delFromHistorySearchList, barcode)
      },
      scanned: {
        init: bindActionCreators(initHistoryScanList, barcode),
        clear: bindActionCreators(clearHistoryScanList, barcode),
        remove: bindActionCreators(delFromHistoryScanList, barcode)
      }
    }
  }
}

export default connect(mapStateToProps, mapActionsToProps)(HistoryScreen);
