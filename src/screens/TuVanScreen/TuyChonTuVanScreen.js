import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/Header1';
import Styles from '../../common/styles';
import colors from '../../common/colors';
import FastImage from 'react-native-fast-image';
import Images from '../../common/images';
import normalize from 'react-native-normalize';
import {NAVIGATION} from '../../navigations/constants';
import {TUVAN} from './constants';

const TuyChonTuVanScreen = ({navigation, user}) => {
  // navigaiton
  const _navigationName = navigationName => () => {
    if (!user) {
      navigation.push(NAVIGATION.AUTH_STACK);
    } else {
      if (navigationName === TUVAN.QUESTION) {
        navigation.push(NAVIGATION.TU_VAN_DAT_CAU_HOI, {navigationName});
      } else {
        navigation.push(NAVIGATION.TU_VAN_BAC_SI_TRA_LOI, {navigationName});
      }
    }
  };

  const FeatureItem = ({text, icon, navigationName}) => (
    <TouchableOpacity
      style={[css.containerItem]}
      onPress={_navigationName(navigationName)}>
      <View style={[css.viewFeatureItem]}>
        <View style={[Styles.Common.RowCenterLeft]}>
          <FastImage
            style={css.imgFeatureItem}
            source={icon}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Text style={css.textFeatureItem}>{text}</Text>
        </View>
        <View style={css.viewIconFeatureItem} />
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={css.container}>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={{backgroundColor: colors.submit}} />
      <Header
        bgColor={colors.white}
        text="Tư Vấn"
        nameL="ios-arrow-back"
        typeL="Ionicons"
        onPressL={() => navigation.pop()}
      />
      <FeatureItem
        text={TUVAN.QUESTION}
        icon={Images.question}
        navigationName={TUVAN.QUESTION}
      />
      <FeatureItem
        text={TUVAN.ANSWER}
        icon={Images.doctor}
        navigationName={TUVAN.ANSWER}
      />
    </View>
  );
};

export default TuyChonTuVanScreen;

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
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
    width: normalize(45),
    height: normalize(45),
  },
  textFeatureItem: {
    fontFamily: Styles.FontFamily.robotoBold,
    fontSize: normalize(18),
    marginLeft: Styles.margin.medium,
    // textTransform: 'capitalize',
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
});
