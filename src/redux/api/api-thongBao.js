import 'whatwg-fetch';
// import _ from 'lodash';
import baseUrl from './base-url';
import {sendHttpRequest} from './http-handler-without-auth';

const getNotificationsByDeviceIdUrl = `${baseUrl}/api/NotificationsNotLogin`;
const getNotificationsByUserIdUrl = `${baseUrl}/api/NotificationsLogin`;
const saveDeviceIdUrl = `${baseUrl}/api/Device`;
const createNotificationByDeviceIdUrl = `${baseUrl}/api/Notification/NewDevice`;
const updateUserIdInDeviceUrl = `${baseUrl}/api/Device/UpdateUser`;
const removeUserIdInDeviceUrl = `${baseUrl}/api/Device`;
const getDeviceByIdUrl = `${baseUrl}/api/devicebydeviceid`;
const readNotificationByDeviceIdUrl = `${baseUrl}/api/ReadNotification/CaseNotLogin`;
const readNotificationByUserIdUrl = `${baseUrl}/api/ReadNotification/CaseLogin`;

export const execGetNotificationsByDeviceId = deviceId => {
  const parameters = {
    method: 'GET',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  };
  //medicalCode=20000002
  return new Promise((resolve, reject) => {
    sendHttpRequest(
      getNotificationsByDeviceIdUrl + `?deviceId=${deviceId}`,
      parameters,
    )
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};

export const execGetNotificationsByUserId = ({userId, deviceId}) => {
  const parameters = {
    method: 'GET',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  };
  //medicalCode=20000002
  return new Promise((resolve, reject) => {
    sendHttpRequest(
      getNotificationsByUserIdUrl + `?userId=${userId}&deviceId=${deviceId}`,
      parameters,
    )
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};

export const execReadNotificationByDeviceId = deviceId => {
  const parameters = {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
  };
  //medicalCode=20000002
  return new Promise((resolve, reject) => {
    sendHttpRequest(
      readNotificationByDeviceIdUrl + `?deviceId=${deviceId}`,
      parameters,
      true,
    )
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};

export const execReadNotificationByUserId = ({userId, deviceId}) => {
  const parameters = {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
  };
  //medicalCode=20000002
  return new Promise((resolve, reject) => {
    sendHttpRequest(
      readNotificationByUserIdUrl + `?userId=${userId}&deviceId=${deviceId}`,
      parameters,
      true,
    )
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};

export const execGetDeviceById = deviceId => {
  const parameters = {
    method: 'GET',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  };
  //medicalCode=20000002
  return new Promise((resolve, reject) => {
    sendHttpRequest(
      getDeviceByIdUrl + `?deviceId=${deviceId}`,
      parameters,
      true,
    )
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};

export const execUpdateUserIdInDevice = ({deviceId, userId}) => {
  const parameters = {
    method: 'PUT',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  };
  //medicalCode=20000002
  return new Promise((resolve, reject) => {
    sendHttpRequest(
      updateUserIdInDeviceUrl + `?deviceId=${deviceId}&userId=${userId}`,
      parameters,
      true,
    )
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};

export const execRemoveUserIdInDevice = deviceId => {
  const parameters = {
    method: 'PUT',
    body: JSON.stringify({deviceId}),
    headers: {'Content-Type': 'application/json'},
  };
  return new Promise((resolve, reject) => {
    sendHttpRequest(removeUserIdInDeviceUrl, parameters, true)
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};

export const execSaveDeviceId = deviceId => {
  const parameters = {
    method: 'POST',
    body: JSON.stringify({deviceId}),
    headers: {'Content-Type': 'application/json'},
  };
  //medicalCode=20000002
  return new Promise((resolve, reject) => {
    sendHttpRequest(saveDeviceIdUrl, parameters)
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};

export const execCreateNotificationByDeviceId = deviceId => {
  const parameters = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
  };
  //medicalCode=20000002
  return new Promise((resolve, reject) => {
    sendHttpRequest(
      createNotificationByDeviceIdUrl + `?deviceId=${deviceId}`,
      parameters,
    )
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};
