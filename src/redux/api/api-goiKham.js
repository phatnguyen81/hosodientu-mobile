import 'whatwg-fetch';
import {sendHttpRequest} from './http-handler';

const getListGoiKhamUrl =
  'https://goldenhealthcarevn.com/wp-json/wp/v2/api-cac-goi-kham';

export const execGetListGoiKham = code => {
  const parameters = {
    method: 'GET',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  };
  //medicalCode=20000002
  return new Promise((resolve, reject) => {
    sendHttpRequest(getListGoiKhamUrl, parameters)
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};
