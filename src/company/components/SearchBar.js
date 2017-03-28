/**
 @flow
 */
import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import colors from '../../common/colors';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        name="search"
        placeholder="Search"
        placeholderTextColor={colors.smokeGrayLight}
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.smokeGrayLight,
    padding:10,
  },
  textInput:{
    padding:5,
    height:40,
    backgroundColor:'white',
    borderRadius:10
  }
});

export default SearchBar;
