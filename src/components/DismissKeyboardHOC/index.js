import React from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';

const onPress = props => {
  if (props.onPress) {
    props.onPress();
  }
  Keyboard.dismiss();
};

export const DismissKeyboardHOC = Comp => {
  return ({children, ...props}) => (
    <TouchableWithoutFeedback onPress={() => onPress(props)} accessible={false}>
      <Comp {...props}>{children}</Comp>
    </TouchableWithoutFeedback>
  );
};
