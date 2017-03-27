/**
 * @flow
 */
import React, {Component, PropTypes} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ACTIONS} from './common/actions';
import CompanyDetailScene from './scenes/CompanyDetailScene';

class CompanyDetail extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  render() {
    let {company} = this.props;
    return <CompanyDetailScene company={company} />;
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

let company = {
  name: 'Company A',
  description: ' Company Description',
  images: ['http://placehold.it/750x450', 'http://placehold.it/850x550'],
  logo: 'http://placehold.it/750x450',
  opensAt: '8AM',
  closesAt: '10PM',
  services: [
    {
      name: 'facial',
      items: [
        {
          name: 'Hair Facial',
          price: 200,
        },
        {
          name: 'Chin Facial',
          price: 100,
        },
      ],
    },
    {
      name: 'Bleaching',
      items: [
        {
          name: 'Hair Bleaching',
          price: 200,
        },
        {
          name: 'Chin Bleaching',
          price: 100,
        },
      ],
    },
  ],
  facilities: [
    {
      name: 'Payment',
      value: 'Cash, Knet',
    },
    {
      name: 'Free Parking',
      value: 'Available',
    },
  ],
};

function mapStateToProps(state) {
  return {
    company: company,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetail);
