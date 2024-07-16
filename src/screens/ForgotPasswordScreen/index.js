/**
 * NAME: ForgotPassword
 * FEATUTE: Handle show UI login
 */

// import library
import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {Container, Item, Input, Icon} from 'native-base';
import PropTypes from 'prop-types';
import {Field} from 'redux-form';
import FastImage from 'react-native-fast-image';
import normalize from 'react-native-normalize';

// import component
import {ButtonGradient} from '../../components/CoreUI/GradientButton';
import {DismissKeyboardHOC} from '../../components/DismissKeyboardHOC';

import {css} from './css';
import Styles from '../../common/styles';
import images from '../../common/images';
import {getNumberOfset} from './constants';
import {NAVIGATION} from '../../navigations/constants';
import {renderInputField} from './renderField';

const DismissKeyboardAvoidingView = DismissKeyboardHOC(KeyboardAvoidingView);

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);

    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.props._keyboardDidShow,
    );
  }

  /**
   * handle navigation to fogotpassword screen
   */
  navigationToName = name => () => {
    const {navigation} = this.props;
    navigation.dispatch({type: name});
  };

  /**
   * handleChangeText
   * @param {string} name
   */
  handleChangeText = name => text => this.setState({[name]: text});

  render() {
    const {data, handleSubmit, submit, numberOffset} = this.props;
    return (
      <Container style={Styles.Common.ColumnCenter}>
        <View style={css.body}>
          <DismissKeyboardAvoidingView
            onPress={this.props.handleOnFocus(false)}
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
                <Text style={css['text-title']}>{data.title}</Text>
                <Field
                  name="email"
                  component={renderInputField}
                  onSubmitEditing={this.props.handleOnFocus(false)}
                  onFocus={this.props.handleOnFocus(true)}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  label={data.email}
                  // initValue={}
                />
                <ButtonGradient
                  onPress={handleSubmit(submit)}
                  style={[css['form-button-signup']]}
                  height={normalize(60)}>
                  <Text style={css['text-login']}>{data.send}</Text>
                </ButtonGradient>
              </View>

              <TouchableOpacity
                style={css['form-button-create']}
                onPress={this.navigationToName(NAVIGATION.WELCOME)}>
                <Text style={css['text-create']}>{data.create}</Text>
                <Text style={css['text-signup']}>{data.signin}</Text>
              </TouchableOpacity>
            </View>
            {/* ----end form---- */}
          </DismissKeyboardAvoidingView>
        </View>
      </Container>
    );
  }
}

export default ForgotPassword;

// proptype
ForgotPassword.propTypes = {
  data: PropTypes.object,
  handleOnFocus: PropTypes.func,
  handleAuthenticate: PropTypes.func,
};
