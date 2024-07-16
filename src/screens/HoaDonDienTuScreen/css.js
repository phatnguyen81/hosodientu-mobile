import {StyleSheet, Dimensions, Platform} from 'react-native';
import normalize from 'react-native-normalize';
import {StatusBarHeight} from '../../shared/getDeviceInfos';
import colors from '../../common/colors';
import Styles from '../../common/styles';

const {width, height} = Dimensions.get('window');

export const css = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEEE',
    flex: 1,
  },
  // ============= style for item header ===============
  containerItem: {
    width: '100%',
    alignItems: 'center',
    padding: Styles.padding.small,
    paddingTop: Styles.padding.smal,
    paddingBottom: 0,
  },
  viewFeatureItem: {
    backgroundColor: '#FFFFFF',
    height: normalize(80),
    flexDirection: 'row',
    padding: Styles.padding.medium,
    borderRadius: Styles.radius.small,
  },
  imgFeatureItem: {
    width: normalize(52),
    height: normalize(52),
  },
  textFeatureItem: {
    fontFamily: Styles.FontFamily.robotoBold,
    fontSize: normalize(18),
    marginLeft: Styles.margin.medium,
    textTransform: 'capitalize',
  },
  viewIconFeatureItem: {
    flexGrow: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  iconFeatureItem: {
    fontSize: 30,
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
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    elevation: 7,
  },
});
