// import { createAction } from 'redux-actions';
import {
  FETCH_GET_LIST_GOI_KHAM,
  GET_LIST_GOI_KHAM,
  GET_LIST_GOI_KHAM_ERR,
} from '../constants';

/* ====================================
 * HANDLE GET LIST GOI KHAM
 * ====================================*/

export const execGetListGoiKham = data => {
  return {
    type: FETCH_GET_LIST_GOI_KHAM,
    payload: {data},
  };
};
export const execSaveListGoiKham = data => {
  return {
    type: GET_LIST_GOI_KHAM,
    payload: {data},
  };
};
export const execGetListGoiKhamError = error => {
  return {
    type: GET_LIST_GOI_KHAM_ERR,
    payload: {error},
  };
};
