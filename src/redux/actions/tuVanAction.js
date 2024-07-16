import {
  FETCH_GET_KHOA,
  GET_LIST_KHOA,
  GET_LIST_KHOA_ERR,
  FETCH_POST_TU_VAN,
  POST_TU_VAN,
  POST_TU_VAN_ERR,
  FETCH_GET_TRA_LOI,
  RESET_TRA_LOI,
  GET_TRA_LOI,
  GET_TRA_LOI_ERR,
  FETCH_GET_CHI_TIET_TRA_LOI,
  GET_CHI_TIET_TRA_LOI,
  GET_CHI_TIET_TRA_LOI_ERR,
} from '../constants';

/* ====================================
 * HANDLE GET CATEGORIES
 * ====================================*/

export const execGetListKhoa = data => {
  return {
    type: FETCH_GET_KHOA,
    payload: {data},
  };
};
export const execSaveListKhoa = data => {
  return {
    type: GET_LIST_KHOA,
    payload: {data},
  };
};
export const execGetListKhoaError = error => {
  return {
    type: GET_LIST_KHOA_ERR,
    payload: {error},
  };
};

/* ====================================
 * HANDLE POST TU VAN
 * ====================================*/

export const execPostTuVan = data => {
  return {
    type: FETCH_POST_TU_VAN,
    payload: {data},
  };
};
export const execSavePostTuVan = data => {
  return {
    type: POST_TU_VAN,
    payload: {data},
  };
};
export const execPostTuVanErr = error => {
  return {
    type: POST_TU_VAN_ERR,
    payload: {error},
  };
};

/* ====================================
 * HANDLE GET CAU TRA LOI
 * ====================================*/

export const execResetTraLoi = () => {
  return {
    type: RESET_TRA_LOI,
  };
};

export const execGetTraLoi = data => {
  return {
    type: FETCH_GET_TRA_LOI,
    payload: {data},
  };
};
export const execSaveTraLoi = data => {
  return {
    type: GET_TRA_LOI,
    payload: {data},
  };
};
export const execTraLoiErr = error => {
  return {
    type: GET_TRA_LOI_ERR,
    payload: {error},
  };
};

/* ====================================
 * HANDLE GET CHI TIET CAU TRA LOI
 * ====================================*/

export const execGetChiTietTraLoi = data => {
  return {
    type: FETCH_GET_CHI_TIET_TRA_LOI,
    payload: {data},
  };
};
export const execSaveChiTietTraLoi = data => {
  return {
    type: GET_CHI_TIET_TRA_LOI,
    payload: {data},
  };
};
export const execChiTietTraLoiErr = error => {
  return {
    type: GET_CHI_TIET_TRA_LOI_ERR,
    payload: {error},
  };
};
