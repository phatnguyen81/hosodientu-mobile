import {width, height} from '../../common/styles';

export const OPTION_NAVIGATION_MAP = {
  latitude: 10.799274,
  longitude: 106.647147,
  title: 'PHÒNG KHÁM ĐA KHOA QUỐC TẾ GOLDEN HEALTHCARE',
  dialogTitle: 'Chỉ đường',
  dialogMessage: 'Bật ứng dụng google map để trải nghiệm tốt hơn',
  cancelText: 'Thoát',
};

export const LATITUDE_INIT = 10.799274;
export const LONGITUDE_INIT = 106.647147;

export const ASPECT_RATIO = width / height;
export const LATITUDE_DELTA = 0.1222;
export const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
