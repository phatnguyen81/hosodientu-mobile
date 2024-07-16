import {
  GET_LIST_NOTIFICATION_FOR_DEVICE,
  FETCH_READ_ALL_NOTIFICATION,
  GET_LIST_NOTIFICATION_FOR_USER,
  READ_ALL_NOTIFICATION_FOR_DEVICE,
  READ_ALL_NOTIFICATION_FOR_USER,
} from '../constants';

const initialAuthState = {
  data: [],
  dataDetail: null,
  numberNotification: 0,
};

const thongBao = (state = initialAuthState, action) => {
  switch (action.type) {
    /*====================GET_LIST_NOTIFICATION_FOR_DEVICE======================= */
    case GET_LIST_NOTIFICATION_FOR_DEVICE:
      const numberNotificationForDevice = action.payload.data.filter(item => {
        return !item.isRead;
      }).length;
      return {
        ...state,
        data: action.payload.data.filter(o => o),
        numberNotification: action.payload.isWithoutCount
          ? 0
          : numberNotificationForDevice,
      };

    /*====================GET_LIST_NOTIFICATION_FOR_USER======================= */
    case GET_LIST_NOTIFICATION_FOR_USER:
      const numberNotificationForUser = action.payload.data.filter(item => {
        return !item.isRead;
      }).length;
      return {
        ...state,
        data: action.payload.data.filter(o => o),
        numberNotification: action.payload.isWithoutCount
          ? 0
          : numberNotificationForUser,
      };
    /*====================FETCH_READ_ALL_NOTIFICATION======================= */
    case FETCH_READ_ALL_NOTIFICATION:
      return {
        ...state,
        numberNotification: 0,
      };
    /*====================READ_ALL_NOTIFICATION_FOR_DEVICE======================= */
    case READ_ALL_NOTIFICATION_FOR_DEVICE:
      const newDataAfterReadNotificationForDevice = [];
      state.data.map(item => {
        if (!item.isRead) {
          newDataAfterReadNotificationForDevice.push({
            ...item,
            isRead: true,
          });
        } else {
          newDataAfterReadNotificationForDevice.push({...item});
        }
      });
      return {
        ...state,
        data: newDataAfterReadNotificationForDevice,
        numberNotification: 0,
      };
    /*====================READ_ALL_NOTIFICATION_FOR_USER======================= */
    case READ_ALL_NOTIFICATION_FOR_USER:
      const newDataAfterReadNotificationForUser = [];
      state.data.map(item => {
        if (!item.isRead) {
          newDataAfterReadNotificationForUser.push({
            ...item,
            isRead: true,
          });
        } else {
          newDataAfterReadNotificationForUser.push({...item});
        }
      });
      return {
        ...state,
        data: newDataAfterReadNotificationForUser,
        numberNotification: 0,
      };
    default:
      return state;
  }
};
export default thongBao;
