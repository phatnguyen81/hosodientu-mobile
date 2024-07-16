import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import {
  getTypeMobileDevice,
  StatusBarHeight,
} from '../../shared/getDeviceInfos';
import colors from '../../common/colors';
import Styles from '../../common/styles';

export const css = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  bacground: {
    width: '100%',
    height: '35%',
  },
  gradient: {
    width: '100%',
    height: '100%',
    opacity: 1,
  },
  'view-keyboard': {flex: 1, width: '100%', height: '100%'},
  title: {
    flex: 0.7,
    marginTop: normalize(StatusBarHeight),
  },
  'title-text': {
    marginTop: normalize(100),
    color: colors.white,
    fontFamily: Styles.FontFamily.robotoBold,
  },
  'title-text-keyboard': {
    marginTop: normalize(50),
    color: colors.white,
    fontFamily: Styles.FontFamily.robotoBold,
  },
  form: {
    flex: 2.1,
    // backgroundColor: '#00000012',
    paddingHorizontal: 2 * Styles.padding.large,
    paddingBottom: Styles.padding.large,
    justifyContent: 'space-between',
  },
  'form-item': {
    borderBottomWidth: 1,
    marginBottom: Styles.margin.tiny,
  },
  'form-item-icon': {
    color: '#C9C9C8',
  },
  'form-item-input': {
    fontSize: Styles.FontSize.small,
    paddingLeft: -5,
    height: {
      small: normalize(35),
      medium: normalize(37),
      lagre: normalize(35),
    }[getTypeMobileDevice()],
    color: '#000000',
  },
  'form-button-login': {
    width: '100%',
    backgroundColor: colors.submit,
    padding: Styles.padding.large,
    marginTop: Styles.margin.small,
    borderRadius: 2 * Styles.radius.medium,
  },
  'form-forgot': {
    alignItems: 'flex-end',
    width: '100%',
    marginBottom: Styles.margin.large,
  },
  'text-forgot': {
    color: '#666666',
    fontFamily: Styles.FontFamily.joseRegular,
    fontSize: Styles.FontSize.big,
  },
  'text-create': {
    color: '#666666',
    textAlign: 'center',
    fontFamily: Styles.FontFamily.joseRegular,
    fontSize: Styles.FontSize.medium,
  },
  'text-signup': {
    color: colors.submit,
    textAlign: 'center',
    fontFamily: Styles.FontFamily.joseBold,
    fontSize: Styles.FontSize.medium,
  },
  'text-login': {
    color: '#FFFF',
    fontFamily: Styles.FontFamily.regular,
    fontSize: Styles.FontSize.large,
  },
  'view-qr': {
    width: '50%',
    marginVertical: Styles.margin.small,
  },
  'text-qr': {
    color: '#FFFF',
    fontFamily: Styles.FontFamily.regular,
    fontSize: Styles.FontSize.small,
  },
  decoration: {
    height: 0, // height is '0' so that the view will not occupy space
    marginHorizontal: Styles.margin.tiny,
    borderTopColor: '#FFF',
    borderTopWidth: 0.7, // 'Thickness' of the underline
    marginTop: Styles.margin.tiny,
  },
  'form-button-create': {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  'view-year': {},
  radioButton: {
    padding: Styles.padding.small,
  },
  textError: {
    color: 'red',
    fontSize: Styles.FontSize.tiny,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
