import {
  FETCH_GET_NOTIFICATION,
  GET_LIST_NOTIFICATION_FOR_DEVICE,
  READ_ALL_NOTIFICATION_FOR_DEVICE,
  FETCH_READ_ALL_NOTIFICATION,
  GET_LIST_NOTIFICATION_FOR_USER,
  READ_ALL_NOTIFICATION_FOR_USER,
} from '../constants';

/* ====================================
 * HANDLE GET CATEGORIES
 * ====================================*/

export const execGetListNotification = data => {
  return {
    type: FETCH_GET_NOTIFICATION,
    payload: {data},
  };
};
export const execSaveListNotificationForDevice = (
  data,
  deviceId,
  isWithoutCount,
) => {
  return {
    type: GET_LIST_NOTIFICATION_FOR_DEVICE,
    payload: {data, deviceId, isWithoutCount},
  };
};
export const execSaveListNotificationForUser = (
  data,
  userId,
  isWithoutCount,
) => {
  return {
    type: GET_LIST_NOTIFICATION_FOR_USER,
    payload: {data, userId, isWithoutCount},
  };
};
export const execFetchReadAllListNotification = () => {
  return {
    type: FETCH_READ_ALL_NOTIFICATION,
  };
};

export const execReadAllListNotificationForDevice = deviceId => {
  return {
    type: READ_ALL_NOTIFICATION_FOR_DEVICE,
    payload: {deviceId},
  };
};

export const execReadAllListNotificationForUser = userId => {
  return {
    type: READ_ALL_NOTIFICATION_FOR_USER,
    payload: {userId},
  };
};
