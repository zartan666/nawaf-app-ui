/**
 * @flow
 */
import React, {Component, PropTypes} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ACTIONS} from './common/actions';
import CompanyListScene from './scenes/CompanyListScene';
import {companies} from './db';

class CompanyList extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  render() {
    let {companies} = this.props;
    return <CompanyListScene companies={companies} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators({...ACTIONS}, dispatch)};
}

function mapStateToProps(state) {
  return {
    companies: companies,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList);
