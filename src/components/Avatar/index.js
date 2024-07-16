import React from 'react';
import {Image, View} from 'react-native';
import PropTypes from 'prop-types';

class Avatar extends React.PureComponent {
  render() {
    const {source, resizeMode = 'cover', style} = this.props;

    return (
      <Image
        style={[style, {borderRadius: 100}]}
        source={{uri: source}}
        resizeMode={resizeMode}
      />
    );
  }
}

Avatar.propTypes = {
  data: PropTypes.object,
};

export default Avatar;
