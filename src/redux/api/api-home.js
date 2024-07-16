import 'whatwg-fetch';
// import _ from 'lodash';
import {baseUrl2} from './base-url';
import {sendHttpRequest} from './http-handler-without-auth';

const getPostListUrl = offset =>
  `${baseUrl2}/wp-json/wp/v2/tin-tuc-cham-soc-khach-hang?_embed&per_page=15&offset=${offset ||
    1}`;
const getImageListUrl = `${baseUrl2}/wp-json/wp/v2/api-banner?_embed`;
const getVideoListUrl = `${baseUrl2}/wp-json/acf/options/video_intro`;

export const execGetPostList = offset => {
  const parameters = {
    method: 'GET',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  };
  //medicalCode=20000002
  return new Promise((resolve, reject) => {
    sendHttpRequest(getPostListUrl(offset), parameters, false, true)
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};

export const execGetImageList = () => {
  const parameters = {
    method: 'GET',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  };
  //medicalCode=20000002
  return new Promise((resolve, reject) => {
    sendHttpRequest(getImageListUrl, parameters)
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};

export const execGetVideoList = () => {
  const parameters = {
    method: 'GET',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  };
  //medicalCode=20000002
  return new Promise((resolve, reject) => {
    sendHttpRequest(getVideoListUrl, parameters)
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};
