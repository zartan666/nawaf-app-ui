import React from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';
import colors from './../../common/colors';

export default class Notification extends React.Component {
  static propTypes = {
    message: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.array,
    ]),
    messageType: React.PropTypes.string,
    actions: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.fadeAnim = new Animated.Value(0);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.message !== nextProps.message;
  }

  hideMessage = () => {
    this.props.actions.dismissNotification();
  };

  componentDidMount() {
    setTimeout(this.hideMessage, 5000);
    Animated.timing(this.fadeAnim, {
      toValue: 1, // Target
      duration: 2000, // Configuration
      easing: Easing.bounce,
    }).start();
  }

  render() {
    const {messageType, message} = this.props;

    return (
      <Animated.View
        style={[
          styles.container,
          styles[messageType],
          {opacity: this.fadeAnim},
        ]}>
        <TouchableHighlight onPress={() => this.hideMessage()}>
          <Text style={styles.title}>{message}</Text>
        </TouchableHighlight>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    backgroundColor: 'transparent',
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    paddingTop: 20,
    zIndex: 10000,
  },
  title: {
    color: colors.fadedWhite,
    fontSize: 15,
  },
  icon: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    color: colors.accent,
  },
  success: {
    backgroundColor: 'green',
  },
  error: {
    backgroundColor: 'red',
  },
});
