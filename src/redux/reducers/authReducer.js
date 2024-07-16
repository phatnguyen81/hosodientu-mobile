// import {NAVIGATION} from '../../navigations/constants';
import {getUniqueId} from 'react-native-device-info';

import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  QRCODED,
  QRCODED_ERROR,
  RESET_USER,
  TAB_NAVIGATION,
  RE_AUTHENTICATED,
  CHANGE_AVATAR,
} from '../constants';
import Toast from '../../components/Toast';
import {INVALID_QR_CODE} from '../../shared/constants/Messages';

const initialAuthState = {
  authenticated: false,
  user: null,
  dataFromQrCode: false,
  uniqueId: getUniqueId(),
};

const auth = (state = initialAuthState, action) => {
  switch (action.type) {
    case RESET_USER:
      return {
        ...state,
        authenticated: false,
        user: {},
        dataFromQrCode: false,
      };
    case RE_AUTHENTICATED:
    case AUTHENTICATED:
    case CHANGE_AVATAR:
      return {
        ...state,
        authenticated: true,
        user: action.payload.user,
      };
    case TAB_NAVIGATION:
      return {
        ...state,
        authenticated: false,
        user: null,
      };
    case UNAUTHENTICATED:
      return {
        ...state,
        authenticated: false,
        user: null,
      };
    case QRCODED:
      return {...state, user: action.payload.user, dataFromQrCode: true};
    case QRCODED_ERROR:
      Toast.showBottom(INVALID_QR_CODE);
      break;
    default:
      return state;
  }
};
export default auth;
