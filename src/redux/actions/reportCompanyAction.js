// import { createAction } from 'redux-actions';
import {
  FETCH_GET_REPORT_COMPANY_LIST,
  GET_REPORT_COMPANY_LIST,
} from '../constants';

/* ====================================
 * HANDLE GET REPORT_COMPANY LIST
 * ====================================*/

const execGetReportCompanyList = code => {
  return {
    type: FETCH_GET_REPORT_COMPANY_LIST,
    payload: {code},
  };
};
const execSaveReportCompanyList = data => {
  return {
    type: GET_REPORT_COMPANY_LIST,
    payload: {data},
  };
};

export {execGetReportCompanyList, execSaveReportCompanyList};
