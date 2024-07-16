import _ from 'lodash';
import {put, call, takeEvery, select} from 'redux-saga/effects';
import {setLoading} from '../actions/LoadingAction';
import {FETCH_GET_REPORT_LIST, FETCH_GET_DETAIL_REPORT} from '../constants';
import {execGetReportList, execGetReportDetails} from '../api/api-report';
// import {execHandleTokenExpired} from '../actions/authActions';
import {
  execSaveReportList,
  execGetDetailReportSucess,
} from '../actions/reportAction';
import Toast from '../../components/Toast';
import * as MSG from '../../shared/constants/Messages';
import {setError} from '../actions/errorAction';
import {checkSession} from '../api/checkSession';
import {execLogout, execgoBack} from '../actions/authActions';

/* ====================================
 * HANDLE REPORT SAGAS
 * ====================================*/

const groupDataList = data => {
  if (Array.isArray(data)) {
    let parents = [];
    let childs = [];
    data.map(item => {
      if (item.parentGroupId) {
        childs[item.parentGroupId]
          ? childs[item.parentGroupId].push(item)
          : (childs[item.parentGroupId] = [item]);
      } else {
        parents.push(item);
      }
    });

    parents.map((parent, index) => {
      if (childs[parent.groupId]) {
        parents[index].children = [
          ..._.orderBy(childs[parent.groupId], ['name'], ['asc']),
        ];
      }
    });

    return parents;
  }
  return [];
};
export function* handleGetReportList({payload}) {
  try {
    yield put(setLoading('report', true)); // loading wait for api
    const checkTokenExpired = yield checkSession();
    if (checkTokenExpired) {
      Toast.showBottom(MSG.SESSION_EXPIRED);
      yield put(setLoading('report', false)); // loading wait for api
      yield put(setError('report', false));
      yield put(execLogout());
      return;
    }
    const data = yield call(execGetReportList, payload.code);
    yield put(setError('report', false));
    yield put(setLoading('report', false)); // loading wait for api
    if (data.status === 200 || data.status === 201) {
      const list = groupDataList(data.json);
      yield put(execSaveReportList(list));
      return;
    }
    Toast.showBottom(MSG.ERROR_OCCURED);
    yield put(execgoBack());
  } catch (err) {
    yield put(setLoading('report', false));
    yield put(setError('report', true));
    Toast.showBottom(MSG.ERROR_OCCURED);
    yield put(execgoBack());
  }
}

export function* watchHandleGetReportList() {
  yield takeEvery(FETCH_GET_REPORT_LIST, handleGetReportList); // call only
}

/* ====================================
 * HANDLE DETAIL REPORT
 * ====================================*/

export function* handleGetDetailReport({payload}) {
  try {
    yield put(setLoading('reportDetail', true)); // loading wait for api
    const checkTokenExpired = yield checkSession();
    if (checkTokenExpired) {
      Toast.showBottom(MSG.SESSION_EXPIRED); // todo: handle view component
      yield put(setLoading('reportDetail', false));
      yield put(setError('reportDetail', false));
      yield put(execLogout());
      return;
    }
    const data = yield call(execGetReportDetails, {paramStr: payload.data});
    yield put(setError('reportDetail', false));
    yield put(setLoading('reportDetail', false)); // loading wait for api
    if (data.status === 200 || data.status === 201) {
      yield put(execGetDetailReportSucess(data.json));
      return;
    }
    Toast.showBottom(MSG.ERROR_OCCURED);
    yield put(execgoBack());
  } catch (err) {
    yield put(setLoading('reportDetail', false));
    yield put(setError('reportDetail', true));
    Toast.showBottom(MSG.ERROR_OCCURED);
    yield put(execgoBack());
  }
}

export function* watchHandleGetDetailReport() {
  yield takeEvery(FETCH_GET_DETAIL_REPORT, handleGetDetailReport); // call only
}
