import {get, isObject} from 'lodash';
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import FastImage from 'react-native-fast-image';
import ImagePicker from 'react-native-image-picker';
import Avatar from '../../../components/Avatar';
import {requestCameraPermission} from '../../../shared/services';

import images from '../../../common/images';
import colors from '../../../common/colors';
import {NAVIGATION} from '../../../navigations/constants';
import {css} from '../css';

const options = {
  title: 'Chọn ảnh đại diện',
  customButtons: [],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
export default class UserCard extends React.Component {
  state = {
    avatar: null,
  };

  openLibrary = () => {
    const {updateAvatar} = this.props;
    // Open Image Library:
    requestCameraPermission();

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
      } else {
        // const source = { uri: response.uri };
        const source = {uri: 'data:image/jpeg;base64,' + response.data};
        updateAvatar(source.uri);
      }
    });
  };

  getAvatarUrl = dataUser => {
    if (dataUser.avatar) {
      return 'data:image/jpeg;base64,' + dataUser.avatar;
    }
    return false;
  };

  componentDidMount() {
    this.timeout = setTimeout(async () => {
      const {user} = this.props;
      const avatar = this.getAvatarUrl(user);
      this.setState({avatar});
      this.timeout = null;
    }, 100);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.user.avatar !== prevState.avatar && !!nextProps.user.avatar) {
      return {
        avatar: 'data:image/jpeg;base64,' + nextProps.user.avatar,
      };
    } else return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.avatar !== this.state.avatar) {
      this.timeout = setTimeout(async () => {
        const {user} = this.props;
        const avatar = this.getAvatarUrl(user);

        this.setState({avatar});
        this.timeout = null;
      }, 100);
    }
  }
  componentWillUnmount = () => {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  };

  render() {
    const {data, user, authenticated, handleNavigate} = this.props;
    const getTen = () => {
      const ten = isObject(user) ? get(user, 'ten', 'Admin') : '';
      return ten !== null ? ten : 'Admin';
    };

    const WrapperAuthenticate = ({isAuthenticated}) => {
      if (isAuthenticated) {
        return (
          <View style={[css.viewUserCard]}>
            <TouchableOpacity onPress={this.openLibrary}>
              {!!this.state.avatar ? (
                <Avatar source={this.state.avatar} style={css.iconAvt} />
              ) : (
                <FastImage
                  source={images.avatarCamera}
                  resizeMode={FastImage.resizeMode.contain}
                  style={css.iconAvt}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleNavigate(NAVIGATION.SETTING)}
              style={css.viewInfo}>
              <View style={css.viewInfoLeft}>
                <Text style={css.textName}>{getTen()}</Text>
                <Text style={css.textDescription}>{data}</Text>
              </View>
              <Icon
                style={css.iconRight}
                name="chevron-right"
                type="MaterialCommunityIcons"
              />
            </TouchableOpacity>
          </View>
        );
      } else {
        return (
          <View style={[css.viewUserCard]}>
            <FastImage
              source={images.avatar}
              resizeMode={FastImage.resizeMode.contain}
              style={[css.iconAvt, {color: colors.submit}]}
            />
            <TouchableOpacity
              onPress={handleNavigate(NAVIGATION.LOGIN)}
              style={css.viewInfo}>
              <View style={css.viewInfoLeft}>
                <Text style={css.texWelcome}>Chào mừng bạn đến với Golden</Text>
                <Text style={css.textLogin}>Đăng nhập/Đăng ký</Text>
              </View>
              <Icon
                style={[css.iconRight, {color: colors.submit}]}
                name="chevron-right"
                type="MaterialCommunityIcons"
              />
            </TouchableOpacity>
          </View>
        );
      }
    };
    return <WrapperAuthenticate isAuthenticated={authenticated} />;
  }
}
