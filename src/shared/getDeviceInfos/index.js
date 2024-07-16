import {Dimensions, Platform} from 'react-native';

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const {height, width} = Dimensions.get('window');

export const isSmallDevice = height <= 667 && height >= 640;
export const isMediumDevice = height <= 800 && height >= 736;
export const isLagreDevice = height <= 896 && height >= 812;

export const smallOrMediumDevice = isMediumDevice || isSmallDevice;

export const getTypeMobileDevice = () => {
  if (isSmallDevice) {
    return 'small';
  }
  if (isMediumDevice) {
    return 'medium';
  }
  if (isLagreDevice) {
    return 'lagre';
  }
  return false;
};

export const isIPhoneX = () =>
  Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS
    ? (width === X_WIDTH && height === X_HEIGHT) ||
      (width === XSMAX_WIDTH && height === XSMAX_HEIGHT)
    : false;

export const isAndroid = Platform.OS === 'android';

export const StatusBarHeight = Platform.select({
  ios: isIPhoneX() ? 44 : 20,
  android: 0,
  default: 0,
});
