import React from 'react';
import {connect} from 'react-redux';

// import component
import SettingComp from '../../screens/SettingScreen';
import {execgoBack, execChangeAvatar} from '../../redux/actions/authActions';
import WithLoading from '../../components/WithLoading';
const SettingWithLoading = WithLoading(SettingComp);

class Setting extends React.Component {
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
      <SettingWithLoading
        {...this.props}
        isLoading={this.props.settingLoading}
        updateAvatar={this.updateAvatar}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.services.user.userInfo,
    posts: state.home.posts,
    images: state.home.images,
    videos: state.home.videos,
    settingLoading: state.loading.settingLoading,
  };
};

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch(execgoBack()),
  execChangeAvatar: data => dispatch(execChangeAvatar(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Setting);
