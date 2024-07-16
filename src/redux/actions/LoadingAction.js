// import { createAction } from 'redux-actions';
import {SET_LOADING} from '../constants';

// Handlers

const setLoading = (scope, loading) => {
  return {
    type: SET_LOADING,
    payload: {
      scope,
      loading,
    },
  };
};

export {setLoading};
