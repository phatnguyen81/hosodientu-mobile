import _ from 'lodash';
import 'whatwg-fetch';
export const sendHttpRequest = async (url, params, isCustom, isGetTotal) => {
  return new Promise((resolve, reject) => {
    fetch(url, params)
      .then(response => {
        if (response.status === 204 && isCustom) {
          return resolve({status: response.status, isSucess: false});
        }
        response
          .json()
          .then(json => ({
            status: response.status,
            loading: 'loading',
            json,
          }))
          .then(({status, json}) => {
            if (isGetTotal) {
              const totalOffsets = response.headers.get('x-wp-total');
              return resolve({status, json, totalOffsets});
            }
            return resolve({status, json});
          })
          .catch(err => reject(err));
      })
      .catch(jsonError => reject(jsonError));
  });
};
