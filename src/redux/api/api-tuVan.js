import 'whatwg-fetch';
import {sendHttpRequest} from './http-handler';

const postTuVanUrl =
  'https://goldenhealthcarevn.com/wp-json/healthcare/v2/dat-cau-hoi';

const getTraLoiUrl =
  'https://goldenhealthcarevn.com/wp-json/heathcare/v1/get-list-tu-van/';

const getChiTietTraLoiUrl =
  'https://goldenhealthcarevn.com/wp-json/heathcare/v1/get-cau-tra-loi/';

export const execPostTuVan = data => {
  const parameters = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {'Content-Type': 'application/json'},
  };

  return new Promise((resolve, reject) => {
    sendHttpRequest(postTuVanUrl, parameters)
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};

export const execGetTraLoi = code => {
  const parameters = {
    method: 'GET',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  };

  return new Promise((resolve, reject) => {
    sendHttpRequest(getTraLoiUrl + code, parameters)
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};

export const execGetChiTietTraLoi = code => {
  const parameters = {
    method: 'GET',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  };

  return new Promise((resolve, reject) => {
    sendHttpRequest(getChiTietTraLoiUrl + code, parameters)
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};
