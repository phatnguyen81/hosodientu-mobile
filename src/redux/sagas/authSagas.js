import _ from 'lodash';
import {put, call, takeEvery, select} from 'redux-saga/effects';
import Base64Binary from 'base64-arraybuffer';
import {execAuthenticate} from '../api/api-auth';
import {
  execGetUserInfo,
  execRegister,
  execGetPatientByQrCode,
  execResetPassword,
  execChangePassword,
  execUpdateAvatar,
} from '../api/api-user';
import {
  FETCH_AUTHENTICATE,
  UNAUTHENTICATED,
  FETCH_UNAUTHENTICATE,
  FETCH_REGISTER,
  FETCH_QRCODE,
  WELCOME,
  FETCH_RESET_PASSWORD,
  FETCH_CHANGE_PASSWORD,
  FETCH_CHANGE_AVATAR,
} from '../constants';

import {cacheTokenAsync} from '../../shared/asyncStorage/TokenStorageUtil';
import AsyncStorage from '@react-native-community/async-storage';
import {setLoading} from '../actions/LoadingAction';
import {
  execAuthenticateSuccess,
  execAuthenticateError,
  execRegisterError,
  execQRCodeError,
  execQRCodeSuccess,
  execResetUser,
  execResetPasswordSuccess,
  execResetPasswordError,
  saveUserInfo,
  setUserInfo,
  execChangePasswordError,
  execLogout,
  execChangeAvatarError,
  execChangeAvatarSuccess,
  execgoBack,
} from '../actions/authActions';
import * as MSG from '../../shared/constants/Messages';

import Toast from '../../components/Toast';
import ActivatePatientPostModel from '../../models/activatePatientPostModel';
import {checkSession} from '../api/checkSession';
import {ASYNC_STORAGE} from '../../shared/constants';
import {
  execUpdateUserIdInDevice,
  execRemoveUserIdInDevice,
  execGetNotificationsByUserId,
} from '../api/api-thongBao';
import {execSaveListNotificationForUser} from '../actions/thongBaoAction';

/* ====================================
 * HANDLE LOGIN
 * ====================================*/
export function* handleAuthenticate({payload}) {
  try {
    yield put(setLoading('users', true)); // loading wait for api
    const user = yield yield call(execAuthenticate, payload);
    const deviceId = yield AsyncStorage.getItem(ASYNC_STORAGE.DEVICE_ID);
    cacheTokenAsync(_.get(user, 'access_token', null));
    // login success
    const userInfo = yield yield call(execGetUserInfo, payload.user.username);
    const updatedUserInDevice = yield call(execUpdateUserIdInDevice, {
      deviceId,
      userId: userInfo.userId,
    });
    if (
      updatedUserInDevice.status === 200 ||
      updatedUserInDevice.status === 201
    ) {
      const notificationOfUser = yield call(execGetNotificationsByUserId, {
        userId: userInfo.userId,
        deviceId,
      });

      yield call(saveUserInfo, userInfo);
      yield put(setUserInfo(userInfo));
      yield put(execAuthenticateSuccess(userInfo));

      yield put(
        execSaveListNotificationForUser(
          notificationOfUser.json.reverse(),
          userInfo.userId,
        ),
      );
    } else {
      Toast.showTop(MSG.ERROR_OCCURED, '', 'danger');
    }
    yield put(setLoading('users', false));
  } catch (err) {
    yield put(setLoading('users', false));
    yield put(execAuthenticateError(err.status));
    err.status === 404
      ? Toast.showCenter(
          MSG.INVALID_LOGIN,
          payload.isFocus ? payload.keyboardHeight : 0,
        )
      : Toast.showCenter(
          MSG.LOGIN_FAILED,
          payload.isFocus ? payload.keyboardHeight : 0,
        );
  }
}

export function* watchHandleAuthentication() {
  yield takeEvery(FETCH_AUTHENTICATE, handleAuthenticate); // call only
}

/* ====================================
 * HANDLE LOGOUT
 * ====================================*/

export function* handleLogout() {
  // TODO: CLEAN CODE
  yield put(setLoading('setting', true)); // loading wait for api
  const deviceId = yield AsyncStorage.getItem(ASYNC_STORAGE.DEVICE_ID);
  const resultRemoveUserIdInDevice = yield call(
    execRemoveUserIdInDevice,
    deviceId,
  );
  if (
    resultRemoveUserIdInDevice.status === 200 ||
    resultRemoveUserIdInDevice.status === 201
  ) {
    yield AsyncStorage.multiRemove([
      ASYNC_STORAGE.IS_ACTIVED,
      ASYNC_STORAGE.EXPAT,
      ASYNC_STORAGE.USERINFO,
      ASYNC_STORAGE.TOKEN,
      ASYNC_STORAGE.USER_ID,
    ]);
    yield put(setLoading('setting', false)); // loading wait for api
    yield put({type: UNAUTHENTICATED});
  } else {
    yield put(setLoading('setting', false)); // loading wait for api
    Toast.showBottom(MSG.ERROR_OCCURED);
  }
}

export function* watchHandleLogout() {
  yield takeEvery(FETCH_UNAUTHENTICATE, handleLogout); // call only
}

/* ====================================
 * HANDLE REGISTER
 * ====================================*/
export function* handleRegister({payload}) {
  try {
    yield put(setLoading('users', true)); // loading wait for api
    const response = yield call(execRegister, payload);

    switch (response.status) {
      case 200:
      case 201:
        response.json.isSuccess
          ? Toast.showTop('Tạo tài khoản', MSG.USER_QR_CREATED, 'success')
          : Toast.showTop(
              'Tạo tài khoản',
              response.json.errorMessage,
              'danger',
            );
        response.json.isSuccess && (yield put({type: WELCOME}));
        !response.json.isSuccess && payload.isForce
          ? yield put(execgoBack())
          : null;
        break;
      default:
        Toast.showTop('Tạo tài khoản', MSG.ERROR_OCCURED, 'danger');
        break;
    }
    yield put(setLoading('users', false)); // loading wait for api
  } catch (err) {
    yield put(setLoading('users', false));
    yield put(execRegisterError(err.status));
  }
}

export function* watchHandleRegister() {
  yield takeEvery(FETCH_REGISTER, handleRegister); // call only
}

/* ====================================
 * HANDLE QR CODE
 * ====================================*/
export function* handleQRCode({payload}) {
  try {
    yield put(setLoading('users', true)); // loading wait for api
    yield put(execResetUser());
    const data = yield call(execGetPatientByQrCode, payload);
    yield put(setLoading('users', false)); // loading wait for api

    if (data.status === 200 && !!data.json) {
      const patient = new ActivatePatientPostModel(data.json);
      yield put(execQRCodeSuccess(patient));
      return;
    }
    Toast.showBottom(MSG.INVALID_QR_CODE);
  } catch (err) {
    yield put(setLoading('users', false));
    yield put(execQRCodeError(err.status));
  }
}

export function* watchHandleQRCode() {
  yield takeEvery(FETCH_QRCODE, handleQRCode); // call only
}

/* ====================================
 * HANDLE RESET PASSWORD
 * ====================================*/
export function* handleResetPassword({payload}) {
  try {
    yield put(setLoading('resetPassword', true)); // loading wait for api
    const data = yield call(execResetPassword, payload.data);
    yield put(setLoading('resetPassword', false)); // loading wait for api
    if (data.status === 200 || data.status === 201) {
      Toast.showCenter(
        MSG.RESET_PASSWORD_SUCCESS,
        payload.data.isFocus ? payload.data.keyboardHeight : 0,
        true,
      );
      yield put(execResetPasswordSuccess());
      return;
    }
    Toast.showCenter(
      MSG.RESET_PASSWORD_FAILED,
      payload.data.isFocus ? payload.data.keyboardHeight : 0,
    );
  } catch (err) {
    Toast.showCenter(
      MSG.RESET_PASSWORD_FAILED,
      payload.data.isFocus ? payload.data.keyboardHeight : 0,
    );
    yield put(setLoading('users', false));
    yield put(execResetPasswordError(err.status));
  }
}

export function* watchHandleResetPassword() {
  yield takeEvery(FETCH_RESET_PASSWORD, handleResetPassword); // call only
}

/* ====================================
 * HANDLE CHANGE PASSWORD
 * ====================================*/
export function* handleChangePassword({payload}) {
  try {
    const checkTokenExpired = yield checkSession();
    if (checkTokenExpired) {
      Toast.showBottom(MSG.SESSION_EXPIRED);
      yield put(execLogout());
      return;
    }

    yield put(setLoading('changePassword', true)); // loading wait for api
    const data = yield call(execChangePassword, payload.data);
    yield put(setLoading('changePassword', false)); // loading wait for api

    if (data.json.isSuccess) {
      Toast.showTop(
        MSG.SUCCESS,
        MSG.CHANGE_PASSWORD_SUCCESS,
        MSG.TYPE_NOTIFICATION.SUCCESS,
      );
      yield put(execLogout());
      yield put({type: UNAUTHENTICATED});
      return;
    } else {
      Toast.showTop(
        MSG.FAIL,
        data.json.errorMessage,
        MSG.TYPE_NOTIFICATION.DANGER,
      );
    }
  } catch (err) {
    Toast.showTop(MSG.FAIL, MSG.ERROR_OCCURED, MSG.TYPE_NOTIFICATION.DANGER);
    yield put(setLoading('changePassword', false)); // loading wait for api
    yield put(execChangePasswordError(err.status));
  }
}

export function* watchHandleChangePassword() {
  yield takeEvery(FETCH_CHANGE_PASSWORD, handleChangePassword); // call only
}

/* ====================================
 * HANDLE CHANGE AVATAR
 * ====================================*/
export function* handleChangeAvatar({payload}) {
  try {
    const checkTokenExpired = yield checkSession();
    if (checkTokenExpired) {
      Toast.showBottom(MSG.SESSION_EXPIRED);
      yield put(execLogout());
      return;
    }
    yield put(setLoading('setting', true)); // loading wait for api
    const strippedBase64Str = payload.data.Avatar.replace(
      /^data:image\/[a-z]+;base64,/,
      '',
    );
    const arrayBuffer = Base64Binary.decode(strippedBase64Str);
    const uint8Array = new Uint8Array(arrayBuffer);
    const bytesArray = Array.from(uint8Array);
    const params = {...payload.data, Avatar: bytesArray};

    const data = yield call(execUpdateAvatar, params);
    yield put(setLoading('setting', false)); // loading wait for api
    if (data.status === 200 || data.status === 201) {
      Toast.showTop(
        MSG.SUCCESS,
        MSG.CHANGE_AVATAR_SUCCESS,
        MSG.TYPE_NOTIFICATION.SUCCESS,
      );
      yield call(saveUserInfo, data.json);
      yield put(setUserInfo(data.json));
      yield put(execChangeAvatarSuccess(data.json));
      return;
    } else {
      Toast.showTop(
        MSG.FAIL,
        data.json.errorMessage,
        MSG.TYPE_NOTIFICATION.DANGER,
      );
    }
  } catch (err) {
    Toast.showTop(MSG.FAIL, MSG.ERROR_OCCURED, MSG.TYPE_NOTIFICATION.DANGER);
    yield put(setLoading('setting', false)); // loading wait for api
    yield put(execChangeAvatarError(err.status));
  }
}

export function* watchHandleChangeAvatar() {
  yield takeEvery(FETCH_CHANGE_AVATAR, handleChangeAvatar); // call only
}
