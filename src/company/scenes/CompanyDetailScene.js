/**
 @flow
 */
import React, {Component,PropTypes} from 'react';
import {Image, ScrollView, StyleSheet, View, Dimensions, Text} from 'react-native';
import colors from './../../common/colors';

export default class CompanyDetailScene extends Component {
  static propTypes = {
    company:PropTypes.object.isRequired
  };

  render() {
    let {company} = this.props;

    return (
      <ScrollView
        style={styles.container}
      >

        <Image source={{uri:company.images[0]}}
               style={styles.companyImage}
               resizeMode="cover"
        >

          <Image
            source={{uri:company.logo}}
            style={styles.companyLogo}
          />

          <Text style={styles.companyTitle}>
            {company.title}
          </Text>

        </Image>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
  },
  contentContainerStyle: {

  },
  companyImage: {
    flex:1,
    width:null,
    height:200,
    alignItems:'center',
    justifyContent:'center'
  },
  companyLogo: {
    width:100,
    height:100,
    borderColor:'white',
    borderWidth:2,
    borderRadius:20
  },
  companyTitle:{
    color:colors.white,
    backgroundColor:'transparent',
    paddingVertical:3
  }
});
