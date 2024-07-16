import {
  QRCODED_TRA_CUU_NHANH,
  QRCODED_ERROR_TRA_CUU_NHANH,
  GET_DETAIL_QUICK_REPORT,
  GET_RESET_QUICK_REPORT,
} from '../constants';
import Toast from '../../components/Toast';
import {INVALID_QR_CODE} from '../../shared/constants/Messages';

const initialAuthState = {
  dataFromQrCode: [],
  dataDetail: null,
};

const traCuuNhanh = (state = initialAuthState, action) => {
  switch (action.type) {
    case QRCODED_TRA_CUU_NHANH:
      return {...state, dataFromQrCode: action.payload.dataFromQrCode};
    case QRCODED_ERROR_TRA_CUU_NHANH:
      Toast.showBottom(INVALID_QR_CODE);
      break;
    case GET_DETAIL_QUICK_REPORT:
      return {
        ...state,
        dataDetail: {
          [action.payload.index]: action.payload.dataDetail,
        },
      };
    case GET_RESET_QUICK_REPORT:
      return {...state, dataDetail: null};
    default:
      return state;
  }
};
export default traCuuNhanh;
