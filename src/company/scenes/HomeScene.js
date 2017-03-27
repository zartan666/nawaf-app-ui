/**
 @flow
 */
import React, {Component} from "react";
import {Animated, Dimensions, StyleSheet, Text, View} from "react-native";
import colors from "../../common/colors";

export default class HomeScene extends Component {
  static propTypes = {
  };

  state = {
    scrollY: new Animated.Value(0),
  };

  renderHeader = () => {
  };

  render() {
    let {scrollY} = this.state;

    return (
      <View style={styles.container}>

        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          style={StyleSheet.absoluteFill}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true},
          )}>
          <View style={styles.heroSpacer} />
          <View style={styles.contentContainerStyle}>
            <Text style={styles.historyTitle}>
              Search History
            </Text>
          </View>
        </Animated.ScrollView>

      </View>
    );
  }
}

const HeroHeight = 350;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  countryImage: {
    flex: 1,
    width: null,
    height: null,
  },
  contentContainerStyle: {
    padding: 10,
    backgroundColor: 'white',
    // minHeight: Dimensions.get("window").height - HeroHeight
  },
  searchBar: {
    position: 'absolute',
    top: 50,
    backgroundColor: 'white',
    height: 100,
    zIndex: 1000,
    marginHorizontal: 10,
  },
  searchTabs: {
    flex: 1,
    flexDirection: 'row',
    width: Dimensions.get('window').width - 20,
  },
  searchInput: {
    flex: 1,

    paddingVertical: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
  },
  tabActive: {
    borderBottomColor: colors.accent,
    borderBottomWidth: 1,
  },
  textInput: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  searchIcon: {
    // paddingHorizontal: 10,
  },
  tabTitle: {
    fontSize: 13,
    color: colors.darkGrey,
    fontWeight: '100',
  },
  tabTitleActive: {
    color: colors.accent,
  },
  searchText: {
    flex: 1,
    color: colors.smokeGreyDark,
    paddingLeft: 10,
  },
  searchHistory: {
    flex: 1,
    padding: 10,
  },
  historyTitle: {
    color: colors.darkGrey,
    fontWeight: '500',
  },
  hero: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: HeroHeight,
  },
  heroSpacer: {
    height: HeroHeight,
    backgroundColor: 'transparent',
  },
  historyContent: {
    flex: 1,
    paddingTop: 5,
  },
  title: {
    color: colors.smokeGreyDark,
    fontWeight: '100',
  },
  historyContainer: {
    flex: 1,
    paddingTop: 10,
  },
});
