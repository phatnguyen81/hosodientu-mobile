import {Platform} from 'react-native';
import Toast from 'react-native-tiny-toast';
import normalize from 'react-native-normalize';
import {showMessage} from 'react-native-flash-message';

export const showCenter = (text, keyboardHeight = 0, isSuccess) => {
  return isSuccess
    ? Toast.showSuccess(text, {
        containerStyle: {
          borderRadius: 30,
        },
        animationDuration: 1000,
      })
    : Toast.show(text, {
        containerStyle: {
          borderRadius: 30,
          // top: -(keyboardHeight),
          top: Platform.select({
            ios: -normalize(keyboardHeight),
            android: 0,
            default: 0,
          }),
        },
        animationDuration: 1000,
      });
};

export const showBottom = text => {
  return Toast.show(text, {
    containerStyle: {
      borderRadius: 30,
    },
    animationDuration: 1000,
  });
};

export const showTop = (title, text, type = 'danger') => {
  showMessage({
    message: title,
    description: text,
    icon: type,
    type: type,
  });
};

export default {showCenter, showBottom, showTop};
