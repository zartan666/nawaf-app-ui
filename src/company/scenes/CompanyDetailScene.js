/**
 @flow
 */
import React, {Component, PropTypes} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  Text,
} from 'react-native';
import colors from './../../common/colors';
import Separator from './../../components/Separator';

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
            {company.title}
          </Text>

        </Image>

        <View style={styles.facilityContainer}>
          {company.facilities.map((facility, index) =>
            this.renderFacilityItem(facility, index))}
        </View>

      </ScrollView>
    );
  }

  renderFacilityItem = (item, index) => {
    return (
      <View style={styles.facilityRowContainer} key={index}>
        <View style={styles.facilityRowContent}>
          <Text style={styles.facilityName}>
            {item.name}
          </Text>
          <Text style={styles.facilityValue}>
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
  facilityContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginVertical: 10,
  },
  facilityRowContainer: {
    flex: 1,
  },
  facilityRowContent: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  facilityName: {
    color: colors.accent,
    flex: 1,
  },
  facilityValue: {
    color: colors.smokeGrayDark,
  },
});
