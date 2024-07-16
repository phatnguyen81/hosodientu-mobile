// import { createAction } from 'redux-actions';
import {
  FETCH_GET_REPORT_LIST,
  GET_REPORT_LIST,
  FETCH_GET_DETAIL_REPORT,
  GET_DETAIL_REPORT,
  GET_DETAIL_REPORT_ERR,
} from '../constants';

/* ====================================
 * HANDLE GET REPORT LIST
 * ====================================*/

const execGetReportList = code => {
  return {
    type: FETCH_GET_REPORT_LIST,
    payload: {code},
  };
};
const execSaveReportList = data => {
  return {
    type: GET_REPORT_LIST,
    payload: {data},
  };
};
const execGetDetailReport = data => {
  return {
    type: FETCH_GET_DETAIL_REPORT,
    payload: {data},
  };
};
const execGetDetailReportSucess = data => {
  return {
    type: GET_DETAIL_REPORT,
    payload: {data},
  };
};
const execGetDetailReportError = error => {
  return {
    type: GET_DETAIL_REPORT_ERR,
    payload: {error},
  };
};
export {
  execGetReportList,
  execSaveReportList,
  execGetDetailReport,
  execGetDetailReportSucess,
  execGetDetailReportError,
};
