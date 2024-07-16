import AsyncStorage from '@react-native-community/async-storage';
// import {NAVIGATION} from '../../navigations/constants';
import {NavigationActions} from 'react-navigation';
import {
  GET_REPORT_LIST,
  GET_DETAIL_REPORT_ERR,
  GET_DETAIL_REPORT,
  GET_REPORT_COMPANY_LIST,
} from '../constants';
import Toast from '../../components/Toast';

const initialAuthState = {
  data: [],
  dataDetail: null,
};

const report = (state = initialAuthState, action) => {
  switch (action.type) {
    case GET_REPORT_LIST:
      return {
        ...state,
        data: action.payload.data,
      };
    case GET_REPORT_COMPANY_LIST:
      return {
        ...state,
        data: action.payload.data,
      };
    case GET_DETAIL_REPORT:
      return {
        ...state,
        dataDetail: action.payload.data,
      };
    default:
      return state;
  }
};
export default report;
