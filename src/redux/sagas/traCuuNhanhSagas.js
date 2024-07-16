import _ from 'lodash';
import {put, call, takeEvery} from 'redux-saga/effects';
import {
  execGetQuickReportByQrCode,
  execGetQuickReportDetails,
} from '../api/api-traCuuNhanh';
import {
  FETCH_QRCODE_TRA_CUU_NHANH,
  FETCH_GET_DETAIL_QUICK_REPORT,
} from '../constants';
import {checkSession} from '../api/checkSession';

import {setLoading} from '../actions/LoadingAction';
import * as MSG from '../../shared/constants/Messages';

import Toast from '../../components/Toast';
import {
  execQRCodeSuccess,
  execQRCodeError,
  execGetDetailQuickReportSucess,
} from '../actions/traCuuNhanhActions';
import {setError} from '../actions/errorAction';
import {execLogout, execgoBack} from '../actions/authActions';

/* ====================================
 * HANDLE QR CODE
 * ====================================*/
export function* handleQRCode({payload}) {
  try {
    yield put(setLoading('traCuuNhanh', true)); // loading wait for api
    const data = yield call(execGetQuickReportByQrCode, payload);
    yield put(setLoading('traCuuNhanh', false)); // loading wait for api

    if (data.status === 200 && !!data.json) {
      yield put(execQRCodeSuccess(data.json));
      return;
    }
    Toast.showBottom(MSG.INVALID_QR_CODE);
  } catch (err) {
    yield put(setLoading('traCuuNhanh', false));
    yield put(execQRCodeError(err.status));
  }
}

export function* watchHandleQRCodeTraCuuNhanh() {
  yield takeEvery(FETCH_QRCODE_TRA_CUU_NHANH, handleQRCode); // call only
}
/* ====================================
 * HANDLE DETAIL REPORT
 * ====================================*/

export function* handleGetDetailReport({payload}) {
  try {
    yield put(setLoading('quickReportDetail', true)); // loading wait for api
    const data = yield call(execGetQuickReportDetails, {
      paramStr: payload.data,
    });
    yield put(setError('quickReportDetail', false));
    yield put(setLoading('quickReportDetail', false)); // loading wait for api
    if ((data.status === 200 || data.status === 201) && !!data.json) {
      yield put(
        execGetDetailQuickReportSucess({
          dataDetail: data.json,
          index: payload.data,
        }),
      );
      return;
    }
    Toast.showBottom(MSG.ERROR_OCCURED);
    yield put(execgoBack());
  } catch (err) {
    yield put(setLoading('quickReportDetail', false));
    yield put(setError('quickReportDetail', true));
    Toast.showBottom(MSG.ERROR_OCCURED);
    yield put(execgoBack());
  }
}

export function* watchHandleGetDetailQuickReport() {
  yield takeEvery(FETCH_GET_DETAIL_QUICK_REPORT, handleGetDetailReport); // call only
}
