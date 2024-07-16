import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';

import services from './services';
// import {routerReducer as location} from '../../router';

import nav from './navReducer';
import auth from './authReducer';
import report from './reportReducer';
import reportCompany from './reportCompanyReducer';
import home from './homeReducer';
import loading from './loadingReducer';
import error from './errorReducer';
import categories from './scheduleReducer';
import goiKham from './goiKhamReducer';
import tuvan from './tuVanReducer';
import thongBao from './thongBaoReducer';
import traCuuNhanh from './traCuuNhanhReducer';

const AppReducer = combineReducers({
  nav,
  auth,
  report,
  reportCompany,
  home,
  loading,
  error,
  form,
  services,
  categories,
  goiKham,
  tuvan,
  thongBao,
  traCuuNhanh,
});

export default AppReducer;
