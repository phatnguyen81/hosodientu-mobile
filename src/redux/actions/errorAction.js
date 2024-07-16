// import { createAction } from 'redux-actions';
import {SET_ERROR} from '../constants';

// Handlers

const setError = (scope, error) => {
  return {
    type: SET_ERROR,
    payload: {
      scope,
      error,
    },
  };
};

export {setError};
