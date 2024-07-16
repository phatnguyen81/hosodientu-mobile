import React from 'react';
import {connect} from 'react-redux';
import {BackHandler} from 'react-native';

// import component
import WithLoading from '../../components/WithLoading';
import HoSoComp from '../../screens/HoSoScreen';
import {
  execLogout,
  execgoBack,
  execChangeAvatar,
} from '../../redux/actions/authActions';
import {setLoading} from '../../redux/actions/LoadingAction';

const HoSoWithLoading = WithLoading(HoSoComp);

class HoSo extends React.Component {
  // Render any loading content that you like here
  constructor(props) {
    super(props);
    this.countExitApp = 0;
  }

  updateAvatar = avatar => {
    const {user} = this.props;
    const data = {
      UserId: user.userId,
      Avatar: avatar,
    };
    this.props.execChangeAvatar(data);
  };

  render() {
    return (
      <HoSoWithLoading
        isLoading={this.props.settingLoading}
        {...this.props}
        changeSettingLoading={this.props.changeSettingLoading}
        updateAvatar={this.updateAvatar}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.services.user.userInfo,
    settingLoading: state.loading.settingLoading,
    authenticated: state.auth.authenticated,
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(execLogout()),
  goBack: () => dispatch(execgoBack()),
  execChangeAvatar: data => dispatch(execChangeAvatar(data)),
  changeSettingLoading: (scope, loading) =>
    dispatch(setLoading(scope, loading)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HoSo);
