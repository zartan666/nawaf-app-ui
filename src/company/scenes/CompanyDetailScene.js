/**
 @flow
 */
import React, {Component, PropTypes} from 'react';
import {Image, ScrollView, StyleSheet, View, Text} from 'react-native';
import colors from './../../common/colors';
import Separator from './../../components/Separator';
import SectionHeader from '../components/SectionHeader';
import map from 'lodash/map';

export default class CompanyDetailScene extends Component {
  static propTypes = {
    company: PropTypes.object.isRequired,
  };

  render() {
    let {company} = this.props;

    return (
      <ScrollView style={styles.container}>

        <Image
          source={{uri: company.images[0]}}
          style={styles.companyImage}
          resizeMode="cover">

          <Image source={{uri: company.logo}} style={styles.companyLogo} />

          <Text style={styles.companyTitle}>
            {company.name}
          </Text>

        </Image>

        <View style={styles.section}>
          {company.facilities.map((facility, index) =>
            this.renderFacilityItem(facility, index))}
        </View>

        <View style={styles.section}>

          <Text style={styles.sectionTitle}>
            {`${company.name} Services`}
          </Text>

          {company.services.map((service, index) =>
            this.renderServiceItem(service, index))}

        </View>

      </ScrollView>
    );
  }

  renderServiceItem = (item, index) => {
    console.log('item', item);

    map(item => console.log('wa', item));

    return (
      <View style={styles.rowContainer} key={index}>

        <SectionHeader title={item.name} />

        {item.items.map((service,serviceIndex) => {
          return (
            <View style={styles.rowContainer} key={serviceIndex}>
              <View style={styles.rowContent}>
                <Text style={styles.itemName}>
                  {service.name}
                </Text>
                <Text style={styles.itemValue}>
                  {service.price}
                </Text>
              </View>
              <Separator />
            </View>
          )
        })}

      </View>
    );
  };

  renderFacilityItem = (item, index) => {
    return (
      <View style={styles.rowContainer} key={index}>
        <View style={styles.rowContent}>
          <Text style={styles.itemName}>
            {item.name}
          </Text>
          <Text style={styles.itemValue}>
            {item.value}
          </Text>
        </View>
        <Separator />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
  },
  contentContainerStyle: {},
  companyImage: {
    flex: 1,
    width: null,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  companyLogo: {
    width: 100,
    height: 100,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 20,
  },
  companyTitle: {
    color: colors.white,
    backgroundColor: 'transparent',
    paddingVertical: 3,
  },
  rowContainer: {
    flex: 1,
  },
  rowContent: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  itemName: {
    color: colors.accent,
    flex: 1,
  },
  itemValue: {
    color: colors.smokeGrayDark,
  },
  sectionTitle: {
    fontSize: 15,
    color: colors.accent,
    padding: 10,
  },
  section: {
    flex: 1,
    backgroundColor: 'white',
    marginVertical: 10,
  },
});
