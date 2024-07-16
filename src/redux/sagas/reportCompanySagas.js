import _ from 'lodash';
import {put, call, takeEvery, select} from 'redux-saga/effects';
import {setLoading} from '../actions/LoadingAction';
import {FETCH_GET_REPORT_COMPANY_LIST} from '../constants';
import {execGetCompanyReportList} from '../api/api-company';
import {execHandleTokenExpired, execgoBack} from '../actions/authActions';
import {execSaveReportCompanyList} from '../actions/reportCompanyAction';

/* ====================================
 * HANDLE REPORT_COMPANY SAGAS
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
export function* handleGetReportCompanyList({payload}) {
  try {
    yield put(setLoading('report', true)); // loading wait for api
    const data = yield call(execGetCompanyReportList, payload.code);
    yield put(setLoading('report', false)); // loading wait for api

    if ((data.status === 200 || data.status === 201) && !!data.json) {
      const list = groupDataList(data.json);
      yield put(execSaveReportCompanyList(list));
      return;
    }
  } catch (err) {
    yield put(execHandleTokenExpired(false));
    yield put(setLoading('report', false));
    yield put(execgoBack());
    // yield put(execGetReportCompanyError(err.status));
  }
}

export function* watchHandleGetReportCompanyList() {
  yield takeEvery(FETCH_GET_REPORT_COMPANY_LIST, handleGetReportCompanyList); // call only
}
