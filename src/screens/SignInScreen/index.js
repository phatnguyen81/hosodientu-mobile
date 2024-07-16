/**
 * NAME: SignIn
 * FEATUTE: Handle show UI login
 */

// import library
import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  StatusBar,
} from 'react-native';
import {Container, Item, Input, Icon, Button} from 'native-base';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';
import normalize from 'react-native-normalize';
// import component
import {ButtonGradient} from '../../components/CoreUI/GradientButton';
import {DismissKeyboardHOC} from '../../components/DismissKeyboardHOC';
import Header from '../../components/Header1';

import {css} from './css';
import Styles from '../../common/styles';
import images from '../../common/images';
import {inputProps, getNumberOfset} from './constants';

import {NAVIGATION} from '../../navigations/constants';

const DismissKeyboardAvoidingView = DismissKeyboardHOC(KeyboardAvoidingView);

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOffset: 0, // distance when open keyboard
      isFocus: false,
      username: '',
      password: '',
      keyboardHeight: 0,
    };
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
  }

  _keyboardDidShow = e =>
    this.setState({
      keyboardHeight: e.endCoordinates.height + getNumberOfset(true),
    });

  /**
   * handle focus when keyboard open or close
   * @param {boolean} isFocus check focus of input
   */
  handleOnFocus = isFocus => () => {
    this.setState({
      isFocus,
      numberOffset: getNumberOfset(isFocus),
    });
  };

  /**
   * handle navigation to fogotpassword screen
   */
  navigationToName = name => () => {
    const {navigation} = this.props;
    this.setState({isFocus: false});
    this.props.resetUser();
    navigation.dispatch({type: name});
  };

  /**
   * handleChangeText
   * @param {string} name
   */
  handleChangeText = name => text => this.setState({[name]: text});

  render() {
    const {data} = this.props;
    const {
      numberOffset,
      username,
      password,
      keyboardHeight,
      isFocus,
    } = this.state;
    return (
      <Container>
        <StatusBar barStyle={'dark-content'} />
        <SafeAreaView />
        <View style={css.body}>
          <DismissKeyboardAvoidingView
            onPress={this.handleOnFocus(false)}
            keyboardVerticalOffset={numberOffset}
            behavior="padding"
            enabled
            style={[css['view-keyboard']]}>
            {/* ----title---- */}
            <View style={[Styles.Common.ColumnCenter, css.title]}>
              <FastImage
                style={[css.bacground]}
                source={images.splashBackground}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
            {/* ----end title---- */}

            {/* ----form---- */}
            <View style={css.form}>
              <View>
                <Item rounded style={[css['form-item'], css.shadow]}>
                  <Icon
                    type="MaterialCommunityIcons"
                    name="email"
                    style={css['form-item-icon']}
                  />
                  <Input
                    onSubmitEditing={this.handleOnFocus(false)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onFocus={this.handleOnFocus(true)}
                    {...inputProps(data.email)}
                    style={css['form-item-input']}
                    value={username}
                    onChangeText={this.handleChangeText('username')}
                  />
                </Item>
                <Item
                  rounded
                  style={[
                    css['form-item'],
                    css.shadow,
                    {marginBottom: Styles.margin.small},
                  ]}>
                  <Icon
                    type="MaterialCommunityIcons"
                    name="key"
                    style={css['form-item-icon']}
                  />
                  <Input
                    onSubmitEditing={this.handleOnFocus(false)}
                    autoCapitalize="none"
                    secureTextEntry={true}
                    onFocus={this.handleOnFocus(true)}
                    {...inputProps(data.password)}
                    style={css['form-item-input']}
                    value={password}
                    onChangeText={this.handleChangeText('password')}
                  />
                </Item>
                <View style={css['form-forgot']}>
                  <TouchableOpacity
                    onPress={this.navigationToName(NAVIGATION.FORGOT_PASSWORD)}>
                    <Text style={css['text-forgot']}>{data.forgot}?</Text>
                  </TouchableOpacity>
                </View>
                <ButtonGradient
                  style={[css['form-button-signup']]}
                  onPress={this.props.handleAuthenticate(
                    username,
                    password,
                    keyboardHeight,
                    isFocus,
                  )}
                  height={normalize(60)}>
                  <Text style={css['text-login']}>{data.login}</Text>
                </ButtonGradient>
                <TouchableOpacity
                  style={[css['form-button-return']]}
                  onPress={this.props.goBack}>
                  <Text style={css['text-return']}>Quay lại</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={css['form-button-create']}
                onPress={this.navigationToName(NAVIGATION.SIGNUP)}>
                <Text style={css['text-create']}>{data.create}</Text>
                <Text style={css['text-signup']}>{data.signup}</Text>
              </TouchableOpacity>
            </View>
            {/* ----end form---- */}
          </DismissKeyboardAvoidingView>
        </View>
      </Container>
    );
  }
}

export default SignIn;

// proptype
SignIn.propTypes = {
  data: PropTypes.object,
  handleAuthenticate: PropTypes.func,
};
