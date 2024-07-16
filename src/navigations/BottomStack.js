import React from 'react';
import {StyleSheet, Platform} from 'react-native';

import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {HomeStack} from './HomeStack';
import {GoiKhamStack} from './GoiKhamStack';
import {LichKhamStack} from './LichKhamStack';

import Styles from '../common/styles';
import {Icon} from 'native-base';
import colors from '../common/colors';

import {HoSoStack} from './HoSoStack';
import {NAVIGATION} from './constants';
import ThongBaoScreen from '../containers/ThongBaoScreen';
import data from '../data/data.json';
import {execFetchReadAllListNotification} from '../redux/actions/thongBaoAction';
import AsyncStorage from '@react-native-community/async-storage';
import {ASYNC_STORAGE} from '../shared/constants';
const css = StyleSheet.create({
  icon: {
    // fontSize: 10,
    marginBottom: 5,
  },
});

const _onPressTabBar = async props => {
  const isReadAllNotification = await AsyncStorage.getItem(
    ASYNC_STORAGE.READ_ALL_NOTIFICATION,
  );
  // const data = yield call(execgetDataHomeList);
  // const userId = await AsyncStorage.getItem(ASYNC_STORAGE.USER_ID);

  // const deviceId = await AsyncStorage.getItem(ASYNC_STORAGE.DEVICE_ID);
  if (!!isReadAllNotification) {
    props.navigation.dispatch(execFetchReadAllListNotification());
    AsyncStorage.removeItem(ASYNC_STORAGE.READ_ALL_NOTIFICATION);
  }

  props.defaultHandler();
};

export const TabNavigator = createMaterialBottomTabNavigator(
  {
    [NAVIGATION.HOME]: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: 'Trang chủ',
        tabBarOnPress: _onPressTabBar,
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            name={focused ? 'home-account' : 'home'}
            type="MaterialCommunityIcons"
            style={[
              css.icon,
              {color: focused ? tintColor : colors.sliver, ...Styles.s20},
            ]}
          />
        ),
      },
    },
    [NAVIGATION.GOI_KHAM_STACK]: {
      screen: GoiKhamStack,
      navigationOptions: {
        tabBarOnPress: _onPressTabBar,
        tabBarLabel: 'Gói khám',
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            name={focused ? 'md-folder' : 'md-folder-open'}
            type="Ionicons"
            style={[
              css.icon,
              {color: focused ? tintColor : colors.sliver, ...Styles.s20},
            ]}
          />
        ),
      },
    },
    [NAVIGATION.LICH_KHAM_STACK]: {
      screen: LichKhamStack,
      navigationOptions: {
        tabBarOnPress: _onPressTabBar,
        tabBarLabel: 'Lịch khám',
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            name={focused ? 'calendar-check' : 'calendar-blank'}
            type="MaterialCommunityIcons"
            style={[
              css.icon,
              {color: focused ? tintColor : colors.sliver, ...Styles.s20},
            ]}
          />
        ),
      },
    },
    [NAVIGATION.THONG_BAO_STACK]: {
      screen: props => (
        <ThongBaoScreen {...props} data={data.main.notification} />
      ),
      navigationOptions: {
        tabBarLabel: 'Thông báo',
        tabBarOnPress: props => {
          AsyncStorage.setItem(ASYNC_STORAGE.READ_ALL_NOTIFICATION, 'true');
          props.defaultHandler();
        },
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            name={focused ? 'ios-notifications' : 'ios-notifications-outline'}
            type="Ionicons"
            style={[
              css.icon,
              {color: focused ? tintColor : colors.sliver, ...Styles.s20},
            ]}
          />
        ),
      },
    },
    [NAVIGATION.HO_SO_STACK]: {
      screen: HoSoStack,
      navigationOptions: {
        tabBarLabel: 'Hồ sơ',
        tabBarOnPress: _onPressTabBar,
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            name={'account'}
            type="MaterialCommunityIcons"
            style={[
              css.icon,
              {color: focused ? tintColor : colors.sliver, ...Styles.s20},
            ]}
          />
        ),
      },
    },
  },
  {
    initialRouteName: NAVIGATION.HOME,
    activeColor: colors.submit,
    inactiveColor: colors.sliver,
    shifting: false,
    barStyle: {
      height: Platform.OS === 'ios' ? 70 : 60,
      backgroundColor: '#FFFFFF',
      evalation: 0,
      padding: 0,
    },
  },
);
