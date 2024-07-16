import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import colors from '../../common/colors';
import Styles from '../../common/styles';

export const css = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    width: '90%',
    height: 200,
    borderRadius: 10,
    borderWidth: 1,
  },
  content: {
    padding: 20,
    width: '100%',
  },
  textHuongDan: {
    fontStyle: 'italic',
    fontSize: 16,
    marginBottom: 20,
  },
  textQrCode: {
    color: colors.white,
    fontSize: 16,
  },
  btnQRcode: {
    color: colors.submit,
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
