import {GET_LIST_GOI_KHAM} from '../constants';

const initialAuthState = {
  data: [],
  //   dataDetail: [],
};

const goiKham = (state = initialAuthState, action) => {
  switch (action.type) {
    case GET_LIST_GOI_KHAM:
      return {
        ...state,
        data: action.payload.data,
      };
    // case GET_DETAIL_SCHEDULE:
    //   return {
    //     ...state,
    //     dataDetail: action.payload.data,
    //   };
    default:
      return state;
  }
};

export default goiKham;
