/**
 @flow
 */
import React, {Component, PropTypes} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import AdSwiper from './../components/AdSwiper';
import OffersList from './../components/OffersList';

export default class HomeScene extends Component {
  static propTypes = {};

  state = {};

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}>
        <AdSwiper />
        <OffersList
          title="Spa &amp; Salon"
          data={[
            {title: 'Company A'},
            {title: 'Company B'},
            {title: 'Company C'},
          ]}
        />
        <OffersList
          title="Hospitals &amp; Clinic"
          data={[
            {title: 'Company A'},
            {title: 'Company B'},
            {title: 'Company C'},
          ]}
        />
        <OffersList
          title="Car Service"
          data={[
            {title: 'Company A'},
            {title: 'Company B'},
            {title: 'Company C'},
          ]}
        />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainerStyle: {},
});
