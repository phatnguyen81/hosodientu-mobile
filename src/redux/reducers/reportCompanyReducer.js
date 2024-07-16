import AsyncStorage from '@react-native-community/async-storage';
// import {NAVIGATION} from '../../navigations/constants';
import {NavigationActions} from 'react-navigation';
import {GET_REPORT_COMPANY_LIST_ERR} from '../constants';
import Toast from '../../components/Toast';

const initialAuthState = {
  data: [],
};

const reportCompany = (state = initialAuthState, action) => {
  switch (action.type) {
    case GET_REPORT_COMPANY_LIST_ERR:
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return state;
  }
};
export default reportCompany;
