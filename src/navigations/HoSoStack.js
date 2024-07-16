import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {Transition} from 'react-native-reanimated';

import data from '../data/data.json';
import {NAVIGATION} from './constants';
import HoaDonDienTuScreen from '../containers/HoaDonDienTuScreen';
import HoSoScreen from '../containers/HoSoScreen';

export const HoSoStack = createStackNavigator(
  {
    [NAVIGATION.HO_SO]: {
      screen: props => <HoSoScreen {...props} data={data.main.account} />,
    },
    // [NAVIGATION.HOA_DON_DIEN_TU]: {
    //   screen: props => <HoaDonDienTuScreen {...props} data={data.main.bill} />,
    // },
  },
  {
    initialRouteName: NAVIGATION.HO_SO,
    transitionConfig: () => (
      <Transition.Together>
        <Transition.Out type="fade" durationMs={100} interpolation="linear" />
        <Transition.In type="fade" durationMs={100} />
      </Transition.Together>
    ),
    headerMode: 'none',

    headerLayoutPreset: 'center',
    navigationOptions: ({navigation}) => ({
      headerTintColor: 'red',
    }),
    cardStyle: {backgroundColor: '#FFFFFF'},
  },
);
