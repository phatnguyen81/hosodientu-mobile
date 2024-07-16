import 'whatwg-fetch';
import {sendHttpRequest} from './http-handler';

const getListCategoriesUrl =
  'https://goldenhealthcarevn.com/wp-json/goldenheathcare/api_v1/get-categories';

const getDetaileSchedule =
  'https://goldenhealthcarevn.com/wp-json/acf/post/406';

const getLisProfileDoctor =
  'https://goldenhealthcarevn.com/wp-json/wp/v2/posts/';

export const execGetCategoriesList = () => {
  const parameters = {
    method: 'GET',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  };
  //medicalCode=20000002
  return new Promise((resolve, reject) => {
    sendHttpRequest(getListCategoriesUrl, parameters)
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};

// data requires property: idCategories
export const execGetDetaileSchedule = () => {
  const parameters = {
    method: 'GET',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  };
  //medicalCode=20000002
  return new Promise((resolve, reject) => {
    sendHttpRequest(getDetaileSchedule, parameters)
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};

// data requires property: idCategories
export const execGetProfileBacSi = code => {
  const parameters = {
    method: 'GET',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  };
  //medicalCode=20000002
  return new Promise((resolve, reject) => {
    sendHttpRequest(getLisProfileDoctor + `${code}?_embed'`, parameters)
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};
