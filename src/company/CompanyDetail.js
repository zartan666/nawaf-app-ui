/**
 * @flow
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ACTIONS} from './common/actions';
import CompanyDetailScene from './scenes/CompanyDetailScene';
import {company} from './db';

class CompanyDetail extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  render() {
    let {company} = this.props;
    return <CompanyDetailScene company={company} />;
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators({...ACTIONS}, dispatch)};
}

function mapStateToProps(state) {
  return {
    company: company,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetail);
