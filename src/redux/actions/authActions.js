import {createAction} from 'redux-actions';
import AsyncStorage from '@react-native-community/async-storage';

import {clearUserAsync} from '../../shared/asyncStorage/UserStorageUtil';
import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTHENTICATION_ERROR,
  FETCH_AUTHENTICATE,
  FETCH_REGISTER,
  REGISTERED,
  REGISTERED_ERROR,
  FETCH_QRCODE,
  QRCODED,
  QRCODED_ERROR,
  RESET_USER,
  FETCH_RESET_PASSWORD,
  RESET_PASSWORD,
  RESET_PASSWORD_ERROR,
  FETCH_CHANGE_PASSWORD,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_ERROR,
  WELCOME,
  GOBACK,
  SET_USER_INFO,
  FETCH_UNAUTHENTICATE,
  TAB_NAVIGATION,
  RE_AUTHENTICATED,
  TOKEN,
  FETCH_CHANGE_AVATAR,
  CHANGE_AVATAR,
  CHANGE_AVATAR_ERROR,
} from '../constants';
import {ASYNC_STORAGE} from '../../shared/constants';

/* ====================================
 * HANDLE LOGIN
 * ====================================*/

const execGotoLogin = () => {
  return {type: WELCOME};
};

const execgoBack = () => {
  return {type: GOBACK};
};

const execFetchAuthenticate = (user, keyboardHeight, isFocus) => {
  return {type: FETCH_AUTHENTICATE, payload: {user, keyboardHeight, isFocus}};
};

const execAuthenticateSuccess = user => {
  return {type: AUTHENTICATED, payload: {user}};
};
const execReAuthenticateSuccess = user => {
  return {type: RE_AUTHENTICATED, payload: {user}};
};
const execAuthenticateError = error => {
  return {type: AUTHENTICATION_ERROR, error};
};

const execNavigateHome = data => {
  return {type: TAB_NAVIGATION, data};
};

// const execUnAuthenticate = data => {
//   return {type: UNAUTHENTICATED, data};
// };

const execHandleTokenExpired = () => {
  return {type: TOKEN};
};

/* ====================================
 * HANDLE SAVE USER INFO
 * ====================================*/

export const setUserInfo = createAction(SET_USER_INFO);

export const saveUserInfo = async user => {
  await clearUserAsync();
  await AsyncStorage.setItem(ASYNC_STORAGE.USER_INFO_KEY, JSON.stringify(user));
  await AsyncStorage.setItem(ASYNC_STORAGE.USER_ID, user.userId.toString());
};

/* ====================================
 * HANDLE REGISTER
 * ====================================*/

const execResetUser = () => {
  return {type: RESET_USER};
};

const execFetchRegister = (user, type, isForce) => {
  return {type: FETCH_REGISTER, payload: {user, type, isForce}};
};

const execRegisterSuccess = () => {
  return {type: REGISTERED};
};
const execRegisterError = error => {
  return {type: REGISTERED_ERROR, error};
};

/* ====================================
 * HANDLE SCAN QR CODE
 * ====================================*/

const execFetchQRCode = code => {
  return {type: FETCH_QRCODE, payload: {code}};
};

const execQRCodeSuccess = user => {
  return {type: QRCODED, payload: {user}};
};
const execQRCodeError = error => {
  return {type: QRCODED_ERROR, error};
};

/* ====================================
 * HANDLE RESET PASSSWORD
 * ====================================*/

const execResetPassword = data => {
  return {type: FETCH_RESET_PASSWORD, payload: {data}};
};
const execResetPasswordSuccess = () => {
  return {type: RESET_PASSWORD};
};
const execResetPasswordError = error => {
  return {type: RESET_PASSWORD_ERROR, error};
};
/* ====================================
 * HANDLE CHANGE PASSSWORD
 * ====================================*/

const execChangePassword = data => {
  return {type: FETCH_CHANGE_PASSWORD, payload: {data}};
};
const execChangePasswordSuccess = () => {
  return {type: CHANGE_PASSWORD};
};
const execChangePasswordError = error => {
  return {type: CHANGE_PASSWORD_ERROR, error};
};
/* ====================================
 * HANDLE CHANGE PASSSWORD
 * ====================================*/

const execChangeAvatar = data => {
  return {type: FETCH_CHANGE_AVATAR, payload: {data}};
};
const execChangeAvatarSuccess = user => {
  return {type: CHANGE_AVATAR, payload: {user}};
};
const execChangeAvatarError = error => {
  return {type: CHANGE_AVATAR_ERROR, error};
};
/* ====================================
 * HANDLE LOGOUT
 * ====================================*/
const execLogout = () => {
  return {type: FETCH_UNAUTHENTICATE};
};

export {
  execGotoLogin,
  execgoBack,
  execResetUser,
  execFetchAuthenticate,
  execReAuthenticateSuccess,
  execAuthenticateSuccess,
  execNavigateHome,
  execHandleTokenExpired,
  // execUnAuthenticate,
  execAuthenticateError,
  execFetchRegister,
  execRegisterSuccess,
  execRegisterError,
  execFetchQRCode,
  execQRCodeSuccess,
  execQRCodeError,
  execResetPassword,
  execResetPasswordSuccess,
  execResetPasswordError,
  execChangePassword,
  execChangePasswordSuccess,
  execChangePasswordError,
  execChangeAvatar,
  execChangeAvatarSuccess,
  execChangeAvatarError,
  execLogout,
};
