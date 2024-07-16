import {StyleSheet, Dimensions, Platform} from 'react-native';
import normalize from 'react-native-normalize';
import {StatusBarHeight} from '../../shared/getDeviceInfos';
import colors from '../../common/colors';
import Styles from '../../common/styles';

const {width, height} = Dimensions.get('window');

export const css = StyleSheet.create({
  content: {
    backgroundColor: '#EEEEEE',
    height: '100%',
    flex: 1,
  },
  containerItem: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 15,
    paddingBottom: 20,
  },
  // ============== stype for title ================
  viewTitle: {
    // height: StatusBarHeight + normalize(20),
    justifyContent: 'flex-end',
    paddingVertical: Styles.padding.medium,
    paddingHorizontal: Styles.padding.small,
    backgroundColor: '#FFFFFF',
    marginBottom: Styles.margin.large,
  },
  textTitle: {
    fontFamily: Styles.FontFamily.robotoBold,
    fontSize: normalize(22),
    color: colors.submit,
  },
  // ============== stype for user card ================
  viewUserCard: {
    padding: Styles.padding.small,
    paddingTop: 40,
    marginBottom: Styles.margin.small,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  iconAvt: {
    width: normalize(55),
    height: normalize(55),
    color: '#C6C9DB',
  },
  imageAvt: {},
  viewInfo: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: Styles.padding.medium,
    height: '100%',
  },
  viewInfoLeft: {
    height: '100%',
    alignContent: 'space-between',
  },
  textName: {
    fontSize: normalize(22),
    marginBottom: 5,
    fontFamily: Styles.FontFamily.robotoBold,
    color: colors.darkText,
    textTransform: 'capitalize',
  },
  texWelcome: {
    fontSize: normalize(16),
    marginBottom: 5,
    fontFamily: Styles.FontFamily.roboto,
    // color: colors.dimGray,
  },
  textLogin: {
    fontFamily: Styles.FontFamily.robotoBold,
    fontSize: Styles.FontSize.large,
    color: colors.submit,
  },
  textDescription: {
    fontFamily: Styles.FontFamily.regular,
    fontSize: Styles.FontSize.small,
    color: '#9B9B9B',
  },
  iconRight: {
    fontSize: normalize(22),
    color: '#9B9B9B',
  },
  // ============== stype for item ================
  item: {
    width: width / 2 - 2 * 15,
    height: width / 2 - 2 * 30,
    marginTop: 1,
    marginLeft: 1,
    marginRight: 0.5,
    marginBottom: 0.5,
    backgroundColor: '#FFFFFF',
    // borderRadius: Styles.radius.medium,
  },
  itemImage: {
    width: normalize(70),
    height: normalize(70),
    marginBottom: Styles.margin.small,
  },
  itemText: {
    fontFamily: Styles.FontFamily.robotoBold,
    color: colors.darkText,
    fontSize: Styles.FontSize.medium,
  },
  // ============== style for logout ================
  logoutView: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: Styles.padding.small,
  },
  logoutButton: {
    backgroundColor: '#FFFFFF',
    width: '35%',
    justifyContent: 'center',
  },
  logoutText: {
    fontFamily: Styles.FontFamily.robotoItalic,
    color: colors.dimGray,
    fontSize: Styles.FontSize.small,
  },
  // ============== style for version text ================
  versionView: {
    backgroundColor: '#FAFAFA',
    flexGrow: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: Styles.padding.large,
    paddingBottom: Styles.padding.small,
  },
  versionText: {
    fontSize: Styles.FontSize.small,
    fontFamily: Styles.FontFamily.robotoItalic,
    color: colors.dimGray,
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
