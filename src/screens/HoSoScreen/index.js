import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import {Container, Button, Content} from 'native-base';
import ImagePicker from 'react-native-image-picker';

// import component
import {Title, Item, UserCard} from './components';

// import css
import {css} from './css';
import images from '../../common/images';
import {NAVIGATION} from '../../navigations/constants';
import onesignal from '../../shared/lib/onesignal';
import AsyncStorage from '@react-native-community/async-storage';
import {ASYNC_STORAGE} from '../../shared/constants';
import {requestCameraPermission} from '../../shared/services';

const options = {
  title: 'Chọn ảnh đại diện',
  customButtons: [],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
export default class HoSoScreen extends Component {
  handleNavigate = (name, isWithoutAuth, index) => () => {
    const {navigation, authenticated} = this.props;
    authenticated || isWithoutAuth || index === 6
      ? navigation.push(name)
      : navigation.navigate(NAVIGATION.LOGIN);
  };

  handleChangeAvatar = () => {
    const {navigation, authenticated} = this.props;
    authenticated ? this.openLibrary() : navigation.navigate(NAVIGATION.LOGIN);
  };

  // async componentDidUpdate() {
  //   const userId = await AsyncStorage.getItem(ASYNC_STORAGE.USER_ID);
  //   const type = onesignal.getSegment(userId);
  //   await onesignal.getUserIdPushNotification(
  //     type,
  //     this.handleActionQuanLyNhan,
  //   );
  // }
  // componentWillUnmount() {
  //   onesignal.removeEventListener();
  // }

  openLibrary = () => {
    const {updateAvatar, changeSettingLoading} = this.props;
    // Open Image Library:

    requestCameraPermission();

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
      } else {
        changeSettingLoading('setting', true);
        // const source = { uri: response.uri };
        const source = {uri: 'data:image/jpeg;base64,' + response.data};
        updateAvatar(source.uri);
      }
    });
  };

  render() {
    const {data, user, authenticated} = this.props;
    return (
      <Container>
        <StatusBar barStyle={'dark-content'} />
        <Content
          style={css.content}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}>
          <View>
            <View style={css.content}>
              {/* handle header */}
              {/* <Title title={data.title} /> */}
              {/* handle card UI */}
              <UserCard
                user={user}
                data={data.setting}
                authenticated={authenticated}
                handleNavigate={this.handleNavigate}
                updateAvatar={this.props.updateAvatar}
              />

              {/* handle item */}
              <View style={css.containerItem}>
                <Item
                  index={1}
                  onPress={this.handleNavigate(NAVIGATION.HOA_DON_DIEN_TU)}
                  image={images.bill}
                  text={data.actionText.bill}
                />
                <Item
                  index={2}
                  image={images.calendar}
                  text={data.actionText.calendar}
                  onPress={() =>
                    this.props.navigation.navigate(NAVIGATION.LICH_KHAM_STACK)
                  }
                />
                <Item
                  index={3}
                  image={images.advisory}
                  text={data.actionText.advisory}
                  onPress={this.handleNavigate(NAVIGATION.TU_VAN, true)}
                />
                <Item
                  index={4}
                  image={images.contact}
                  text={data.actionText.contact}
                  onPress={this.handleNavigate(NAVIGATION.LIEN_HE, true)}
                />
                <Item
                  index={5}
                  image={images.changeAvt}
                  text={data.actionText.changeAvt}
                  onPress={this.handleChangeAvatar}
                />
                <Item
                  index={6}
                  onPress={this.handleNavigate(NAVIGATION.TRA_CUU_NHANH, 6)}
                  image={images.search}
                  isSmall
                  text={data.actionText.search}
                />
              </View>
              {/* handle button logout */}
              {authenticated && (
                <View style={css.logoutView}>
                  <Button
                    onPress={this.props.logout}
                    rounded
                    style={[css.logoutButton, css.shadow1]}>
                    <Text style={css.logoutText}>{data.logout}</Text>
                  </Button>
                </View>
              )}
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

HoSoScreen.propTypes = {
  logout: PropTypes.func,
  data: PropTypes.object,
  user: PropTypes.object,
  authenticated: PropTypes.bool,
};
