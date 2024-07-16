import {setLoading} from '../actions/LoadingAction';
import {put, call, takeEvery, all} from 'redux-saga/effects';
import {execGetCategoriesList} from '../api/api-schedule';
import {
  execPostTuVan,
  execGetTraLoi,
  execGetChiTietTraLoi,
} from '../api/api-tuVan';
import {setError} from '../actions/errorAction';
import {
  execSaveListKhoa,
  execSavePostTuVan,
  execSaveTraLoi,
  execSaveChiTietTraLoi,
} from '../actions/tuVanAction';
import Toast from '../../components/Toast';
import * as MSG from '../../shared/constants/Messages';
import {
  FETCH_GET_KHOA,
  FETCH_POST_TU_VAN,
  FETCH_GET_TRA_LOI,
  FETCH_GET_CHI_TIET_TRA_LOI,
} from '../constants';

export function* handleGetListKhoa({payload}) {
  try {
    yield put(setLoading('tuvan', true)); // loading wait for api
    const data = yield call(execGetCategoriesList, payload.data);
    yield put(setError('tuvan', false));
    yield put(setLoading('tuvan', false)); // loading wait for api
    yield put(execSaveListKhoa(data.json));
  } catch (err) {
    yield put(setLoading('tuvan', false));
    yield put(setError('tuvan', true));
    Toast.showBottom(MSG.ERROR_OCCURED);
  }
}

export function* watchHandleGetListKhoa() {
  yield takeEvery(FETCH_GET_KHOA, handleGetListKhoa); // call only
}

export function* handlePostTuVan({payload}) {
  try {
    yield put(setLoading('tuvan', true)); // loading wait for api
    const data = yield call(execPostTuVan, payload.data);
    yield put(setError('tuvan', false));
    yield put(setLoading('tuvan', false)); // loading wait for api
    if (data.status === 200) {
      yield put(execSavePostTuVan(data.json));
    }
  } catch (err) {
    yield put(setLoading('tuvan', false));
    yield put(setError('tuvan', true));
    Toast.showBottom(MSG.ERROR_OCCURED);
  }
}

export function* watchHandlePostTuVan() {
  yield takeEvery(FETCH_POST_TU_VAN, handlePostTuVan); // call only
}

export function* handleGetTraLoi({payload}) {
    try {
    yield put(setLoading('tuvan', true)); // loading wait for api
    const data = yield call(execGetTraLoi, payload.data);
    yield put(setError('tuvan', false));
    yield put(setLoading('tuvan', false)); // loading wait for api
    if (data.status === 200) {
      yield put(execSaveTraLoi(data.json));
    }
  } catch (err) {
    yield put(setLoading('tuvan', false));
    yield put(setError('tuvan', true));
    Toast.showBottom(MSG.ERROR_OCCURED);
  }
}

export function* watchHandleGetTraLoi() {
  yield takeEvery(FETCH_GET_TRA_LOI, handleGetTraLoi); // call only
}

export function* handleGetChiTietTraLoi({payload}) {
  try {
    // console.log('handleGetChiTietTraLoi');

    yield put(setLoading('tuvan', true)); // loading wait for api
    const data = yield call(execGetChiTietTraLoi, payload.data);
    yield put(setError('tuvan', false));
    if (data.status === 200) {
      yield put(execSaveChiTietTraLoi(data.json));
      yield put(setLoading('tuvan', false)); // loading wait for api
    }
  } catch (err) {
    yield put(setLoading('tuvan', false));
    yield put(setError('tuvan', true));
    Toast.showBottom(MSG.ERROR_OCCURED);
  }
}

export function* watchHandleGetChiTietTraLoi() {
  yield takeEvery(FETCH_GET_CHI_TIET_TRA_LOI, handleGetChiTietTraLoi); // call only
}
