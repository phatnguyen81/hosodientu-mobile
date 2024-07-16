import React from 'react';
import {View} from 'react-native';
import Loader from '../Loader';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';
import VideoListHolder from './VideoListHolder';
const BANNER = 'banner';
const POST = 'post';
// const VIDEO = 'video';
const WithPlaceholder = Component => {
  const HolderComp = ({type, style, styleL, styleR}) => {
    if (type === BANNER) {
      return (
        <Placeholder
          Animation={Fade}
          Left={() => <PlaceholderMedia style={style} />}
        />
      );
    } else if (type === POST) {
      const propsPost = {
        Animation: Fade,
        Left: () => (styleL ? <PlaceholderMedia style={styleL} /> : null),
        Right: () => (styleR ? <PlaceholderMedia style={styleR} /> : null),
      };
      return (
        <>
          <Placeholder style={{padding: 5}} {...propsPost}>
            <PlaceholderLine width={80} />
            <PlaceholderLine />
            <PlaceholderLine width={30} />
          </Placeholder>
          <Placeholder style={{padding: 5}} {...propsPost}>
            <PlaceholderLine width={80} />
            <PlaceholderLine />
            <PlaceholderLine width={30} />
          </Placeholder>
        </>
      );
    }
    return <VideoListHolder />;
  };
  return function WithPlaceholderComponent({isLoading, ...props}) {
    return isLoading ? (
      <HolderComp {...props} style={props.style} />
    ) : (
      <Component {...props} />
    );
  };
};

export default WithPlaceholder;
