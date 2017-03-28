/**
 @flow
 */
import React, {Component, PropTypes} from 'react';
import {Image, ScrollView, StyleSheet, View, Text, TextInput, TouchableHighlight} from 'react-native';
import colors from './../../common/colors';
import Separator from './../../components/Separator';
import SectionHeader from '../components/SectionHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {isRTL,locale} from './../../app/common/locale';
import AdSwiper from "../components/AdSwiper";

export default class AppointmentCreateScene extends Component {
  static propTypes = {
    company: PropTypes.object.isRequired,
  };

  render() {
    console.log('isRtl', isRTL);
    let {company,email} = this.props;

    return (
      <ScrollView style={styles.container}>
        <AdSwiper />
        <View style={[styles.rowContent,{backgroundColor:'white',paddingHorizontal:20}]}>
          <Text style={styles.sectionTitle}>
            Title
          </Text>
          <Text style={styles.itemValue}>
            100 KD
          </Text>
        </View>

        <View style={[styles.rowContent,{backgroundColor:'white',paddingHorizontal:20}]}>
          <Text style={[styles.itemValue,styles.rtlText]}>
            Service Info Service Info Service Info Service Info
          </Text>
        </View>

        <View style={[styles.rowContainer,{backgroundColor:'white',padding:20,marginVertical:10}]}>
          <Text style={styles.label}>{locale.t('email')}</Text>
          <TextInput
            style={[styles.textInput]}
            onChangeText={value => onFieldChange('email', value)}
            value={email}
            maxLength={40}
            placeholderTextColor="gray"
          />
          <Separator />

          <Text style={styles.label}>{locale.t('email')}</Text>
          <TextInput
            style={[styles.textInput]}
            onChangeText={value => onFieldChange('email', value)}
            value={email}
            maxLength={40}
            placeholderTextColor="gray"
          />
          <Separator />

          <Text style={styles.label}>{locale.t('email')}</Text>
          <TextInput
            style={[styles.textInput]}
            onChangeText={value => onFieldChange('email', value)}
            value={email}
            maxLength={40}
            placeholderTextColor="gray"
          />
          <Separator />

          <Text style={styles.label}>{locale.t('email')}</Text>
          <TextInput
            style={[styles.textInput]}
            onChangeText={value => onFieldChange('email', value)}
            value={email}
            maxLength={40}
            placeholderTextColor="gray"
          />
          <Separator />

          <TouchableHighlight
            onPress={() => {}}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Request Appointment</Text>
          </TouchableHighlight>

        </View>

      </ScrollView>
    );
  }

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
    width: 75,
    height: 75,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 20,
    marginTop: -20,
  },
  companyInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 0,
    backgroundColor: 'white',
    paddingBottom: 10,
  },
  companyTitle: {
    flex: 1,
    color: colors.smokeGrayDark,
    paddingHorizontal: 10,
    fontSize: 17,
    textAlign: 'left',
  },
  openText: {
    color: colors.green,
    fontWeight: '500',
    fontSize: 16,
  },
  rowContainer: {
    flex: 1,
  },
  rowContent: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  itemName: {
    color: colors.black,
    flex: 1,
    fontWeight: '100',
    textAlign: 'left',
  },
  itemValue: {
    color: colors.smokeGrayDark,
  },
  sectionTitle: {
    flex:1,
    fontSize: 17,
    color: colors.accent,
    textShadowColor: colors.smokeGrayLight,
    textShadowOffset: {width: 1, height: 1},
    paddingBottom: 5,
    textAlign: 'left',
  },
  section: {
    flex: 1,
    backgroundColor: 'white',
    marginVertical: 10,
  },
  rtlText:{
    textAlign:'left'
  },
  label: {
    fontSize: 12,
    color: colors.smokeGrayDark,
    marginTop: 15,
    marginBottom: 2,
    fontWeight: '100',
    textAlign: 'left',
  },
  textInput: {
    height: 25,
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1,
    fontSize: 14,
    color: 'black',
    textAlign: isRTL ? 'right' : 'left',
    writingDirection: isRTL ? 'rtl' : 'ltr',
  },
  button:{
    backgroundColor:colors.accent,
    padding:10,
    borderRadius:20,
    marginVertical:20
  },
  buttonText:{
    color:'white',
    opacity:.9,
    textAlign:'center',
    fontWeight:'500',
    fontSize:18
  }
});
