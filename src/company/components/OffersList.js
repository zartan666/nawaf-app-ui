/**
 @flow
 */
import React, {Component, PropTypes} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import colors from './../../common/colors';
import SectionHeader from './SectionHeader';

export default class OffersList extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    onItemPress: PropTypes.func.isRequired,
  };

  renderItem = (item, index) => {
    let {onItemPress} = this.props;
    return (
      <TouchableHighlight
        key={index}
        onPress={() => onItemPress()}
        underlayColor="transparent">
        <View style={styles.rowContainer}>
          <View style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  renderHeader = title => {
    return <SectionHeader title={title} />;
  };

  render() {
    let {title, data} = this.props;
    return (
      <View style={styles.container}>
        {this.renderHeader(title)}
        <View style={styles.listContainer}>
          {data.map((item, i) => {
            return this.renderItem(item, i);
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  listContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  rowContainer: {
    flex: 1,
    padding: 3,
    width: Dimensions.get('window').width / 3 ,
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
  image: {
    backgroundColor: '#9DD6EB',
    height: Dimensions.get('window').width / 3,
    borderRadius: 3,
  },
  title: {
    color: colors.smokeGrayDark,
    fontSize: 17,
    fontWeight: '100',
    textAlign: 'center',
  },
});
