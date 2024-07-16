import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import FastImage from 'react-native-fast-image';
import Styles, {width} from '../../../common/styles';
import {NAVIGATION} from '../../../navigations/constants';
import colors from '../../../common/colors';

const Banner = ({images, isLoading, navigation}) => {
  return isLoading ? null : (
    <Swiper
      style={css.listImage}
      autoplay
      containerStyle={css.containerStyle}
      dotStyle={css.dotStyle}
      paginationStyle={css.paginationStyle}
      activeDotStyle={css.activeDotStyle}>
      {images.map((item, index) => (
        <TouchableOpacity
          onPress={() =>
            navigation.push(NAVIGATION.CHI_TIET_BANNER, {
              index: index,
              item: item,
            })
          }
          style={css.slideImage}
          key={item.id}>
          <FastImage
            source={{
              uri: item.uri,
            }}
            style={css.image}
            resizeMode={FastImage.resizeMode.stretch}
          />
        </TouchableOpacity>
      ))}
    </Swiper>
  );
};

export default Banner;

export const css = StyleSheet.create({
  // -------- style for swiper -----------
  'view-swiper': {
    paddingBottom: Styles.padding.small,
  },
  dotStyle: {
    backgroundColor: '#FFE0B2',
  },
  activeDotStyle: {
    backgroundColor: colors.submit,
  },
  paginationStyle: {
    // alignItems: 'flex-end',
    // justifyContent: 'flex-end',
    bottom: 0,
  },
  listImage: {
    height: (width * 9) / 16,
    flex: null,
    marginBottom: Styles.margin.small,
  },
  containerStyle: {
    height: (width * 9) / 16,
    flex: null,
    marginBottom: Styles.margin.small,
  },
  slideImage: {
    height: (width * 9) / 16,
    justifyContent: 'center',
    alignItems: 'center',
    //marginLeft: normalize(20),
    // backgroundColor: '#9DD6EB',
  },
  listVideo: {
    height: (width * 9) / 16,
    flex: null,
  },
  slideVideo: {
    height: (width * 9) / 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  // -------- style for image -----------
  image: {
    height: (width * 9) / 16,
    width: width,
  },
});
