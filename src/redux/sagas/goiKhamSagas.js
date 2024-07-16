import {setLoading} from '../actions/LoadingAction';
import {put, call, takeEvery} from 'redux-saga/effects';
import {execGetListGoiKham} from '../api/api-goiKham';
import {setError} from '../actions/errorAction';
import {execSaveListGoiKham} from '../actions/goiKhamAction';
import Toast from '../../components/Toast';
import * as MSG from '../../shared/constants/Messages';
import {FETCH_GET_LIST_GOI_KHAM} from '../constants';

/* ====================================
 * HANDLE GET LIST GOI KHAM
 * ====================================*/

export function* handleGetListGoiKham({payload}) {
  try {
    yield put(setLoading('goiKham', true)); // loading wait for api
    const data = yield call(execGetListGoiKham, payload.data);
    yield put(setError('goiKham', false));
    yield put(setLoading('goiKham', false)); // loading wait for api
    yield put(execSaveListGoiKham(data.json));
  } catch (err) {
    yield put(setLoading('goiKham', false));
    yield put(setError('goiKham', true));
    Toast.showBottom(MSG.ERROR_OCCURED);
  }
}

export function* watchHandleGetListGoiKham() {
  yield takeEvery(FETCH_GET_LIST_GOI_KHAM, handleGetListGoiKham); // call only
}
