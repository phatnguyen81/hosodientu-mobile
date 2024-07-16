import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import LichKhamScreen from '../containers/LichKhamScreen';
import {NAVIGATION} from './constants';
import data from '../data/data.json';

export const LichKhamStack = createStackNavigator(
  {
    LichKham: {
      screen: props => (
        <LichKhamScreen {...props} data={data.main.examinationSchedule} />
      ),
    },
  },
  {
    initialRouteName: NAVIGATION.LICHKHAM,
    headerMode: 'none',

    headerLayoutPreset: 'center',
    navigationOptions: ({navigation}) => ({
      headerTintColor: 'red',
    }),
    cardStyle: {backgroundColor: '#FFFFFF'},
  },
);
