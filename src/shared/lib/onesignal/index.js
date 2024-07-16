import {Platform} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import OneSignal from 'react-native-onesignal'; // Import package from node modules
import {ONESIGNAL_APP_ID} from './constants';
import {ASYNC_STORAGE} from '../../constants';
import {
  execSaveDeviceId,
  execGetDeviceById,
} from '../../../redux/api/api-thongBao';
import Toast from '../../../components/Toast';
let createNotificationsTmp = null;
const getUserIdPushNotification = (
  typeUser,
  navigationToThongBao,
  createNotifications,
) => {
  createNotificationsTmp = createNotifications;
  OneSignal.init(ONESIGNAL_APP_ID, {
    kOSSettingsKeyAutoPrompt: false,
    kOSSettingsKeyInAppLaunchURL: false,
    kOSSettingsKeyInFocusDisplayOption: 2,
  });
  OneSignal.inFocusDisplaying(2); // show notification

  // The promptForPushNotifications function code will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step below)
  OneSignal.promptForPushNotificationsWithUserResponse(myiOSPromptCallback);

  Platform.OS !== 'ios' && OneSignal.enableVibrate(true);
  Platform.OS !== 'ios' && OneSignal.enableSound(true);
  Platform.OS !== 'ios' && OneSignal.setSubscription(true);
  OneSignal.sendTag('user_type', typeUser);
  OneSignal.getTags(receivedTags => {});

  OneSignal.addEventListener('received', onReceived);

  OneSignal.addEventListener('opened', openResult =>
    onOpened(openResult, navigationToThongBao),
  );
  OneSignal.addEventListener('ids', onIds);
};

const getSegment = userId => {
  let type = userId !== null ? 'customer' : 'guest';
  return type;
};

const removeEventListener = () => {
  // call in componentWillUnMount
  OneSignal.removeEventListener('received', onReceived);
  OneSignal.removeEventListener('opened', onOpened);
  OneSignal.removeEventListener('ids', onIds);
};

const onReceived = notification => {};
const onOpened = (openResult, navigationToThongBao) => {
  if (openResult.action && openResult.action.actionID) {
    navigationToThongBao();
  }
};
const onIds = async device => {
  const deviceId = await AsyncStorage.getItem(ASYNC_STORAGE.DEVICE_ID);
  // console.log('------------------devddiceId----------------', deviceId);
  if (!deviceId) {
    await AsyncStorage.clear();
    // chua co device ID
    try {
      const deviceResult = await execGetDeviceById(device.userId);
      // console.log('------------------deviceId----------------', deviceResult);
      if (deviceResult.status === 200 || deviceResult.status === 201) {
        if (device.userId !== null) {
          AsyncStorage.setItem(ASYNC_STORAGE.DEVICE_ID, device.userId);
        }
      } else if (deviceResult.status === 204) {
        const resultCreateDevice = await execSaveDeviceId(device.userId);
        // console.log(
        //   '------------------resultCreateDevice----------------',
        //   resultCreateDevice,
        // );
        if (
          resultCreateDevice.status === 200 ||
          resultCreateDevice.status === 201
        ) {
          // console.log('------------------onIds----------------', device.userId);
          if (device.userId !== null) {
            await AsyncStorage.setItem(ASYNC_STORAGE.DEVICE_ID, device.userId);
          }
          await createNotificationsTmp(device.userId);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
};

function myiOSPromptCallback(permission) {
  // do something with permission value
}

export default {
  getUserIdPushNotification,
  removeEventListener,
  getSegment,
};
