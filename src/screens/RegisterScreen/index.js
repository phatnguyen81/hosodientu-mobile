/**
 * NAME: SignIn
 * FEATUTE: Handle show UI login
 */

// import library
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {Container, Button} from 'native-base';
import PropTypes from 'prop-types';
import {Field} from 'redux-form';
// import component
import {ButtonGradient} from '../../components/CoreUI/GradientButton';
import Toast from '../../components/Toast';
import Camera from './Camera';
import {css} from './css';
import Styles from '../../common/styles';
import images from '../../common/images';
import {getNumberOfset} from './constants';
import FastImage from 'react-native-fast-image';
import normalize from 'react-native-normalize';
import {DismissKeyboardHOC} from '../../components/DismissKeyboardHOC';
import CustomDatePicker from '../../components/DatePicker';
import {renderInputField, renderRadioButtonField} from './renderField';
import {ERROR_OCCURED} from '../../shared/constants/Messages';

const DismissKeyboardAvoidingView = DismissKeyboardHOC(KeyboardAvoidingView);

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOffset: 0,
      opneScanner: false,
    };
  }

  /**
   * handle navigation to fogotpassword screen
   */
  navigationForgotScreen = () => {
    const {navigation} = this.props;
    navigation.dispatch({type: 'ForgotPassword'});
  };

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

  onBarcodeScan = code => {
    //called after te successful scanning of QRCode/Barcode
    this.setState({qrvalue: code});
    this.setState({opneScanner: false});
    this.props.getUserByQrCode(code);
  };

  requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cho phép truy cập Camera',
          message: 'Ứng dụng cần truy cập Camera của bạn',
          buttonNeutral: 'NHẮC LẠI SAU',
          buttonNegative: 'THOÁT',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.setState({qrvalue: ''});
        this.setState({opneScanner: true});
      } else {
        Toast.showBottom('Camera permission denied');
      }
    } catch (err) {
      Toast.showBottom(ERROR_OCCURED);
    }
  };

  onOpneScanner = () => {
    //To Start Scanning
    if (Platform.OS === 'android') {
      //Calling the camera permission function
      this.requestCameraPermission();
    } else {
      this.setState({qrvalue: ''});
      this.setState({opneScanner: true});
    }
  };

  closeScanner = () => {
    this.setState({opneScanner: false});
  };

  getValue = type =>
    ({
      B: 0,
      G: 1,
    }[type] || null);

  render() {
    const {data, handleSubmit, submit, user, navigation} = this.props;
    const {numberOffset, opneScanner} = this.state;
    if (opneScanner) {
      return (
        <Camera
          onBarcodeScan={this.onBarcodeScan}
          closeScanner={this.closeScanner}
        />
      );
    }
    return (
      <Container style={Styles.Common.ColumnCenter}>
        <View style={css.body}>
          <DismissKeyboardAvoidingView
            style={[css['view-keyboard']]}
            keyboardVerticalOffset={numberOffset}
            behavior="padding"
            enabled
            onPress={this.handleOnFocus(false)}>
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
                <Field
                  name="ten"
                  component={renderInputField}
                  onSubmitEditing={this.handleOnFocus(false)}
                  onFocus={this.handleOnFocus(true)}
                  autoCapitalize="words"
                  label={data.name}
                  initValue={user.ten}
                />
                <Field
                  name="maYte"
                  component={renderInputField}
                  onSubmitEditing={this.handleOnFocus(false)}
                  onFocus={this.handleOnFocus(true)}
                  autoCapitalize="characters"
                  label={data.code}
                  initValue={user.maYte}
                />
                <Field
                  name="phone"
                  component={renderInputField}
                  onSubmitEditing={this.handleOnFocus(false)}
                  onFocus={this.handleOnFocus(true)}
                  autoCapitalize="characters"
                  keyboardType="phone-pad"
                  label={data.phone}
                  initValue={user.phone}
                />
                <Field
                  name="diaChi"
                  component={renderInputField}
                  onSubmitEditing={this.handleOnFocus(false)}
                  onFocus={this.handleOnFocus(true)}
                  autoCapitalize="characters"
                  label={data.address}
                  initValue={user.diaChi}
                />
                <Field
                  name="email"
                  component={renderInputField}
                  onSubmitEditing={this.handleOnFocus(false)}
                  onFocus={this.handleOnFocus(true)}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  label={data.email}
                  initValue={user.email}
                />
                <Field
                  name="re_email"
                  component={renderInputField}
                  onSubmitEditing={this.handleOnFocus(false)}
                  onFocus={this.handleOnFocus(true)}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  label={data.reEmail}
                />
                <View
                  style={[css['view-year'], Styles.Common.RowCenterBetween]}>
                  <Field
                    name="ngaySinh"
                    component={CustomDatePicker}
                    label="Năm sinh"
                    labelStyle={{fontSize: Styles.FontSize.small}}
                    initValue={user.ngaySinh}
                  />

                  <Field
                    name="gioiTinh"
                    component={renderRadioButtonField}
                    initValue={this.getValue(user.gioiTinh) || null}
                    radio_props={[
                      {label: 'Nam', value: 'B'},
                      {label: 'Nữ', value: 'G'},
                    ]}
                  />
                </View>
                <View style={css['view-qr']}>
                  <Button
                    onPress={this.onOpneScanner}
                    rounded
                    info
                    style={Styles.Common.ColumnCenter}>
                    <Text style={css['text-qr']}>{data.qr}</Text>
                  </Button>
                </View>
                <ButtonGradient
                  style={[css['form-button-signup']]}
                  onPress={handleSubmit(submit)}
                  height={normalize(60)}>
                  <Text style={css['text-login']}>{data.register}</Text>
                </ButtonGradient>
              </View>

              <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
                style={css['form-button-create']}>
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

export default SignUp;

// proptype
SignUp.propTypes = {
  data: PropTypes.object,
  user: PropTypes.object,
  handleSubmit: PropTypes.func,
};
