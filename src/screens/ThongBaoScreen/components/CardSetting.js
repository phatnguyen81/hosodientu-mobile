import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, AppState} from 'react-native';
import normalize from 'react-native-normalize';
import colors from '../../../common/colors';
import Styles from '../../../common/styles';
import {Icon} from 'native-base';

import {checkNotification} from '../../../shared/services';
import {checkNotifications} from 'react-native-permissions';

class CardSetting extends React.Component {
  state = {
    appState: AppState.currentState,
    isPermissionNotification: false,
  };
  requestNotificatioIOS = () => {
    checkNotification();
  };

  async componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
    const check = await checkNotifications();
    this.setState({
      isPermissionNotification: check.settings.notificationCenter,
    });
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = async nextAppState => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      const check = await checkNotifications();
      this.setState({
        isPermissionNotification: check.settings.notificationCenter,
      });
    }
    this.setState({appState: nextAppState});
  };

  render() {
    const {data} = this.props;
    return !this.state.isPermissionNotification ? (
      <TouchableOpacity
        style={css.container}
        onPress={this.requestNotificatioIOS}>
        <View style={[css.content, Styles.Common.RowCenterBetween]}>
          <Icon style={css.icon} name="ios-notifications" type="Ionicons" />
          <Text style={css.desText}>{data.des}</Text>
          <Text style={css.settingText}>{data.setting}</Text>
        </View>
      </TouchableOpacity>
    ) : null;
  }
}

export default CardSetting;

const css = StyleSheet.create({
  container: {
    paddingHorizontal: Styles.padding.medium,
  },
  content: {
    height: normalize(60),
    width: '100%',
    backgroundColor: '#64B5F6',
    borderRadius: Styles.radius.tiny,
  },
  icon: {
    fontSize: Styles.FontSize.medium,
    color: colors.white,
    paddingHorizontal: Styles.padding.medium,
  },
  desText: {
    fontSize: Styles.FontSize.tiny + 2,
    fontFamily: Styles.FontFamily.sourceSansProRegular,
    color: colors.white,
    width: '68%',
  },
  settingText: {
    fontSize: Styles.FontSize.tiny,
    fontFamily: Styles.FontFamily.robotoBold,
    color: colors.white,
    paddingHorizontal: Styles.padding.medium,
  },
});
