import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import Styles, {height, width} from '../../common/styles';
import colors from '../../common/colors';

export const css = StyleSheet.create({
  content: {
    height: '100%',
    // paddingHorizontal: Styles.padding.small,
  },
  title: {
    // fontSize: Styles.FontSize.large,
    // color: 'black',
  },
  holderBanner: {width: '100%', height: (width * 9) / 16},
  holderPostLeft: {
    width: 0.3 * width,
    height: (0.3 * width * 3) / 4,
    borderRadius: Styles.radius.tiny,
    marginRight: Styles.margin.small,
  },
  break: {
    width: width,
    height: 10,
    backgroundColor: colors.lightGray,
  },
});
