import _ from 'lodash';
import {put, call, takeEvery, all} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {setLoading} from '../actions/LoadingAction';
import {FETCH_GET_DATA_HOME_LIST, FETCH_GET_DATA_POST_LIST} from '../constants';
import {
  execGetPostList,
  execGetImageList,
  execGetVideoList,
} from '../api/api-home';
// import {execHandleTokenExpired} from '../actions/authActions';
import {
  execsaveDataHomeList,
  execsaveDataPostList,
} from '../actions/homeAction';
import Toast from '../../components/Toast';
import * as MSG from '../../shared/constants/Messages';
import {setError} from '../actions/errorAction';
import {execLogout, execgoBack} from '../actions/authActions';
import {ASYNC_STORAGE} from '../../shared/constants';
import {
  execGetNotificationsByDeviceId,
  execGetNotificationsByUserId,
} from '../api/api-thongBao';
import {
  execSaveListNotificationForDevice,
  execSaveListNotificationForUser,
} from '../actions/thongBaoAction';
import {execGetCategoriesList} from '../actions/scheduleAction';
const REMOVE_LINK = 'https://www.youtube.com/watch?v=';

/* ====================================
 * HANDLE POST SAGAS
 * ====================================*/

const formatPostList = (data, totalOffsets) => {
  if (Array.isArray(data)) {
    let parents = [];

    data.map(item => {
      parents.push({
        id: item.id,
        date: item.date,
        title: item.title.rendered
          .replace(/<(?:[^><\"\']*?(?:([\"\']).*?\1)?[^><\'\"]*?)+(?:>|$)/g, '')
          .replace('&#8211;', '-')
          .replace('&#8230;', '...'),
        type: item.type,
        content: item.content.rendered,
        shotContent: item.acf.intro_description
          .replace(/<(?:[^><\"\']*?(?:([\"\']).*?\1)?[^><\'\"]*?)+(?:>|$)/g, '')
          .replace('&#8211;', '-')
          .replace('&#8230;', '...'),
        image: _.get(
          item,
          "_embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url",
          '',
        ),
      });
    });
    return parents;
  }
  return [];
};
const formatImageList = data => {
  return data.map(item => ({
    id: item.id,
    uri: item._embedded['wp:featuredmedia'][0].link,
    title: item.title.rendered,
    link: item.link,
  }));
};
const formatVideoList = data =>
  data.map(item => item.links.url.replace(REMOVE_LINK, ''));

export function* handlegetDataHomeList({payload = {offset: 1}}) {
  try {
    yield put(setLoading('home', true)); // loading wait for api
    // const data = yield call(execgetDataHomeList);
    const userId = yield AsyncStorage.getItem(ASYNC_STORAGE.USER_ID);
    const deviceId = yield AsyncStorage.getItem(ASYNC_STORAGE.DEVICE_ID);
    const dataPromise = [
      call(execGetPostList, payload.offset),
      call(execGetImageList),
      call(execGetVideoList),
    ];

    // check call get datanotification theo deviceId
    if (userId !== null) {
      dataPromise.push(call(execGetNotificationsByUserId, {userId, deviceId}));
    } else if (deviceId !== null) {
      dataPromise.push(call(execGetNotificationsByDeviceId, deviceId));
    }

    // TODO: hanlde notification
    const [posts, images, videos, notifications] = yield all(dataPromise);
    yield put(setError('home', false));
    yield put(setLoading('homePost', false)); // loading wait for api
    yield put(setLoading('home', false)); // loading wait for api
    if (posts.status === 200 || posts.status === 201) {
      const formatPosts = formatPostList(posts.json);
      const formatImages = formatImageList(images.json);
      const formatVideos = formatVideoList(videos.json.video_intro.video_link);
      yield put(
        execsaveDataHomeList(
          formatPosts,
          formatImages,
          formatVideos,
          payload.offset,
          posts.totalOffsets,
        ),
      );
      if (userId !== null) {
        yield put(
          execSaveListNotificationForUser(notifications.json.reverse(), userId),
        );
      } else if (deviceId !== null) {
        yield put(
          execSaveListNotificationForDevice(
            notifications.json.reverse(),
            deviceId,
          ),
        );
      }

      yield put(execGetCategoriesList(true));
      return;
    }
    Toast.showBottom(MSG.ERROR_OCCURED);
    yield put(execgoBack());
  } catch (err) {
    yield put(setLoading('home', false));
    yield put(setError('home', true));
    Toast.showBottom(MSG.ERROR_OCCURED);
    yield put(execgoBack());
  }
}

export function* watchHandlegetDataHomeList() {
  yield takeEvery(FETCH_GET_DATA_HOME_LIST, handlegetDataHomeList); // call only
}

export function* handleGetPostList({payload = {offset: 1}}) {
  try {
    yield put(setLoading('homePost', true)); // loading wait for api
    const posts = yield call(execGetPostList, payload.offset);
    yield put(setLoading('homePost', false)); // loading wait for api
    if (posts.status === 200 || posts.status === 201) {
      const formatPosts = formatPostList(posts.json);
      yield put(execsaveDataPostList(formatPosts, payload.offset));
      return;
    }
    Toast.showBottom(MSG.ERROR_OCCURED);
    yield put(execgoBack());
  } catch (err) {
    yield put(setLoading('homePost', false)); // loading wait for api
    yield put(setLoading('home', false));
    yield put(setError('home', true));
    Toast.showBottom(MSG.ERROR_OCCURED);
    yield put(execgoBack());
  }
}

export function* watchHandleGetPostList() {
  yield takeEvery(FETCH_GET_DATA_POST_LIST, handleGetPostList); // call only
}
