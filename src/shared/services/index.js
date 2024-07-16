import Geolocation from 'react-native-geolocation-service';
import {PermissionsAndroid, Platform, Alert} from 'react-native';
import {
  check,
  PERMISSIONS,
  RESULTS,
  openSettings,
  checkNotifications,
  requestNotifications,
} from 'react-native-permissions';
import AsyncStorage from '@react-native-community/async-storage';
// Render any loading content that you like here
export const requestLocationPermission = async () => {
  const askLocation = await AsyncStorage.getItem('askLocation');
  AsyncStorage.setItem('askLocation', 'true');
  if (Platform.OS === 'ios') {
    await Geolocation.requestAuthorization();
    check(PERMISSIONS.IOS.LOCATION_ALWAYS)
      .then(result => {})
      .catch(error => {
        // …
      });

    // this.getGeoLocation();
  } else {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      } else {
      }
    } catch (err) {}
  }
};

export const requestOpenCameraPermission = async (
  clusorFunc = () => console.log('Cancel Pressed'),
) => {
  if (Platform.OS === 'ios') {
    check(PERMISSIONS.IOS.CAMERA)
      .then(result => {
        // console.log('result', result);
      })
      .catch(error => {
        // …
      });

    // this.getGeoLocation();
  } else {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cho phép truy cập Camera',
          message: 'Ứng dụng cần truy cập Camera của bạn',
          buttonNeutral: 'NHẮC LẠI SAU',
          buttonNegative: 'THOÁT',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // console.log('You can use the camera');
      } else {
        // console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }
};

export const requestCameraPermission = async (clusorFunc = () => null) => {
  if (Platform.OS === 'ios') {
    check(PERMISSIONS.IOS.PHOTO_LIBRARY)
      .then(result => {
        // console.log('result', result);
      })
      .catch(error => {
        // …
      });

    // this.getGeoLocation();
  } else {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cho phép truy cập Camera',
          message: 'Ứng dụng cần truy cập Camera của bạn',
          buttonNeutral: 'NHẮC LẠI SAU',
          buttonNegative: 'THOÁT',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // console.log('You can use the camera');
      } else {
        // console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }
};

export const checkNotification = async () => {
  if (Platform.OS === 'ios') {
    checkNotifications()
      .then(result => {})
      .catch(error => {
        // …
      });

    // this.getGeoLocation();
  }
};

export const requestNotification = async () => {
  if (Platform.OS === 'ios') {
    requestNotifications(['alert', 'sound']).then(({status, settings}) => {
      // …
    });

    // this.getGeoLocation();
  }
};
