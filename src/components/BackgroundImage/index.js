import React from 'react';
import {ImageBackground, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import FastImage from 'react-native-fast-image';
const AnimatedImage = Animatable.createAnimatableComponent(FastImage);
const {width, height} = Dimensions.get('window');

export const Background = ({
  uri,
  data,
  style,
  animation,
  delay = 1000,
  duration = 1600,
  isAnimated,
  easing = 'ease-out-expo',
}) =>
  isAnimated ? (
    <AnimatedImage
      source={uri ? {uri, cache: 'only-if-cached'} : data}
      resizeMode={FastImage.resizeMode.contain}
      style={style}
      animation={animation}
      delay={delay}
      duration={duration}
      easing={easing}
    />
  ) : (
    <FastImage
      source={uri ? {uri, cache: 'only-if-cached'} : data}
      resizeMode={FastImage.resizeMode.contain}
      style={style}
    />
  );

Background.propTypes = {
  uri: PropTypes.string,
  data: PropTypes.number,
  delay: PropTypes.number,
  duration: PropTypes.number,
  easing: PropTypes.string,
  isAnimated: PropTypes.bool,
};
