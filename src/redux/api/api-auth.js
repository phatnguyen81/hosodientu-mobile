import _ from 'lodash';
import AsyncStorage from '@react-native-community/async-storage';
import {sendHttpRequest} from './http-handler';
import baseUrl from './base-url';
import {cacheTokenAsync} from '../../shared/asyncStorage/TokenStorageUtil';
import {ASYNC_STORAGE} from '../../shared/constants';

// API URLs
const authUrl = `${baseUrl}/api/User/Login`;

// reuse in web
function* execAuthenticate({user}) {
  const obj = {
    grant_type: 'password',
    username: user.username,
    password: user.password,
  };
  const searchParams = Object.keys(obj)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join('&');
  const parameters = {
    method: 'POST',
    body: searchParams,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  };
  return new Promise((resolve, reject) => {
    sendHttpRequest(authUrl, parameters)
      .then(({status, json}) => {
        if (status !== 200) {
          return reject(json);
        }
        cacheTokenAsync(_.get(json, 'access_token', ''));
        AsyncStorage.setItem(ASYNC_STORAGE.IS_ACTIVED, 'true');
        AsyncStorage.setItem(
          ASYNC_STORAGE.EXPAT,
          (Date.now() + _.get(json, 'expires_in', 0) * 1000).toString(),
        );
        return resolve(json);
      })
      .catch(err => {
        return reject(err);
      });
  });
}

export {execAuthenticate};
