import _ from 'lodash';
import {put, call, takeEvery, select} from 'redux-saga/effects';
import {setLoading} from '../actions/LoadingAction';
import AsyncStorage from '@react-native-community/async-storage';
import {
  FETCH_GET_NOTIFICATION,
  FETCH_READ_ALL_NOTIFICATION,
} from '../constants';
import {
  execGetNotificationsByDeviceId,
  execGetNotificationsByUserId,
  execReadNotificationByDeviceId,
  execReadNotificationByUserId,
} from '../api/api-thongBao';
import {execgoBack} from '../actions/authActions';
import {
  execSaveListNotificationForDevice,
  execReadAllListNotificationForDevice,
  execSaveListNotificationForUser,
  execReadAllListNotificationForUser,
} from '../actions/thongBaoAction';
import {ASYNC_STORAGE} from '../../shared/constants';

/* ====================================
 * HANDLE NOTIFICATION SAGAS
 * ====================================*/
export function* handleGetNotificationList() {
  try {
    // const data = yield call(execgetDataHomeList);
    const userString = yield AsyncStorage.getItem(ASYNC_STORAGE.USER_INFO_KEY);

    const deviceId = yield AsyncStorage.getItem(ASYNC_STORAGE.DEVICE_ID);
    // check call get datanotification theo deviceId
    let data;
    if (userString !== null) {
      const userId = JSON.parse(userString).userId;
      data = yield call(execGetNotificationsByUserId, {userId, deviceId});
      if (data.status === 200 || data.status === 201) {
        yield put(
          execSaveListNotificationForUser(data.json.reverse(), userId, true),
        );
        return;
      }
    } else if (deviceId !== null) {
      data = yield call(execGetNotificationsByDeviceId, deviceId);

      if (data.status === 200 || data.status === 201) {
        yield put(
          execSaveListNotificationForDevice(
            data.json.reverse(),
            deviceId,
            true,
          ),
        );
        return;
      }
    }
  } catch (err) {
    yield put(setLoading('thongBao', false));
    yield put(execgoBack());
  }
}

export function* watchHandleGetNotificationList() {
  yield takeEvery(FETCH_GET_NOTIFICATION, handleGetNotificationList); // call only
}

/* ====================================
 * HANDLE NOTIFICATION SAGAS
 * ====================================*/
export function* handleReadAllNotificationList() {
  try {
    // const data = yield call(execgetDataHomeList);
    const userId = yield AsyncStorage.getItem(ASYNC_STORAGE.USER_ID);
    const deviceId = yield AsyncStorage.getItem(ASYNC_STORAGE.DEVICE_ID);
    // check call get datanotification theo deviceId
    let data;
    if (userId !== null) {
      data = yield call(execReadNotificationByUserId, {userId, deviceId});
      // console.log('execReadAllListNotificationForUser', data);
      if (data.status === 200 || data.status === 201) {
        yield put(execReadAllListNotificationForUser(userId));
        return;
      }
    } else if (deviceId !== null) {
      data = yield call(execReadNotificationByDeviceId, deviceId);
      // console.log('execReadAllListNotificationForDevice', data);
      if (data.status === 200 || data.status === 201) {
        yield put(execReadAllListNotificationForDevice(deviceId));
        return;
      }
    }
  } catch (err) {
    yield put(setLoading('thongBao', false));
  }
}

export function* watchHandleReadAllNotificationList() {
  yield takeEvery(FETCH_READ_ALL_NOTIFICATION, handleReadAllNotificationList); // call only
}
