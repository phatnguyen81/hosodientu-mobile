import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'native-base';
import FastImage from 'react-native-fast-image';

const CustomIcon = ({isIcon, name, type, style, color, source}) => {
  return isIcon ? (
    <Icon name={name} type={type} style={style} color={color} />
  ) : (
    <FastImage
      style={[style]}
      source={source}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};

export default CustomIcon;
