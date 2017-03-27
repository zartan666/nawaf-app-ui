/**
 * @flow
 */
import React, {Component, PropTypes} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ACTIONS} from './common/actions';
import {SELECTORS} from './common/selectors';
import HomeScene from './scenes/HomeScene';

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  render() {
    return (
      <View style={styles.container}>

        <HomeScene
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators({...ACTIONS}, dispatch)};
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
