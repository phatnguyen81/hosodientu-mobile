import {NAVIGATION} from '../../navigations/constants';
import {MainAppNavigator} from '../../navigations/AppNavigation';
import {NavigationActions, StackActions} from 'react-navigation';
import {CommonActions} from '@react-navigation/native';
import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  WELCOME,
  TAB_NAVIGATION,
  RESET_PASSWORD,
  RE_AUTHENTICATED,
  GOBACK,
  QRCODED_TRA_CUU_NHANH,
  THONG_BAO_STACK,
} from '../constants';

const ThongBaoStack = MainAppNavigator
  ? MainAppNavigator.router.childRouters.ThongBaoStack
  : null;

const initialNavState = MainAppNavigator.router.getStateForAction(
  NavigationActions.navigate(NAVIGATION.SPLASH),
);

const nav = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case WELCOME:
    case RESET_PASSWORD:
      nextState = MainAppNavigator.router.getStateForAction(
        NavigationActions.navigate({routeName: NAVIGATION.LOGIN}),
        state,
      );
      break;
    case GOBACK:
      nextState = MainAppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state,
      );
      break;
    case NAVIGATION.SIGNUP:
      nextState = MainAppNavigator.router.getStateForAction(
        NavigationActions.navigate({routeName: NAVIGATION.SIGNUP}),
        state,
      );
      break;

    case AUTHENTICATED:
      nextState = MainAppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state,
      );
      break;
    case RE_AUTHENTICATED:
    case TAB_NAVIGATION:
      nextState = MainAppNavigator.router.getStateForAction(
        NavigationActions.navigate({routeName: NAVIGATION.TAB_NAVIGATION}),
        state,
      );
      break;
    case UNAUTHENTICATED:
      nextState = MainAppNavigator.router.getStateForAction(
        NavigationActions.navigate({routeName: NAVIGATION.HO_SO}),
        state,
      );
      break;
    case NAVIGATION.FORGOT_PASSWORD:
      nextState = MainAppNavigator.router.getStateForAction(
        NavigationActions.navigate({routeName: NAVIGATION.FORGOT_PASSWORD}),
        state,
      );
      break;
    case NAVIGATION.LOGOUT:
      nextState = MainAppNavigator.router.getStateForAction(
        NavigationActions.navigate({routeName: NAVIGATION.AUTH_STACK}),
        state,
      );
      break;
    case QRCODED_TRA_CUU_NHANH:
      nextState = MainAppNavigator.router.getStateForAction(
        NavigationActions.navigate({routeName: NAVIGATION.BANG_TRA_CUU}),
        state,
      );
      break;
    case THONG_BAO_STACK:
      nextState = ThongBaoStack.router.getStateForAction(
        NavigationActions.navigate({routeName: NAVIGATION.THONG_BAO_STACK}),
        state,
      );
      break;
    default:
      nextState = MainAppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
export default nav;
