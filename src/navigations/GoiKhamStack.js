/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import GoiKhamScreen from '../containers/GoiKhamScreen';
import {NAVIGATION} from './constants';

export const GoiKhamStack = createStackNavigator(
  {
    [NAVIGATION.GOIKHAM]: {
      screen: props => <GoiKhamScreen {...props} />,
    },
  },
  {
    initialRouteName: NAVIGATION.GOIKHAM,
    headerMode: 'none',

    headerLayoutPreset: 'center',
    navigationOptions: ({navigation}) => ({
      headerTintColor: 'red',
    }),
    cardStyle: {backgroundColor: '#FFFFFF'},
  },
);
