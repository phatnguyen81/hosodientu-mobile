import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import Styles from '../../common/styles';
import colors from '../../common/colors';
import {StatusBarHeight} from '../../shared/getDeviceInfos';

const Loader = ({background, light, isActionHeader}) => {
  let backgroundColor = background
    ? light
      ? 'rgba(255,255,255,0.5)'
      : 'rgba(0,0,0,0.2)'
    : '#FFFFFF';
  return (
    <View
      style={[
        css.container,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          backgroundColor: backgroundColor,
          bottom: isActionHeader ? -60 - StatusBarHeight : 0,
        },
        Styles.Common.ColumnCenter,
      ]}>
      <View style={[css.mainLoading, {backgroundColor: 'transparent'}]}>
        <ActivityIndicator color={colors.submit} size={'large'} />
      </View>
    </View>
  );
};

const css = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    height: '100%',
    width: '100%',
    zIndex: 100,
  },
  mainLoading: {
    backgroundColor: '#000',
    padding: Styles.padding.small,
    borderRadius: 35,
  },
});

export default Loader;
