import {
  FETCH_QRCODE_TRA_CUU_NHANH,
  QRCODED_TRA_CUU_NHANH,
  QRCODED_ERROR_TRA_CUU_NHANH,
  FETCH_GET_DETAIL_QUICK_REPORT,
  GET_RESET_QUICK_REPORT,
  GET_DETAIL_QUICK_REPORT,
  GET_DETAIL_QUICK_REPORT_ERR,
} from '../constants';

/* ====================================
 * HANDLE SCAN QR CODE
 * ====================================*/

const execFetchQRCodeQuickReport = code => {
  return {type: FETCH_QRCODE_TRA_CUU_NHANH, payload: {code}};
};

const execQRCodeSuccess = dataFromQrCode => {
  return {type: QRCODED_TRA_CUU_NHANH, payload: {dataFromQrCode}};
};
const execQRCodeError = error => {
  return {type: QRCODED_ERROR_TRA_CUU_NHANH, error};
};

const execResetDetailQuickReport = () => {
  return {
    type: GET_RESET_QUICK_REPORT,
    payload: {dataDetail: null},
  };
};

const execGetDetailQuickReport = data => {
  return {
    type: FETCH_GET_DETAIL_QUICK_REPORT,
    payload: {data},
  };
};
const execGetDetailQuickReportSucess = ({dataDetail, index}) => {
  return {
    type: GET_DETAIL_QUICK_REPORT,
    payload: {dataDetail, index},
  };
};
const execGetDetailQuickReportError = error => {
  return {
    type: GET_DETAIL_QUICK_REPORT_ERR,
    payload: {error},
  };
};

export {
  execFetchQRCodeQuickReport,
  execQRCodeSuccess,
  execQRCodeError,
  execResetDetailQuickReport,
  execGetDetailQuickReport,
  execGetDetailQuickReportSucess,
  execGetDetailQuickReportError,
};
