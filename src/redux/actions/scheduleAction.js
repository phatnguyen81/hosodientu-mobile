// import { createAction } from 'redux-actions';
import {
  FETCH_GET_CATEGORIES_LIST,
  GET_CATEGORIES_LIST,
  GET_CATEGORIES_LIST_ERR,
  FETCH_GET_DETAIL_SCHEDULE,
  GET_DETAIL_SCHEDULE,
  GET_DETAIL_SCHEDULE_ERR,
  GET_SCHEDULE_LIST,
  GET_DOCTOR_LIST,
} from '../constants';

/* ====================================
 * HANDLE GET CATEGORIES LIST
 * ====================================*/

export const execGetCategoriesList = loading => {
  return {
    type: FETCH_GET_CATEGORIES_LIST,
    payload: {loading},
  };
};
export const execSaveCategoriesList = data => {
  return {
    type: GET_CATEGORIES_LIST,
    payload: {data},
  };
};

export const execSaveSchedulesList = data => {
  return {
    type: GET_SCHEDULE_LIST,
    payload: {data},
  };
};
export const execSaveDoctorList = data => {
  return {
    type: GET_DOCTOR_LIST,
    payload: {data},
  };
};

export const execGetCategoriesErr = data => {
  return {
    type: GET_CATEGORIES_LIST_ERR,
    payload: {data},
  };
};

/* ====================================
 * HANDLE GET SCHEDULE
 * ====================================*/

export const execGetDetailSchedule = ({idCategories, schedules, doctors}) => {
  return {
    type: FETCH_GET_DETAIL_SCHEDULE,
    payload: {idCategories, schedules, doctors},
  };
};
export const execSaveDetaileSchedule = data => {
  return {
    type: GET_DETAIL_SCHEDULE,
    payload: {data},
  };
};
export const execGetDetailScheduleError = error => {
  return {
    type: GET_DETAIL_SCHEDULE_ERR,
    payload: {error},
  };
};
