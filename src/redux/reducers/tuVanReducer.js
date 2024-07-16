import {
  GET_LIST_KHOA,
  POST_TU_VAN,
  GET_TRA_LOI,
  GET_CHI_TIET_TRA_LOI,
  RESET_TRA_LOI,
} from '../constants';

const initialAuthState = {
  dataListKhoa: [],
  resTuVan: [],
  dataTraLoi: [],
  dataChiTietTraLoi: [],
};

const tuvan = (state = initialAuthState, action) => {
  switch (action.type) {
    case GET_LIST_KHOA:
      return {
        ...state,
        dataListKhoa: action.payload.data,
      };
    case POST_TU_VAN:
      return {
        ...state,
        resTuVan: action.payload.data,
      };
    case GET_TRA_LOI:
      return {
        ...state,
        dataTraLoi: action.payload.data,
      };
    case RESET_TRA_LOI:
      return {
        ...state,
        dataTraLoi: [],
      };
    case GET_CHI_TIET_TRA_LOI:
      return {
        ...state,
        dataChiTietTraLoi: action.payload.data,
      };
    default:
      return state;
  }
};

export default tuvan;
