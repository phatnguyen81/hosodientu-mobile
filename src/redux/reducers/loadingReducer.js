// import {NAVIGATION} from '../../navigations/constants';
import {SET_LOADING} from '../constants';

const initialLoadingState = {
  usersLoading: false,
  resetPasswordLoading: false,
  changeAvatarLoading: false,
  homeLoading: true,
  homePostLoading: true,
  reportLoading: true,
  categoriesLoading: true,
  goiKhamLoading: true,
  changePasswordLoading: false,
  thongBaoLoading: false,
  tuvanLoading: true,
  settingLoading: false,
  traCuuNhanhLoading: false,
  bangTraCuuLoading: false,
  quickReportDetailLoading: false,
};

const loadingReducer = (state = initialLoadingState, action) => {
  const {type, payload} = action;
  if (type === SET_LOADING) {
    return Object.assign({}, state, {
      // tùy theo scope mà gán cho key tương ứng
      [`${payload.scope}Loading`]: payload.loading,
    });
  } else {
    return state;
  }
};

export default loadingReducer;
