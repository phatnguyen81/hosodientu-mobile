/**
 * COMPONENT: handle animation decay for HOC component
 */
import React, {useEffect} from 'react';
import {TouchableOpacity, Animated} from 'react-native';
import PropTypes from 'prop-types';

export const DecayAnimationHOC = Comp => {
  const anim = new Animated.ValueXY();

  const onAction = props => {
    if (props.isEnable) {
      Animated.decay(anim, {
        velocity: {x: 0, y: -2},
        deceleration: 0.99,
      }).start();
    }
  };
  useEffect(() => {
    // onAction(prop)
  });

  return ({children, ...props}) => (
    <Comp
      {...props}
      onPress={() => onAction(props)}
      style={{backgroundColor: 'red', width: 100}}>
      <Animated.Text style={anim.getLayout()}>
        {' '}
        Click here to start animation{' '}
      </Animated.Text>
    </Comp>
  );
};

// proptype
DecayAnimationHOC.propTypes = {
  data: PropTypes.object,
};
