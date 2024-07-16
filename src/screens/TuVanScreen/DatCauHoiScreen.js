import React, {Component, useEffect} from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Alert,
  StatusBar,
} from 'react-native';

import colors from '../../common/colors';
import {View, Text, Button} from 'react-native-ui-lib';
import Header from '../../components/Header1';

import {TUVAN} from './constants';
import css from './style';
import ModalDropdown from 'react-native-modal-dropdown';
import {ScrollView} from 'react-native-gesture-handler';
import {Icon, Label, Input} from 'native-base';

function covertListKhoa(cacKhoa) {
  const name = [];
  cacKhoa.map(value => {
    name.push(value.name);
  });
  return name;
}

export default function TuVanScreen(props) {
  useEffect(() => {
    const dataResPostTuVan = props.dataResPostTuVan;
    if (dataResPostTuVan !== '') {
      props.clearState();
      Alert.alert(
        'Câu hỏi của bạn sẽ được chuyển sang chế độ chờ duyệt. Cảm ơn bạn đã đặt câu hỏi.',
        '',
        [{text: 'ĐỒNG Ý', onPress: () => null}],
        {cancelable: false},
      );
    }
  });

  const header = props.navigation.state.params.navigationName;

  const validate = props.validate;

  return (
    <View flex>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={{backgroundColor: colors.submit}} />
      <Header
        bgColor={colors.white}
        text={header}
        nameL="ios-arrow-back"
        typeL="Ionicons"
        onPressL={() => props.goBack()}
      />
      <KeyboardAvoidingView behavior="padding" enabled>
        <View marginH-15 marginB-15>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Label style={css.title}>{TUVAN.TIEUDE}</Label>
              <Input
                placeholder={TUVAN.PLACEHOLDER_TIEUDE}
                placeholderTextColor={colors.dimGray}
                style={css.input}
                onChangeText={props.onChangeText('tieuDe')}
                value={props.tieuDe}
              />
              {validate.tieuDe ? (
                <Text style={css.txtValidate}>{validate.tieuDe}</Text>
              ) : null}
            </View>

            <View>
              <Label style={css.title}> {TUVAN.CHUYENKHOA}</Label>
              <View row spread style={css.input}>
                <ModalDropdown
                  defaultValue={TUVAN.PLACEHOLDER_CHUYENKHOA}
                  textStyle={[css.valueDropDown]}
                  style={css.modalDropdown}
                  options={covertListKhoa(props.cacKhoa)}
                  dropdownTextStyle={[css.valueDropDown]}
                  dropdownStyle={[css.dropdownStyle]}
                  dropdownTextHighlightStyle={[css.renderRow]}
                  onSelect={props.onChangeText('chuyenKhoa')}
                />
                <Icon type="AntDesign" name="down" style={css.icon} />
              </View>
              {validate.chuyenKhoa ? (
                <Text style={css.txtValidate}>{validate.chuyenKhoa}</Text>
              ) : null}
            </View>

            <View>
              <Label style={css.title}>{TUVAN.NOIDUNG}</Label>
              <Input
                multiline
                placeholder={TUVAN.PLACEHOLDER_NOIDUNG}
                placeholderTextColor={colors.dimGray}
                style={[css.input, css.inputNoiDung]}
                onChangeText={props.onChangeText('noiDung')}
                value={props.noiDung}
              />
              {validate.noiDung ? (
                <Text style={css.txtValidate}>{validate.noiDung}</Text>
              ) : null}
            </View>

            <View centerH>
              <Button
                backgroundColor={colors.buttonGreen}
                label="GỬI CÂU HỎI"
                labelStyle={[css.lableSend]}
                style={[css.btnSend]}
                onPress={props.handleGetDataFrom()}
              />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
