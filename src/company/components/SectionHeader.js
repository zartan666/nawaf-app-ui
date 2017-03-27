/**
 @flow
 */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../common/colors';

const SectionHeader = ({title}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLine} />
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.headerLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  headerTitle: {
    fontFamily: 'BodoniSvtyTwoITCTT-BookIta',
    textAlign: 'center',
    color: colors.smokeGrayDark,
    fontSize: 22,
    fontWeight: '100',
    paddingHorizontal: 15,
    letterSpacing: 2,
  },
  headerLine: {
    flex: 1,
    height: 0.5,
    backgroundColor: colors.smokeGrayLight,
  },
});

export default SectionHeader;
