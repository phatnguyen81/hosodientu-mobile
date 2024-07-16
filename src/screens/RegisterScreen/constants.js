import {Platform} from 'react-native';
import normalize from 'react-native-normalize';
import {getTypeMobileDevice} from '../../shared/getDeviceInfos';

// iphone 8:(WIDTH, HEIGHT): (375,667)
// iphone 11:(WIDTH, HEIGHT): (414,896)

// gradient props
export const gradientProps = {
  colors: ['#21212199', '#21212199', '#010000', '#000000'],
  start: {x: 0, y: 0.3},
  end: {x: 0, y: 1},
};

// input props
export const inputProps = text => ({
  selectionColor: '#7B7B7B',
  placeholderTextColor: '#7B7B7B',
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
    android: normalize(-100),
    default: 0,
  });
};
