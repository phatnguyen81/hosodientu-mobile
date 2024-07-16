import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
// import {createBottomTabNavigator} from 'react-navigation-tabs';
import {fromRight, fromBottom} from 'react-navigation-transitions';

import SignInScreen from '../containers/SignInScreen';

import SignUpScreen from '../containers/RegisterScreen';

import SplashScreen from '../screens/SplashScreen';
// import SignInScreen from '../screens/SignInScreen';
import ForgotPasswordScreen from '../containers/ForgotPasswordScreen';

import data from '../data/data.json';
import {NAVIGATION, styles} from './constants';

// login stack

export const AuthStack = createAppContainer(
  createStackNavigator(
    {
      Login: {
        screen: props => <SignInScreen {...props} data={data.main.signIn} />,
      },
      SignUp: {
        screen: props => (
          <SignUpScreen type="user" {...props} data={data.main.signUp} />
        ),
      },
      Splash: {
        screen: props => <SplashScreen {...props} data={data.main.splash} />,
      },
      ForgotPassword: {
        screen: props => (
          <ForgotPasswordScreen {...props} data={data.main.forgotPassword} />
        ),
      },
    },
    {
      initialRouteName: NAVIGATION.LOGIN,
      headerMode: 'none',
      transitionConfig: () => fromBottom(500),

      navigationOptions: ({navigation}) => ({
        gesturesEnabled: false,
        headerTintColor: 'red',
      }),
      cardStyle: {backgroundColor: '#FFFFFF'},
    },
  ),
);
