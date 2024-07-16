import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
// import {required, validateForm, combine, email} from 'redux-form-validators';

import ForgotPasswordScreen from '../../screens/ForgotPasswordScreen';
import WithLoading from '../../components/WithLoading';

import {formatDateTimeRequest, getYear} from '../../utilities';
import validate from './validate';
import {
  execFetchRegister,
  execResetPassword,
} from '../../redux/actions/authActions';
import {getNumberOfset} from '../../screens/ForgotPasswordScreen/constants';
const ForgotPasswordWithLoading = WithLoading(ForgotPasswordScreen);

const initialState = () => ({
  numberOffset: 0, // distance when open keyboard
  showQRScanner: false,
  keyboardHeight: 0,
  isFocus: false,
});

export class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = initialState();
  }

  /**
   * handle submit
   * @param {object} values
   */
  submit = values => {
    const email = this.handleRequestData({...values});
    this.props.handleResetPassword({
      email,
      keyboardHeight: this.state.keyboardHeight,
      isFocus: this.state.isFocus,
    });
  };

  handleRequestData = values => {
    const user = {...values};
    return user;
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

  _keyboardDidShow = e =>
    this.setState({
      keyboardHeight: e.endCoordinates.height + getNumberOfset(true),
    });

  render() {
    return (
      <ForgotPasswordWithLoading
        {...this.props}
        {...this.state}
        isLoading={this.props.resetPasswordLoading}
        _keyboardDidShow={this._keyboardDidShow}
        handleOnFocus={this.handleOnFocus}
        submit={this.submit}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    resetPasswordLoading: state.loading.resetPasswordLoading,
  };
};

const mapDispatchToProps = dispatch => ({
  handleResetPassword: data => dispatch(execResetPassword(data)),
});
const ForgotPasswordConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgotPassword);

export default reduxForm({
  form: 'forgot',
  validate,
  enableReinitialize: true,
})(ForgotPasswordConnect);

ForgotPassword.propTypes = {
  isLoading: PropTypes.bool,
  authenticate: PropTypes.func,
};
