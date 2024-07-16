import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {fromLeft} from 'react-navigation-transitions';
import HomeScreen from '../containers/HomeScreen';

import data from '../data/data.json';
import {styles, NAVIGATION} from './constants';

export const HomeStack = createStackNavigator(
  {
    [NAVIGATION.HOME]: {
      screen: props => <HomeScreen {...props} data={data.main.signIn} />,
    },
  },
  {
    initialRouteName: NAVIGATION.HOME,
    transitionConfig: () => fromLeft(2000),
    headerMode: 'none',

    headerLayoutPreset: 'center',
    navigationOptions: ({navigation}) => ({
      headerTintColor: 'red',
    }),
    cardStyle: {backgroundColor: '#FFFFFF'},
  },
);
