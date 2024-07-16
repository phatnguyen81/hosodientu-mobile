import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
// import {required, validateForm, combine, email} from 'redux-form-validators';

import SignUpScreen from '../../screens/RegisterScreen';
import WithLoading from '../../components/WithLoading';
import ActivatePatientPostModel from '../../models/activatePatientPostModel';

import {formatDateTimeRequest, getYear} from '../../utilities';
import validate from './validate';
import {
  execFetchRegister,
  execFetchQRCode,
} from '../../redux/actions/authActions';
const SignUpWithLoading = WithLoading(SignUpScreen);

const initialState = () => ({
  loading: false,
  showQRScanner: false,
  isUpdate: false,
  isForce: false, //Force to create record for admin approval
  fail: 0,
  re_email: '',
});

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = initialState();
  }

  /**
   * handle submit
   * @param {object} values
   */
  submit = values => {
    let {type, dataFromQrCode, user} = this.props;
    const data = this.handleRequestData({...user, ...values});
    const fail = this.state.fail + 1;
    const isForce = fail === 3;
    this.setState({fail});

    type = dataFromQrCode ? 'admin' : type;
    this.props.register(data, type, isForce);
  };

  handleRequestData = values => {
    const user = {...values};
    if (user.ngaySinh) {
      user.namSinh =
        user.namSinh && user.ngaySinh.includes('00:00')
          ? user.namSinh
          : getYear(user.ngaySinh);
      user.ngaySinh = formatDateTimeRequest(user.ngaySinh);
    }
    return user;
  };

  handleScan = code => {
    this.props.getUserByQrCode(code);
  };

  render() {
    return (
      <SignUpWithLoading
        {...this.props}
        isLoading={this.props.usersLoading}
        submit={this.submit}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    usersLoading: state.loading.usersLoading,
    user: state.auth.user,
    dataFromQrCode: state.auth.dataFromQrCode,
  };
};

const mapDispatchToProps = dispatch => ({
  // eslint-disable-next-line prettier/prettier
  register: (data, type, isForce) => dispatch(execFetchRegister(data, type, isForce)),
  getUserByQrCode: code => dispatch(execFetchQRCode(code)),
  // goToDashboard: () => dispatch({type: 'RTE_DASHBOARD'}),
  // loadUserByPatientCode: data => dispatch(execGetUserInfoByPatientCode(data)),
  // getUserDetail: id => dispatch(execGetUserDetail(id)),
  // updateUser: data => dispatch(execUpdate(data)),
  // goToUserList: () => dispatch({type: 'RTE_DANH_SACH_USER'}),
});
const SignUpConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);

export default reduxForm({
  form: 'signup',
  validate,
  enableReinitialize: true,
})(SignUpConnect);

SignUp.propTypes = {
  isLoading: PropTypes.bool,
  authenticate: PropTypes.func,
};
