/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Styles, {width} from '../../../common/styles';
import colors from '../../../common/colors';
import {formatDDMMYYYYHHmm} from '../../../utilities';
import {NAVIGATION} from '../../../navigations/constants';

function Item({
  index,
  title,
  shotContent,
  date,
  isLast,
  image,
  content,
  navigaitonBanTinChiTiet,
}) {
  return (
    <TouchableOpacity
      onPress={navigaitonBanTinChiTiet({content, title})}
      style={[
        css.item,
        css.shadow,
        {
          marginBottom: isLast ? 0 : 10,
          marginHorizontal: 10,
        },
      ]}>
      <Text numberOfLines={3} style={css.title}>
        {title}
      </Text>
      <View style={css.viewImage}>
        <FastImage
          source={{
            uri: image,
          }}
          resizeMode={FastImage.resizeMode.cover}
          style={css.image}
        />
        <View style={css.viewDescription}>
          <Text numberOfLines={3} style={css.textDesciption}>
            {shotContent}
          </Text>
          <Text style={css.textDate}>{formatDDMMYYYYHHmm(date)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function PostList({posts, navigation, homePostLoading}) {
  const navigaitonBanTinChiTiet = ({content, title}) => () => {
    navigation.push(NAVIGATION.BAN_TIN_CHI_TIET, {
      content: content,
      title: title,
    });
  };

  return (
    <SafeAreaView style={css.container}>
      <FlatList
        data={posts}
        style={{width: '100%', paddingVertical: 10}}
        initialNumToRender={15}
        windowSize={31}
        maxToRenderPerBatch={15}
        legacyImplementation
        removeClippedSubviews
        updateCellsBatchingPeriod={100}
        renderItem={({item, index}) => (
          <Item
            index={index}
            title={item.title}
            shotContent={item.shotContent}
            image={item.image}
            date={item.date}
            content={item.content}
            navigaitonBanTinChiTiet={navigaitonBanTinChiTiet}
            isLast={index === posts.length - 1}
            onEndReachedThreshold={0.5}
          />
        )}
        keyExtractor={item => '' + item.id}
      />
      {homePostLoading && (
        <View style={{width: '100%', height: 30}}><ActivityIndicator color={colors.submit} size={'large'} /></View>
      )}
    </SafeAreaView>
  );
}

const css = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    flex: 1,
  },
  item: {
    backgroundColor: 'white',
    paddingBottom: 10,
    borderRadius: 10,
    padding: 10,
  },
  title: {
    fontSize: Styles.FontSize.medium,
    fontFamily: Styles.FontFamily.robotoBold,
    color: colors.black,
    textTransform: 'capitalize',
    marginBottom: Styles.margin.small,
  },
  viewImage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 0.3 * width,
    height: (0.3 * width * 3) / 4,
    borderRadius: Styles.radius.tiny,
  },
  viewDescription: {
    paddingLeft: 10,
    flexShrink: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
  textDesciption: {
    fontSize: Styles.FontSize.small,
    // fontStyle: 'italic',
    textAlignVertical: 'center',
  },
  textDate: {
    fontSize: Styles.FontSize.tiny,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
