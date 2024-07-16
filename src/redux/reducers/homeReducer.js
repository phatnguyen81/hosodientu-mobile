import {
  GET_DATA_HOME_LIST,
  INCREMENT_OFFSET,
  GET_DATA_POST_LIST,
} from '../constants';
import _ from 'lodash';

const initialAuthState = {
  posts: [],
  images: [],
  videos: [],
  totalOffset: 0,
  offset: 0,
};

const home = (state = initialAuthState, action) => {
  switch (action.type) {
    case GET_DATA_HOME_LIST:
      return {
        ...state,
        posts: action.payload.posts,
        offset: action.payload.offset || state.offset,
        images: action.payload.images,
        videos: action.payload.videos,
        totalOffset: action.payload.totalOffsets,
      };
    case GET_DATA_POST_LIST:
      const newState = {
        ...state,
        posts: _.uniqBy(state.posts.concat(action.payload.posts), 'id'),
        offset: action.payload.offset || state.offset,
      };
      return newState;
    case INCREMENT_OFFSET:
      return {
        ...state,
        offset: state.offset,
      };
    default:
      return state;
  }
};
export default home;
