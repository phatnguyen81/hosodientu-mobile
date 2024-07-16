// import library
import React, {Component} from 'react';
import {View, Animated} from 'react-native';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';

// import css
import {css} from './css';
// import common
import Styles from '../../common/styles';
import images from '../../common/images';
import {
  execNavigateHome,
  execReAuthenticateSuccess,
} from '../../redux/actions/authActions';
import {ASYNC_STORAGE} from '../../shared/constants';
import AsyncStorage from '@react-native-community/async-storage';
import onesignal from '../../shared/lib/onesignal';
import {NAVIGATION} from '../../navigations/constants';

export default class SpashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocus: false,
    };
  }

  async componentDidMount() {
    this.mounted = true;
    this.navigationHome();
  }

  componentWillUnmount = () => {
    // onesignal.removeEventListener();
    this.mounted = false;
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  };

  navigationToThongBao = () => {
    const {navigation} = this.props;
    navigation.navigate(NAVIGATION.THONG_BAO_STACK);
  };

  navigationHome = async () => {
    const {navigation} = this.props;
    const user = await AsyncStorage.getItem(ASYNC_STORAGE.USERINFO);
    this.timeout = setTimeout(async () => {
      if (this.mounted) {
        if (user !== null) {
          navigation.dispatch(execReAuthenticateSuccess(JSON.parse(user)));
        } else {
          navigation.dispatch(execNavigateHome());
        }
      }
      this.timeout = null;
    }, 1500);
  };

  render() {
    // console.log('SpashScreen');
    return (
      <View style={[css.container, Styles.Common.ColumnCenter]}>
        <FastImage
          style={[css.bacground]}
          source={images.splashBackground}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    );
  }
}

SpashScreen.propTypes = {
  data: PropTypes.object,
};
