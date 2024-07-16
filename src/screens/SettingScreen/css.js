import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';

import colors from '../../common/colors';
import Styles from '../../common/styles';
import normalize from 'react-native-normalize';

const {width, height} = Dimensions.get('screen');

const css = StyleSheet.create({
  view_thongtin: {
    height: 45,
    marginTop: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingLeft: Styles.padding.small,

    flexDirection: 'row',
  },
  view_circle: {
    height: 30,
    width: 30,
    borderRadius: 60,
    marginRight: 15,
    backgroundColor: colors.sliver,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textVersion: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Styles.padding.small,
  },
  text_info: {
    color: colors.white,
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
  },
  text_birthday: {
    color: colors.white,
    fontSize: 14,
  },
  text_score: {
    color: colors.white,
    fontSize: 16,
    margin: 5,
    marginBottom: 0,
  },
  text_taikhoan: {
    fontSize: 15,
    fontFamily: 'Roboto-Bold',
    margin: Styles.padding.small,
    marginTop: 0,
  },
  iconAvt: {
    fontSize: 20,
    color: colors.white,
  },
  iconOpenWeb: {
    fontSize: 17,
    color: colors.white,
    marginLeft: 1,
    marginTop: 2,
  },
  modal: {padding: 0, margin: 0, justifyContent: 'flex-end', flex: 1},
  innerModal: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  contentInnerModal: {
    width: '100%',
    height: '91%',
    backgroundColor: colors.white,
    padding: 20,
    paddingTop: 0,
    alignItems: 'flex-end',
    borderRadius: 18,
  },
  borderHeaderComp: {
    margin: 10,
    width: 50,
    height: 7,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  buttonHideModal: {
    // borderColor: colors.submit,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
export default css;
