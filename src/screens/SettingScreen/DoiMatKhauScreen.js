import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, SafeAreaView} from 'react-native';
import {Text, Input, Card, CardItem, Body, Item} from 'native-base';
import Header from '../../components/Header1';
// import {showMessage, hideMessage} from 'react-native-flash-message';
import colors from '../../common/colors';
import Styles from '../../common/styles';
// import PhienDangNhapModal from '../xoaPhienDangNhap/PhienDangNhapModal';
import * as MSG from '../../shared/constants/Messages';

const {width, height} = Dimensions.get('screen');

export default class DoiMatKhau extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      oldPassword: null,
      newPassword: null,
      confirmNewPass: null,
      isFirstSubmit: false,
    };
  }
  handleSubmit = () => {
    const {user} = this.props;
    const {oldPassword, newPassword} = this.state;
    const data = {
      id: user.userId,
      oldPassword,
      newPassword,
    };
    if (!this.isErrorValidate()) {
      this.props.changePassword(data);
    } else {
      this.setState({isFirstSubmit: true});
    }
  };
  isErrorValidate = () =>
    this.getErrorValidate(this.state.oldPassword) ||
    this.getErrorValidate(this.state.newPassword) ||
    this.getErrorValidate(this.state.confirmNewPass, 'confirm');

  _onChangeText = name => text => this.setState({[name]: text});

  back() {
    this.props.navigation.goBack();
  }

  getErrorValidate = (value, type) => {
    const {newPassword} = this.state;
    if (type === 'confirm' && value !== newPassword) return 'Không khớp';
    if (!value) return 'Bắt buộc';
    return false;
  };

  render() {
    const {
      newPassword,
      oldPassword,
      confirmNewPass,
      isFirstSubmit,
    } = this.state;
    return (
      <View style={css.container}>
        <SafeAreaView style={{backgroundColor: colors.submit}} />
        <Header
          bgColor={colors.white}
          text={'Thông tin và cài đặt'}
          nameL="ios-arrow-back"
          typeL="Ionicons"
          textR="Lưu"
          onPressL={() => this.props.navigation.goBack()}
          onPressR={this.handleSubmit}
        />
        <View style={{padding: 5}}>
          <View style={css.view_row}>
            <View style={{width: 130}}>
              <Text style={css.text_line_group}>Mật khẩu hiện tại</Text>
            </View>

            <View style={css.viewInput}>
              <Input
                placeholder="Nhập mật khẩu hiện tại"
                placeholderTextColor={colors.dimGray}
                style={css.text_input}
                onChangeText={this._onChangeText('oldPassword')}
                secureTextEntry
              />
              <Text style={css.textCheckPass}>
                {isFirstSubmit ? this.getErrorValidate(oldPassword) : ''}
              </Text>
            </View>
          </View>

          <View style={css.view_row}>
            <View style={{width: 130}}>
              <Text style={css.text_line_group}>Mật khẩu mới</Text>
            </View>

            <View style={css.viewInput}>
              <Input
                placeholder="Nhập mật khẩu mới"
                placeholderTextColor={colors.dimGray}
                style={css.text_input}
                onChangeText={this._onChangeText('newPassword')}
                secureTextEntry
              />
              <Text style={css.textCheckPass}>
                {isFirstSubmit ? this.getErrorValidate(newPassword) : ''}
              </Text>
            </View>
          </View>
          <View style={css.view_row}>
            <View style={{width: 130}}>
              <Text style={css.text_line_group}>Nhập lại mật khẩu</Text>
            </View>
            <View style={css.viewInput}>
              <Input
                placeholder="Nhập lại mật khẩu"
                placeholderTextColor={colors.dimGray}
                style={css.text_input}
                secureTextEntry
                onChangeText={this._onChangeText('confirmNewPass')}
              />
              <Text style={css.textCheckPass}>
                {isFirstSubmit
                  ? this.getErrorValidate(confirmNewPass, 'confirm')
                  : ''}
              </Text>
            </View>
          </View>
          <Card>
            <CardItem header bordered>
              <Text>Chính sách đặt mật khẩu</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text
                  style={css.textDes}>{`- Mật khẩu mới phải có ít nhất 9 ký tự
- Mật khẩu mới không được chứa tên riêng,tên đệm hoặc họ
- Không sử dụng lại mật khẩu đã từng sử dụng trước đây (tính từ 5 mật khẩu sử dụng gần đây nhất)
- Mật khẩu mới phải có ÍT NHẤT:
    + một (1) chữ thường: a-z
    + một (1) chữ in hoa: A-Z
    + một (1) ký tự đặc biệt: ! @ $ % ^ * ( ) _ ~ + - = [ ] { } < >
    + một (1) số (0-9)`}</Text>
              </Body>
            </CardItem>
          </Card>
        </View>
      </View>
    );
  }
}
const css = StyleSheet.create({
  container: {
    width,
    height,
  },
  view_email: {
    margin: 10,
  },
  view_row: {
    marginBottom: 1,
    alignItems: 'center',
    backgroundColor: colors.bgDark,
    padding: 5,
    flexDirection: 'row',
  },
  textDes: {
    fontFamily: Styles.FontFamily.robotoItalic,
  },
  text_email: {
    fontSize: 13,
    color: colors.dimGray,
  },
  text_line_group: {
    marginRight: 5,
    fontSize: 14,
    fontFamily: 'Roboto-Bold',
  },
  text_input: {
    fontSize: 14,
    padding: 1,
    // borderRadius: 5,
    height: 35,
    borderColor: colors.dimGray,
    // borderWidth: 1
  },
  textCheckPass: {
    color: 'red',
    fontSize: Styles.FontSize.tiny,
  },
  viewInput: {
    width: width - 160,
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
