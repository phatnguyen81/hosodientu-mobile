import React from 'react';
import {View, Text} from 'react-native';
import {css} from '../css';

const Title = ({title}) => {
  return (
    <View style={css.viewTitle}>
      <Text style={css.textTitle}>{title}</Text>
    </View>
  );
};

export default Title;
