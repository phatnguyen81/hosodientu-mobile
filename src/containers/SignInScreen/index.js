import React, {Component} from 'react';
import {BackHandler} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import SignInScreen from '../../screens/SignInScreen';
import {
  execFetchAuthenticate,
  execResetUser,
  execGotoLogin,
  execgoBack,
} from '../../redux/actions/authActions';
import WithLoading from '../../components/WithLoading';
import Toast from '../../components/Toast';
import {
  USERNAME_REQUIRED,
  PASSWORD_REQUIRED,
} from '../../shared/constants/Messages';

const SignInWithLoading = WithLoading(SignInScreen);

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username_error: false,
      password_error: false,
      loading: false,
      username: process.env.NODE_ENV === 'development' ? 'admin@gmail.com' : '',
      password: process.env.NODE_ENV === 'development' ? 'webapp' : '',
    };
  }
  handleAuthenticate = (username, password, keyboardHeight, isFocus) => () => {
    this.setState({username_error: !username, password_error: !password});

    if (!username || !password) {
      return isFocus
        ? Toast.showTop(
            !username ? USERNAME_REQUIRED : PASSWORD_REQUIRED,
            '',
            'warning',
          )
        : Toast.showTop(
            !username ? USERNAME_REQUIRED : PASSWORD_REQUIRED,
            '',
            'warning',
          );
    }

    // block screen and start calling api
    this.setState({username, password});
    this.props.authenticate({username, password}, keyboardHeight, isFocus);
  };

  render() {
    return (
      <SignInWithLoading
        {...this.props}
        isLoading={this.props.usersLoading}
        handleAuthenticate={this.handleAuthenticate}
      />
    );
  }
}

const mapStateToProps = state => {
  return {usersLoading: state.loading.usersLoading};
};

const mapDispatchToProps = dispatch => ({
  authenticate: (user, keyboardHeight, isFocus) =>
    dispatch(execFetchAuthenticate(user, keyboardHeight, isFocus)),
  resetUser: () => dispatch(execResetUser()),
  gotoLogin: () => dispatch(execGotoLogin()),
  goBack: () => dispatch(execgoBack()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);

SignIn.propTypes = {
  usersLoading: PropTypes.bool,
  authenticate: PropTypes.func,
};
