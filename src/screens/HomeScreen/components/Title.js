import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import colors from '../../../common/colors';
import {StatusBarHeight} from '../../../shared/getDeviceInfos';
import normalize from 'react-native-normalize';
import Styles, {width} from '../../../common/styles';
import FastImage from 'react-native-fast-image';
import Images from '../../../common/images';

const Title = ({
  title,
  isIcon,
  style,
  paddingVertical,
  isLogo,
  numberNotification = 0,
  onPress,
  number,
}) => {
  return (
    <View
      style={[
        css.viewTitle,
        {paddingVertical: paddingVertical || Styles.padding.medium},
      ]}>
      {isLogo ? (
        <FastImage
          source={Images.splashBackground}
          resizeMode={FastImage.resizeMode.contain}
          style={{width: normalize(150), height: normalize(40)}}
        />
      ) : (
        <Text style={[css.textTitle, style]}>{title}</Text>
      )}
      {isLogo && <Text style={[css.textTitle, style]}>{number}</Text>}
      {isIcon && (
        <TouchableOpacity onPress={onPress}>
          <Icon
            name="ios-notifications"
            type="Ionicons"
            style={[
              css.iconNotification,
              // eslint-disable-next-line react-native/no-inline-styles
              {marginRight: numberNotification ? 10 : 0},
            ]}
          />
          {numberNotification !== 0 && (
            <View style={css.numberNotificationView}>
              <Text style={css.numberNotificationText}>
                {numberNotification < 100 ? numberNotification : '99+'}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Title;

const css = StyleSheet.create({
  // ============== stype for title ================
  viewTitle: {
    // height: StatusBarHeight + normalize(20),
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 0,
    backgroundColor: colors.white,
    paddingVertical: Styles.padding.medium,
  },
  textTitle: {
    fontFamily: Styles.FontFamily.robotoBold,
    fontSize: normalize(22),
    color: colors.submit,
  },
  textNumber: {
    fontFamily: Styles.FontFamily.sourceSansProBold,
    fontSize: normalize(22),
    color: colors.submit,
  },
  //--------- style for icon ------------
  iconNotification: {
    color: colors.submit,
    fontSize: normalize(25),
  },
  numberNotificationView: {
    top: -10,
    left: 6,
    position: 'absolute',
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: 'red',
  },
  numberNotificationText: {
    fontSize: normalize(10),
    color: colors.white,
  },
});
