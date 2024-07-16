import {
  GET_CATEGORIES_LIST,
  GET_DETAIL_SCHEDULE,
  GET_SCHEDULE_LIST,
  GET_DOCTOR_LIST,
} from '../constants';

const initialAuthState = {
  data: [],
  dataSchedule: [],
  dataDoctor: [],

  dataDetail: [],
};

const categories = (state = initialAuthState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_LIST:
      return {
        ...state,
        data: action.payload.data,
      };
    case GET_SCHEDULE_LIST:
      return {
        ...state,
        dataSchedule: action.payload.data,
      };
    case GET_DOCTOR_LIST:
      return {
        ...state,
        dataDoctor: action.payload.data,
      };

    case GET_DETAIL_SCHEDULE:
      return {
        ...state,
        dataDetail: action.payload.data,
      };
    default:
      return state;
  }
};

export default categories;
