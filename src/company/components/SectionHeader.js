/**
 @flow
 */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../common/colors';

const SectionHeader = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 25,
  },
  title: {
    fontFamily: 'BodoniSvtyTwoITCTT-BookIta',
    textAlign: 'center',
    color: colors.smokeGrayDark,
    fontSize: 22,
    fontWeight: '100',
    paddingHorizontal: 15,
    letterSpacing: 2,
  },
  line: {
    flex: 1,
    height: 0.5,
    backgroundColor: colors.smokeGrayLight,
  },
});

export default SectionHeader;
