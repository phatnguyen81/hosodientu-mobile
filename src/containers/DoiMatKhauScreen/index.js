import React from 'react';
import {connect} from 'react-redux';
import {BackHandler} from 'react-native';

// import component
import DoiMatKhauSComp from '../../screens/SettingScreen/DoiMatKhauScreen';
import {execgoBack, execChangePassword} from '../../redux/actions/authActions';
import WithLoading from '../../components/WithLoading';

const DoiMatKhauWithLoading = WithLoading(DoiMatKhauSComp);

class DoiMatKhau extends React.Component {
  // Render any loading content that you like here

  render() {
    return (
      <DoiMatKhauWithLoading
        isLoading={this.props.changePasswordLoading}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.services.user.userInfo,
    changePasswordLoading: state.loading.changePasswordLoading,
    authenticated: state.auth.authenticated,
  };
};

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch(execgoBack()),
  changePassword: data => dispatch(execChangePassword(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DoiMatKhau);
