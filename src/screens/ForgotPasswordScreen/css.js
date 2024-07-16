import {StyleSheet, Dimensions, Platform} from 'react-native';
import normalize from 'react-native-normalize';
import {StatusBarHeight} from '../../shared/getDeviceInfos';
import colors from '../../common/colors';
import Styles from '../../common/styles';

const {width, height} = Dimensions.get('window');
const background = Platform.select({
  ios: {width, height, aspectRatio: 1, left: -40},
  android: {position: 'absolute', top: -100, width, height},
  default: {width, height, aspectRatio: 1, left: -40},
});

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
    flex: 1,
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
    flex: 2,
    // backgroundColor: '#00000012',
    paddingHorizontal: 2 * Styles.padding.large,
    paddingBottom: Styles.padding.large,
    justifyContent: 'space-between',
  },
  'form-item': {
    backgroundColor: '#FFFFFF',
    borderRadius: Styles.radius.tiny,
    borderColor: colors.line,
    borderWidth: 1,
    padding: Styles.padding.tiny,
    marginBottom: Styles.margin.medium,
  },
  'form-item-icon': {
    color: '#C9C9C8',
  },
  'form-item-input': {
    fontSize: Styles.FontSize.big,
    color: '#666666',
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
  'text-title': {
    color: '#666666',
    textAlign: 'center',
    fontFamily: Styles.FontFamily.joseRegular,
    fontSize: Styles.FontSize.big,
    paddingVertical: Styles.padding.big,
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
    fontFamily: Styles.FontFamily.joseRegular,
    fontSize: Styles.FontSize.large,
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
