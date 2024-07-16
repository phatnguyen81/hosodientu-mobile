import {handleActions} from 'redux-actions';
import {SET_USER_INFO, AUTHENTICATED, RE_AUTHENTICATED} from '../../constants';
import {combineReducers} from 'redux';

const userDefault = {};
// const userListDefault = [];

const userInfo = handleActions(
  {
    [SET_USER_INFO]: {
      next(state, action) {
        return action.payload ? action.payload : state;
      },
    },
    [AUTHENTICATED]: {
      next(state, action) {
        return action.payload ? action.payload.user : state;
      },
    },
    [RE_AUTHENTICATED]: {
      next(state, action) {
        return action.payload ? action.payload.user : state;
      },
    },
  },
  userDefault,
);

// const userList = handleActions(
//   {
//     [GET_USER_LIST]: {
//       next(state, action) {
//         return action.payload ? action.payload : state;
//       },
//     },
//   },
//   userListDefault,
// );

export default combineReducers({userInfo});
