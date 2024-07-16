// iphone 8:(WIDTH, HEIGHT): (375,667)
// iphone 11:(WIDTH, HEIGHT): (414,896)
import {Platform} from 'react-native';
import normalize from 'react-native-normalize';

import {getTypeMobileDevice} from '../../shared/getDeviceInfos';

// gradient props
export const gradientProps = {
  colors: ['#21212199', '#21212199', '#010000', '#000000'],
  start: {x: 0, y: 0.3},
  end: {x: 0, y: 1},
};

// input props
export const inputProps = text => ({
  selectionColor: '#C9C9C8',
  placeholderTextColor: '#C9C9C8',
  placeholder: text,
});

export const getNumberOfset = isFocus => {
  const numberOfset = type =>
    ({
      small: normalize(-200),
      medium: normalize(-50),
      lagre: normalize(0),
    }[type] || 0);
  return Platform.select({
    ios: isFocus ? numberOfset(getTypeMobileDevice()) : 0,
    android: normalize(-300),
    default: 0,
  });
};
