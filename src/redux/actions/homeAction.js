// import { createAction } from 'redux-actions';
import {
  FETCH_GET_DATA_HOME_LIST,
  GET_DATA_HOME_LIST,
  INCREMENT_OFFSET,
  GET_DATA_POST_LIST,
  FETCH_GET_DATA_POST_LIST,
} from '../constants';

/* ====================================
 * HANDLE GET POST LIST
 * ====================================*/

const execgetDataHomeList = offset => {
  return {
    type: FETCH_GET_DATA_HOME_LIST,
    payload: offset ? {offset} : undefined,
  };
};

const execgetDataPostList = offset => {
  return {
    type: FETCH_GET_DATA_POST_LIST,
    payload: offset ? {offset} : undefined,
  };
};

const execIncrementOffset = () => {
  return {
    type: INCREMENT_OFFSET,
  };
};

const execsaveDataHomeList = (posts, images, videos, offset, totalOffsets) => {
  return {
    type: GET_DATA_HOME_LIST,
    payload: {posts, images, videos, offset, totalOffsets},
  };
};

const execsaveDataPostList = (posts, offset) => {
  return {
    type: GET_DATA_POST_LIST,
    payload: {posts, offset},
  };
};

export {
  execgetDataHomeList,
  execsaveDataHomeList,
  execIncrementOffset,
  execsaveDataPostList,
  execgetDataPostList,
};
