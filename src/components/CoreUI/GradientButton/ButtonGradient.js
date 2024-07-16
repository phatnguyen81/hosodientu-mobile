import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Text} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../common/colors';
import Styles from '../../../common/styles';

export const ButtonGradient = ({
  colors = [Colors.tintGradient.start, Colors.tintGradient.end],
  height = 50,
  rounded = true,
  children = <Text style={[Styles.s16b, Styles.white]}>Button</Text>,
  style,
  start,
  end,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      style={[css.container, style ? style : null]}
      onPress={onPress}>
      <LinearGradient
        colors={colors}
        start={start || {x: 0.0, y: 0.25}}
        end={end || {x: 0.5, y: 1.0}}
        style={[
          Styles.Common.ColumnCenter,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            height: height,
            borderRadius: rounded ? height / 2 : 0,
          },
        ]}>
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const css = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
