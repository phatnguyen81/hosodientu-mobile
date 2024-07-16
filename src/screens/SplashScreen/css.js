import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import Styles, {height, width} from '../../common/styles';
import colors from '../../common/colors';

export const css = StyleSheet.create({
  container: {
    flex: 1,
  },
  bacground: {
    width: '60%',
    height: '10%',
    top: 0,
  },
  'form-button-login': {
    width: '70%',
    borderColor: colors.submit,
    borderWidth: 2,
    height: normalize(55),
    paddingVertical: Styles.padding.medium,
    marginTop: Styles.margin.small,
    borderRadius: 2 * Styles.radius.medium,

    position: 'absolute',
    top: height / 2 + normalize(50),
    left: -(0.7 * width),
  },
  'view-signup': {
    width: '100%',
    top: height / 2 - normalize(30),
    right: -width,
    position: 'absolute',
  },
  'form-button-signup': {
    width: '70%',
    paddingVertical: Styles.padding.medium,
    borderRadius: 2 * Styles.radius.medium,
  },
  'text-signin': {
    color: colors.submit,
    fontFamily: Styles.FontFamily.regular,
    fontSize: Styles.FontSize.large,
  },
  'text-signup': {
    color: '#FFFF',
    fontFamily: Styles.FontFamily.regular,
    fontSize: Styles.FontSize.large,
  },
});
