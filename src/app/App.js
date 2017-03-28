import React, {Component, PropTypes} from 'react';
import {View,I18nManager} from 'react-native';
import {connect} from 'react-redux';
import {ACTIONS} from './common/actions';
import {addNavigationHelpers} from 'react-navigation';
import Navigator from './../common/navigator';
import AppNotification from './../app/AppNotification';
import Splash from './../app/Splash';

class App extends Component {
  static propTypes = {
    app: PropTypes.object.isRequired,
  };

  componentDidMount() {
    // this.props.dispatch(ACTIONS.boot());
      I18nManager.forceRTL(true);
  }

  render() {
    const {app} = this.props;
    // if (!app.booted) return null;

    // if (!app.bootstrapped) {
    //   return <Splash />;
    // }

    return (
      <View style={{flex: 1}}>

        {app.notifications.message && <AppNotification />}

        <Navigator
          ref={nav => {
            this.navigator = nav ? nav.props.navigation : nav;
          }}
          navigation={addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.navigation,
          })}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    app: state.appReducer,
    navigation: state.navigation,
  };
}

export default connect(mapStateToProps)(App);
