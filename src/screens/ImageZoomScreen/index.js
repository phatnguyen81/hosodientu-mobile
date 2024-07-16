import ImageViewer from 'react-native-image-zoom-viewer';
import React from 'react';
export default class ZoomImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  render() {
    const {navigation} = this.props;
    let listImage = [];
    const images = navigation.getParam('images', null);
    const index = navigation.getParam('index', null);
    for (let img of images) {
      listImage.push({
        url: img.uri,
      });
    }
    return (
      <ImageViewer
        backgroundColor={'black'}
        index={index}
        imageUrls={listImage}
      />
    );
  }
}
