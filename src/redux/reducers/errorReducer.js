// import {NAVIGATION} from '../../navigations/constants';
import {SET_ERROR} from '../constants';

const initialErrorState = {
  reportError: false,
  reportCompanyError: false,
};

const errorReducer = (state = initialErrorState, action) => {
  const {type, payload} = action;
  if (type === SET_ERROR) {
    return Object.assign({}, state, {
      // tùy theo scope mà gán cho key tương ứng
      [`${payload.scope}Error`]: payload.error,
    });
  } else {
    return state;
  }
};

export default errorReducer;
