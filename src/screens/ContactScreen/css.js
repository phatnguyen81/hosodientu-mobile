import {StyleSheet, Platform} from 'react-native';
import Styles, {width, height} from '../../common/styles';
import colors from '../../common/colors';
import normalize from 'react-native-normalize';

const css = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  container_bottom: {
    marginTop: height * 0.55 - 5,
    width,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 20,
  },
  view_thanh_ngang: {
    width: normalize(25),
    height: 3,
    borderRadius: Styles.radius.tiny,
    backgroundColor: colors.black,
    opacity: 0.6,
    marginTop: Styles.margin.tiny + 2,
  },
  viewTopDistance: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  view_tron: {
    width: normalize(13),
    height: normalize(13),
    borderRadius: 10,
    marginRight: Styles.margin.tiny + 2,
    backgroundColor: colors.submit,
  },
  view_do_bong: {
    alignItems: 'center',
    width: '95%',
    height: 6,
    opacity: 0.1,
    backgroundColor: 'black',
    borderTopLeftRadius: Styles.radius.large,
    borderTopRightRadius: Styles.radius.large,
  },
  view_chiduong: {
    width: '48%',
    height: normalize(45),
    backgroundColor: colors.white,
    borderRadius: normalize(25),
    borderWidth: 1.5,
    borderColor: colors.background,
    marginBottom: Styles.margin.small,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view_lienhe: {
    width: '48%',
    height: normalize(45),
    backgroundColor: colors.background,
    borderRadius: normalize(25),
    marginBottom: Styles.margin.small,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view_info_text: {
    alignItems: 'center',
    height: normalize(45),
    backgroundColor: colors.white, // todo
    borderRadius: Styles.radius.small,
    marginBottom: Styles.margin.small,
  },
  view_tinh_khoang_cach: {
    width: width * 0.9 + 10,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: Styles.padding.large,
    paddingHorizontal: Styles.padding.medium,
    justifyContent: 'space-between',
  },
  view_content_vitri: {
    width: width * 0.9 + 10,
    height: Platform.OS === 'ios' ? height * 0.35 : height * 0.34,
    backgroundColor: '#FFFF', // todo
    borderRadius: Styles.radius.large,
    alignItems: 'center',
    justifyContent: 'space-between',
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
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
  },
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,122,255,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0,112,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    height: 20,
    width: 20,
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#007AFF',
    borderWidth: 3,
    borderColor: 'white',
  },
  textPosition: {
    color: colors.black,
    fontFamily: Styles.FontFamily.robotoBold,
    fontSize: Styles.FontSize.medium,
  },
  textDistance: {
    color: colors.submit,
    fontFamily: Styles.FontFamily.robotoBold,
    fontSize: Styles.FontSize.medium,
  },
  textTitle: {
    textTransform: 'uppercase',
    fontFamily: Styles.FontFamily.robotoBold,
    fontSize: Styles.FontSize.medium,
    textAlign: 'center',
  },
  positionText: {
    fontSize: Styles.FontSize.tiny,
    marginTop: Styles.margin.tiny,
    color: colors.dimGray,
    textAlign: 'center',
  },
  positionTime: {
    fontSize: Styles.FontSize.small,
    marginTop: Styles.margin.tiny,
    fontFamily: Styles.FontFamily.robotoBold,
    color: '#2E7D32',
    textAlign: 'center',
  },
  image: {
    width: normalize(90),
    height: normalize(90),
    borderRadius: 100,
    margin: Styles.margin.tiny,
  },
  positionIcon: {
    color: colors.sliver,
    fontSize: normalize(20),
  },
  timeIcon: {
    color: '#2E7D32',
    marginTop: 5,
    fontSize: normalize(20),
  },
  viewAction: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: Styles.padding.small,
  },
  textChiDuong: {
    color: colors.background,
  },
  view_back: {
    width: '48%',
    height: normalize(45),
    backgroundColor: colors.white,
    borderRadius: normalize(25),
    borderWidth: 1.5,
    borderColor: colors.background,
    marginBottom: Styles.margin.small,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  topHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default css;
