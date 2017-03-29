/**
 * @flow
 */
import React, {Component, PropTypes} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ACTIONS} from './common/actions';
import HomeScene from './scenes/HomeScene';

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  onItemPress = () => {
    this.props.navigation.navigate('CompanyDetailScene');
  };

  render() {
    return <HomeScene onItemPress={this.onItemPress} />;
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators({...ACTIONS}, dispatch)};
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
