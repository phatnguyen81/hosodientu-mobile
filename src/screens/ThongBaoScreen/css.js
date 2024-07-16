import {StyleSheet, Dimensions, Platform} from 'react-native';
import normalize from 'react-native-normalize';
import {StatusBarHeight} from '../../shared/getDeviceInfos';
import colors from '../../common/colors';
import Styles from '../../common/styles';

export const css = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    backgroundColor: '#FAFAFA',
  },
  containerItem: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  // ============== stype for title ================
  viewTitle: {
    // height: StatusBarHeight + normalize(20),
    justifyContent: 'flex-end',
    paddingVertical: Styles.padding.medium,
    paddingHorizontal: Styles.padding.small,
    backgroundColor: '#FFFFFF',
  },
  textTitle: {
    fontFamily: Styles.FontFamily.robotoBold,
    fontSize: normalize(22),
    color: colors.submit,
  },
  // ============== stype for user card ================
  viewCardSetting: {
    // marginBottom: 20,
  },
  // ============== shadow ================
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  shadow1: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
});
