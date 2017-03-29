/**
 @flow
 */
import React, {Component, PropTypes} from 'react';
import {Animated, Image, Dimensions, StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import colors from './../../common/colors';
import Separator from './../../components/Separator';
import SectionHeader from '../components/SectionHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {isRTL} from './../../app/common/locale';

export default class CompanyDetailScene extends Component {
  static propTypes = {
    company: PropTypes.object.isRequired,
    onServiceItemPress:PropTypes.func.isRequired
  };

  state = {
    scrollY: new Animated.Value(0),
  };

  renderImage = () => {
    let {company} = this.props;
    let {scrollY} = this.state;

    let logoScale = scrollY.interpolate({
      inputRange: [-50, 0, 50],
      outputRange: [1.5, 1, 1],
    });

    let logoTranslateY = scrollY.interpolate({
      inputRange: [-150, 0, 150],
      outputRange: [40, 0, -40],
    });

    return (
      <View style={styles.hero}>
        <Animated.Image
          source={{uri: company.images[0]}}
          style={[
            styles.companyImage,
            {
              transform: [{scale: logoScale}, {translateY: logoTranslateY}],
            },
          ]}
          resizeMode="cover"
        />
      </View>
    );
  };


  render() {
    let {company} = this.props;
    let {scrollY} = this.state;

    return (
      <View style={styles.container}>

        {
          this.renderImage()
        }

        <Animated.ScrollView style={[StyleSheet.absoluteFill]}
                             onScroll={Animated.event(
                               [{nativeEvent: {contentOffset: {y: scrollY}}}],
                               {useNativeDriver: true},
                             )}
                             showsVerticalScrollIndicator={false}
                             scrollEventThrottle={16}
        >

          <View style={styles.heroSpacer} />

          <View style={styles.contentContainerStyle}>

            <View style={styles.companyInfoContainer}>
              <Image source={{uri: company.logo}} style={styles.companyLogo} />

              <Text style={styles.companyTitle}>
                {company.name}
              </Text>

              <Text style={styles.openText}>Open</Text>

            </View>

            <View style={styles.section}>
              <View style={styles.rowContent}>
                <View style={{flex: 1}}>
                  <Text style={styles.sectionTitle}>
                    Promotions
                  </Text>
                  <Text style={styles.itemName}>
                    List available promotions
                  </Text>
                </View>
                <Ionicons
                  name={isRTL ? 'ios-arrow-back' : 'ios-arrow-forward'}
                  color={colors.smokeGrayLight}
                  size={40}
                  style={{height: 40}}
                />
              </View>
            </View>

            <View style={styles.section}>
              {company.facilities.map((facility, index) =>
                this.renderFacilityItem(facility, index))}
            </View>

            <View style={styles.section}>
              <View style={styles.rowContent}>
                <Text style={styles.sectionTitle}>
                  {`${company.name} Services`}
                </Text>
              </View>
              {company.services.map((service, index) =>
                this.renderServiceItem(service, index))}

            </View>

          </View>
        </Animated.ScrollView>
      </View>
    );
  }

  renderServiceItem = (item, index) => {
    let {onServiceItemPress} = this.props;
    return (
      <View style={styles.rowContainer} key={index}>

        <SectionHeader title={item.name} />

        {item.items.map((service, serviceIndex) => {
          return (
            <TouchableHighlight onPress={()=>onServiceItemPress()} underlayColor="transparent"
                                key={serviceIndex}
            >
              <View style={styles.rowContainer} >
                <View style={styles.rowContent}>
                  <Text style={styles.itemName}>
                    {service.name}
                  </Text>
                  <Text style={styles.itemValue}>
                    {service.price} KD
                  </Text>
                  <Ionicons
                    name={isRTL ? 'ios-arrow-back' : 'ios-arrow-forward'}
                    color={colors.smokeGrayLight}
                    size={30}
                    style={{paddingLeft: 10, height: 30}}
                  />
                </View>
                <Separator />
              </View>
            </TouchableHighlight>
          );
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
    backgroundColor: 'white',
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
    flex: 1,
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
  contentContainerStyle: {
    backgroundColor: colors.lightGray,
    minHeight: Dimensions.get('window').height - 250
  },
  hero: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 250,
  },
  heroSpacer: {
    height: 250,
    backgroundColor: 'transparent',
  },
  companyImage: {
    width: Dimensions.get('window').width,
    height: 250,
  },
});
