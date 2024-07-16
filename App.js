import React, {Component} from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
  Platform,
  BackHandler,
  YellowBox,
} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import codePush from 'react-native-code-push';

// import AppReducer from './src/redux/reducers';
import {
  AppAuthNavigator,
  MainAppNavigator,
} from './src/navigations/AppNavigation';
import configureStore from './src/redux/store';
import onesignal from './src/shared/lib/onesignal';
import AsyncStorage from '@react-native-community/async-storage';
import {ASYNC_STORAGE} from './src/shared/constants';
import {
  execCreateNotificationByDeviceId,
  execGetNotificationsByDeviceId,
} from './src/redux/api/api-thongBao';
import {execSaveListNotificationForDevice} from './src/redux/actions/thongBaoAction';
import {THONG_BAO_STACK} from './src/redux/constants';
import {NavigationActions} from 'react-navigation';
const store = configureStore();

console.disableYellowBox = true;
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated', // works
  'Module RCTImageLoader', // works
  'Require cycle:', // doesn't work
]);
class App extends Component {
  createNotifications = async deviceId => {
    const isCheckCreateNotification = await AsyncStorage.getItem(
      ASYNC_STORAGE.CHECK_CREATE_NOTIFICATIONS,
    );
    if (isCheckCreateNotification === null) {
      // console.log('+++++deviceId++++', deviceId);
      try {
        const resultCheckCreateNotifications = await execCreateNotificationByDeviceId(
          deviceId,
        );

        if (
          resultCheckCreateNotifications.status === 200 ||
          resultCheckCreateNotifications.status === 201
        ) {
          const notifications = await execGetNotificationsByDeviceId(deviceId);
          if (notifications.status === 200 || notifications.status === 201) {
            await AsyncStorage.setItem(
              ASYNC_STORAGE.CHECK_CREATE_NOTIFICATIONS,
              'true',
            );
            store.dispatch(
              execSaveListNotificationForDevice(
                notifications.json.reverse(),
                deviceId,
              ),
            );
          }
        }
      } catch (error) {
        // Toast.showBottom(error);
      }
    }
  };

  onBackPress = () => {
    const back = NavigationActions.back();
    const currentState = store.getState().nav;
    const nextState = MainAppNavigator.router.getStateForAction(
      back,
      store.getState().nav,
    );
    // state are equals, we return false to exit app
    if (equal(currentState, nextState)) {
      return false;
    }
    store.dispatch(NavigationActions.back());

    return true;
  };

  navigationToThongBao = () => {};
  async componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    // handle notifications
    const userId = await AsyncStorage.getItem(ASYNC_STORAGE.USER_ID);
    const type = onesignal.getSegment(userId);

    onesignal.getUserIdPushNotification(
      type,
      () => store.dispatch({type: THONG_BAO_STACK}),
      this.createNotifications,
    );
  }

  componentWillUnmount = () => {
    onesignal.removeEventListener();
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    this.mounted = false;
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  };
  render() {
    // return <ContactScreen />
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <Provider store={store}>
          <AppAuthNavigator />
        </Provider>
        <FlashMessage position="top" />
      </View>
    );
  }
}

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
  installMode: codePush.InstallMode.IMMEDIATE,
};

const equal = (route, nextRoute) => {
  // not same index ? no need to go further, not equal
  if (route.index !== nextRoute.index) {
    return false;
  }
  // no routes ? this is not a navigator, just ignore it. Equal!
  if (!route.routes) {
    return true;
  }
  // Loop over each routes and try to find one which is not equal
  return !route.routes.some((r, i) => !equal(r, nextRoute.routes[i]));
};

export default codePush(codePushOptions)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
