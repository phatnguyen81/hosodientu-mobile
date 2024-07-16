import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  Linking,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Header from '../../components/Header1';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../common/colors';
import {NAVIGATION} from '../../navigations/constants';
import css from './css';
import {Icon, Button} from 'native-base';
import {requestCameraPermission} from '../../shared/services';

const {width} = Dimensions.get('screen');

const options = {
  title: 'Chọn ảnh đại diện',
  customButtons: [],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
export default class CaNhan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }

  _onPressCamera() {
    // alert(" " + this.state.backhander)
  }

  _onPress_Website = () => {
    Linking.openURL('https://goldenhealthcarevn.com/');
  };

  _openLibrary = () => {
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

  toggleModal = () => {
    // this.setState({isModalVisible: !this.state.isModalVisible});
    this.props.navigation.navigate(NAVIGATION.VE_CHUNG_TOI);
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: colors.brdark1}}>
        <StatusBar barStyle={'light-content'} />
        <SafeAreaView style={{backgroundColor: colors.submit}} />
        <Header
          bgColor={colors.white}
          text={'Thông tin và cài đặt'}
          nameL="ios-arrow-back"
          typeL="Ionicons"
          onPressL={() => this.props.navigation.goBack()}
        />
        <View style={{height: 20, width, paddingBottom: 5}} />

        <View>
          <Text style={css.text_taikhoan}>TÀI KHOẢN</Text>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.push(NAVIGATION.SETTING_MATKHAU)
            }>
            <View style={css.view_thongtin}>
              <View style={css.view_circle}>
                <FontAwesome name="lock" size={16} color={colors.white} />
              </View>
              <Text>Đổi mật khẩu</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._openLibrary}>
            <View style={css.view_thongtin}>
              <View style={css.view_circle}>
                <Icon name="person" type="MaterialIcons" style={css.iconAvt} />
              </View>
              <Text>Đổi ảnh đại diện</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 25}}>
          <Text style={css.text_taikhoan}>ỨNG DỤNG</Text>
          <TouchableOpacity onPress={this._onPress_Website}>
            <View style={css.view_thongtin}>
              <View style={css.view_circle}>
                <Icon
                  name="web"
                  type="MaterialCommunityIcons"
                  style={css.iconOpenWeb}
                  color={colors.white}
                />
              </View>
              <Text> Website</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toggleModal}>
            <View style={css.view_thongtin}>
              <View style={css.view_circle}>
                <Entypo name="info" size={15} color={colors.white} />
              </View>
              <Text> Về chúng tôi</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={css.textVersion}>
          <Text>Phiên bản 1.0.0</Text>
        </View>
        {/* <Modal
          // swipeDirection={'down'}
          onSwipeCancel={this.toggleModal}
          isVisible={this.state.isModalVisible}
          propagateSwipe
          style={css.modal}>
          <View style={css.innerModal}>
            <View style={css.borderHeaderComp} />
            <View style={css.contentInnerModal}>
              <ContentModal />
              <TouchableOpacity
                onPress={this.toggleModal}
                style={css.buttonHideModal}

              >
                <Text style={{fontSize: 20}}>Trở lại</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal> */}
      </View>
    );
  }
}
