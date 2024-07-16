import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {css} from '../css';
import FastImage from 'react-native-fast-image';
import Styles from '../../../common/styles';

const Item = ({text, image, onPress, index, isSmall}) => {
  const getStyle = () =>
    ({
      1: {borderTopLeftRadius: 15},
      2: {borderTopRightRadius: 15},
      5: {borderBottomLeftRadius: 15},
      6: {borderBottomRightRadius: 15},
    }[index]);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[css.item, Styles.Common.ColumnCenter, {...getStyle()}]}>
      <FastImage
        style={css.itemImage}
        resizeMode={FastImage.resizeMode.contain}
        source={image}
      />
      <Text
        style={[
          css.itemText,
          {fontSize: isSmall ? Styles.FontSize.small : Styles.FontSize.medium},
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Item;
