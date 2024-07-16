import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Styles from '../../../common/styles';
import normalize from 'react-native-normalize';
import colors from '../../../common/colors';

const Title = ({title}) => {
  return (
    <View style={css.viewTitle}>
      <Text style={css.textTitle}>{title}</Text>
    </View>
  );
};

export default Title;

const css = StyleSheet.create({
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
});
