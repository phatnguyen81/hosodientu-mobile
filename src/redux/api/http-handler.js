import 'whatwg-fetch';
import AsyncStorage from '@react-native-community/async-storage';
import {getTokenAsync} from '../../shared/asyncStorage/TokenStorageUtil';
import {ASYNC_STORAGE} from '../../shared/constants';

export const sendHttpRequest = async (url, params) => {
  const authToken = await getTokenAsync();
  if (!!authToken) {
    params = {
      ...params,
      headers: {...params.headers, Authorization: `Bearer ${authToken}`},
    };
  }

  // const dispatchAction = action => dispatch => {
  //   dispatch(action);
  // }

  return new Promise((resolve, reject) => {
    fetch(url, params)
      .then(response => {
        response
          .json()
          .then(json => ({
            status: response.status,
            loading: 'loading',
            json,
          }))
          .then(({status, json}) => {
            return resolve({status, json});
          })
          .catch(err => reject(err));
      })
      .catch(jsonError => reject(jsonError));
  });
};
