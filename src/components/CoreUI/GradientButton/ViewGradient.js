import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

import Colors from '../../../common/colors';
import Styles from '../../../common/styles';

export const ViewGradient = ({
  colors = [Colors.tintGradient.start, Colors.tintGradient.end],
  children,
  style,
  start,
  end,
}) => {
  return (
    <LinearGradient
      colors={colors}
      start={start || {x: 0, y: 0.55}}
      end={end || {x: 0, y: 1}}
      style={style}>
      {children}
    </LinearGradient>
  );
};

ViewGradient.propTypes = {
  colors: PropTypes.array,
  style: PropTypes.object,
  start: PropTypes.object,
  end: PropTypes.object,
};
