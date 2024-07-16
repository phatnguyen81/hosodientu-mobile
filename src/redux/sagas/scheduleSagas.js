import {setLoading} from '../actions/LoadingAction';
import {put, call, takeEvery, all} from 'redux-saga/effects';
import {
  execGetCategoriesList,
  execGetDetaileSchedule,
  execGetProfileBacSi,
} from '../api/api-schedule';
import {setError} from '../actions/errorAction';
import {
  execSaveCategoriesList,
  execSaveDetaileSchedule,
  execSaveSchedulesList,
  execSaveDoctorList,
} from '../actions/scheduleAction';
import Toast from '../../components/Toast';
import * as MSG from '../../shared/constants/Messages';
import {
  FETCH_GET_CATEGORIES_LIST,
  FETCH_GET_DETAIL_SCHEDULE,
} from '../constants';

/* ====================================
 * HANDLE SCHEDULE SAGAS
 * ====================================*/

export function* handleGetCategoriesList({payload}) {
  try {
    yield put(setLoading('categories', true)); // loading wait for api
    const data = yield call(execGetCategoriesList);
    const dataLicKham = yield call(execGetDetaileSchedule);
    const allBacSi = yield coverDsBacSi(dataLicKham.json);
    const dataDoctor = [];
    const res = allBacSi.map(bs => {
      return call(execGetProfileBacSi, bs);
    });
    const temp = yield all(res);
    temp.map(bs => {
      dataDoctor.push(bs.json);
    });

    yield put(setError('categories', false));
    yield put(setLoading('categories', false)); // loading wait for api
    yield put(execSaveCategoriesList(data.json));
    yield put(execSaveSchedulesList(dataLicKham.json));
    yield put(execSaveDoctorList(dataDoctor));
  } catch (err) {
    yield put(setLoading('categories', false));
    yield put(setError('categories', true));
    Toast.showBottom(MSG.ERROR_OCCURED);
  }
}

export function* watchHandleGetCategoriesList() {
  yield takeEvery(FETCH_GET_CATEGORIES_LIST, handleGetCategoriesList); // call only
}

/* ====================================
 * HANDLE SCHEDULE SAGAS
 * ====================================*/

const covertLichKham = (danhSachBacSi, lichKham, idCategories) => {
  const BacSi_Khoa = [];
  danhSachBacSi.map(bacSi => {
    bacSi.categories.map(idKhoa => {
      const temp = {};
      temp.idBacSi = bacSi.id;
      temp.TenBacSi = bacSi.title.rendered;
      temp.idKhoa = idKhoa;
      BacSi_Khoa.push(temp);
    });
  });

  const idKhoa = idCategories;
  const BacSi_ThuocKhoa = [];
  BacSi_Khoa.map(bs_khoa => {
    if (bs_khoa.idKhoa === idKhoa) {
      const temp = {};
      temp.idBacSi = bs_khoa.idBacSi;
      temp.TenBacSi = bs_khoa.TenBacSi;
      temp.idKhoa = bs_khoa.idKhoa;
      BacSi_ThuocKhoa.push(temp);
    }
  });
  const lichKham_BuoiSang = [];
  const lichKham_BuoiTrua = [];
  const lichKham_BuoiToi = [];

  lichKham.acf.schdule_week_time_morning.schedule_day_week_morning.map(
    lichTheoBuoi => {
      const temp1 = {};
      temp1.Thu = lichTheoBuoi.week_day_morning;
      const dsBacSi = [];
      for (let i = 0; i <= lichTheoBuoi.week_doctor_morning.length - 1; i++) {
        BacSi_ThuocKhoa.map(khoa => {
          if (khoa.idBacSi === lichTheoBuoi.week_doctor_morning[i].ID) {
            dsBacSi.push(lichTheoBuoi.week_doctor_morning[i]);
          }
        });
      }
      temp1.dSachBacSi = dsBacSi;
      lichKham_BuoiSang.push(temp1);
    },
  );

  lichKham.acf.schdule_week_time_afternoon.schedule_day_week_afternoon.map(
    lichTheoBuoi => {
      const temp1 = {};
      temp1.Thu = lichTheoBuoi.week_day_afternoon;
      const dsBacSi = [];
      for (let i = 0; i <= lichTheoBuoi.week_doctor_afternoon.length - 1; i++) {
        BacSi_ThuocKhoa.map(khoa => {
          if (khoa.idBacSi === lichTheoBuoi.week_doctor_afternoon[i].ID) {
            dsBacSi.push(lichTheoBuoi.week_doctor_afternoon[i]);
          }
        });
      }
      temp1.dSachBacSi = dsBacSi;
      lichKham_BuoiTrua.push(temp1);
    },
  );

  lichKham.acf.schdule_week_time_night.schedule_day_week_night.map(
    lichTheoBuoi => {
      const temp1 = {};
      temp1.Thu = lichTheoBuoi.week_day_night;
      const dsBacSi = [];
      for (let i = 0; i <= lichTheoBuoi.week_doctor_night.length - 1; i++) {
        BacSi_ThuocKhoa.map(khoa => {
          if (khoa.idBacSi === lichTheoBuoi.week_doctor_night[i].ID) {
            dsBacSi.push(lichTheoBuoi.week_doctor_night[i]);
          }
        });
      }
      temp1.dSachBacSi = dsBacSi;
      lichKham_BuoiToi.push(temp1);
    },
  );

  const lichKhamChiTiet = [];

  for (let i = 0; i < lichKham_BuoiSang.length; i++) {
    const thu = {};

    const Buoi = [];

    const buoiSang = {};
    buoiSang.TenBuoi = 'Sáng (7h30 - 11h30)';
    buoiSang.DsBacSi = lichKham_BuoiSang[i].dSachBacSi;

    const buoiTrua = {};
    buoiTrua.TenBuoi = 'Chiều (13h00 - 17h00)';
    buoiTrua.DsBacSi = lichKham_BuoiTrua[i].dSachBacSi;

    const buoiToi = {};
    buoiToi.TenBuoi = 'Tối (18h00 - 19h30)';
    buoiToi.DsBacSi = lichKham_BuoiToi[i].dSachBacSi;

    Buoi.push(buoiSang);
    Buoi.push(buoiTrua);
    Buoi.push(buoiToi);

    thu.Thu = lichKham_BuoiToi[i].Thu;
    thu.Buoi = Buoi;
    lichKhamChiTiet.push(thu);
  }
  return lichKhamChiTiet;
};

function deduplicate(arr) {
  let isExist = (arr, x) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === x) {
        return true;
      }
    }
    return false;
  };

  let ans = [];
  arr.forEach(element => {
    if (!isExist(ans, element)) {
      ans.push(element);
    }
  });
  return ans;
}

const coverDsBacSi = lichKham => {
  const arrBacSiBuoiSang = [];
  lichKham.acf.schdule_week_time_morning.schedule_day_week_morning.map(item => {
    for (let i = 0; i < item.week_doctor_morning.length - 1; i++) {
      arrBacSiBuoiSang.push(item.week_doctor_morning[i].ID);
    }
  });

  const arrBacSiBuoiTrua = [];
  lichKham.acf.schdule_week_time_afternoon.schedule_day_week_afternoon.map(
    item => {
      for (let i = 0; i < item.week_doctor_afternoon.length - 1; i++) {
        arrBacSiBuoiTrua.push(item.week_doctor_afternoon[i].ID);
      }
    },
  );

  const arrBacSiBuoiChieu = [];
  lichKham.acf.schdule_week_time_night.schedule_day_week_night.map(item => {
    for (let i = 0; i < item.week_doctor_night.length - 1; i++) {
      arrBacSiBuoiChieu.push(item.week_doctor_night[i].ID);
    }
  });
  const allBacSi = deduplicate(
    arrBacSiBuoiSang.concat(arrBacSiBuoiChieu, arrBacSiBuoiTrua),
  );
  return allBacSi;
};

export function* handleGetDetaileSchedule({payload}) {
  try {
    yield put(setLoading('categories', true)); // loading wait for api

    yield put(setError('categories', false));
    yield put(setLoading('categories', false)); // loading wait for api

    const data = yield covertLichKham(
      payload.doctors,
      payload.schedules,
      payload.idCategories,
    );
    yield put(execSaveDetaileSchedule(data));
    return;
  } catch (err) {
    yield put(setLoading('categories', false));
    yield put(setError('categories', true));
    Toast.showBottom(MSG.ERROR_OCCURED);
  }
}

export function* watchHandleGetDetaileSchedule() {
  yield takeEvery(FETCH_GET_DETAIL_SCHEDULE, handleGetDetaileSchedule); // call only
}
