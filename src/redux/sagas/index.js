import {all} from 'redux-saga/effects';

import {
  watchHandleAuthentication,
  watchHandleLogout,
  watchHandleRegister,
  watchHandleQRCode,
  watchHandleResetPassword,
  watchHandleChangePassword,
  watchHandleChangeAvatar,
} from './authSagas';

import {
  watchHandleGetReportList,
  watchHandleGetDetailReport,
} from './reportSagas';
import {
  watchHandleGetCategoriesList,
  watchHandleGetDetaileSchedule,
} from './scheduleSagas';
import {watchHandleGetListGoiKham} from './goiKhamSagas';

import {watchHandleGetReportCompanyList} from './reportCompanySagas';
import {watchHandlegetDataHomeList, watchHandleGetPostList} from './homeSagas';
import {
  watchHandleGetListKhoa,
  watchHandlePostTuVan,
  watchHandleGetTraLoi,
  watchHandleGetChiTietTraLoi,
} from './tuVanSagas';

import {
  watchHandleGetNotificationList,
  watchHandleReadAllNotificationList,
} from './thongBaoSagas';
import {
  watchHandleQRCodeTraCuuNhanh,
  watchHandleGetDetailQuickReport,
} from './traCuuNhanhSagas';

export default function* rootSaga() {
  yield all([
    watchHandleAuthentication(),
    watchHandleLogout(),
    watchHandleRegister(),
    watchHandleQRCode(),
    watchHandleResetPassword(),
    watchHandleGetReportList(),
    watchHandleGetReportCompanyList(),
    watchHandleGetDetailReport(),
    watchHandlegetDataHomeList(),
    watchHandleGetCategoriesList(),
    watchHandleGetDetaileSchedule(),
    watchHandleGetListGoiKham(),
    watchHandleChangePassword(),
    watchHandleChangeAvatar(),
    watchHandleGetListKhoa(),
    watchHandlePostTuVan(),
    watchHandleGetTraLoi(),
    watchHandleGetChiTietTraLoi(),
    watchHandleGetNotificationList(),
    watchHandleReadAllNotificationList(),
    watchHandleQRCodeTraCuuNhanh(),
    watchHandleGetDetailQuickReport(),
    watchHandleGetPostList(),
  ]);
}
