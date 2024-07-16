import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import colors from '../../../common/colors';
import Styles, {width} from '../../../common/styles';
import {timeDifference} from '../../../utilities';
import AutoHeightWebView from 'react-native-autoheight-webview';
let count = 0;

function Item({
  title,
  notificatedDate,
  description,
  isRead,
  maxItem,
  setLoading,
}) {
  const _onLoadEnd = () => {
    if (count < maxItem) {
      count += 1;
      if (count === maxItem) {
        setLoading('thongBao', false);
      }
    } else if (maxItem === 0) {
      setLoading('thongBao', false);
    }
  };
  return (
    <View style={[css.item, !isRead && css.shadow, isRead && css.viewIsRead]}>
      <Text style={[css.title, isRead && css.titleTextIsRead]}>{title}</Text>

      <AutoHeightWebView
        style={css.webview}
        scrollEnabled={false}
        onLoad={() => (count < maxItem ? setLoading('thongBao', true) : null)}
        onLoadEnd={_onLoadEnd}
        customStyle={`
        * {
          font-size: 17px;
          font-family:'sans-serif';
          color: ${colors.grayText};
          text-align: justify;
        }
      `}
        source={{
          html: description,
        }}
        scalesPageToFit={false}
      />
      {/* <Text style={[css.descriptionText, isRead && css.descriptionTextIsRead]}>
        {description}
      </Text> */}
      <Text style={css.dateText}>{timeDifference(notificatedDate)}</Text>
    </View>
  );
}

const ListThongBao = ({thongbaoList, setLoading, deviceId, userId}) => {
  return (
    <FlatList
      data={thongbaoList.filter(o => o)}
      extraData={thongbaoList.filter(o => o)}
      style={css.container}
      renderItem={({item, index}) => (
        <Item
          title={item.title}
          notificatedDate={item.notificatedDate}
          description={item.description}
          isRead={item.isRead}
          setLoading={setLoading}
          maxItem={thongbaoList.length}
          isLast={index === thongbaoList.length - 1}
        />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default ListThongBao;

const css = StyleSheet.create({
  container: {
    // height: '100%',
    paddingVertical: Styles.padding.small,
  },
  item: {
    backgroundColor: colors.white,
    padding: Styles.padding.small + 2,
    marginHorizontal: Styles.padding.medium,
    marginTop: 8,
    paddingBottom: Styles.margin.small,
    justifyContent: 'space-between',
    borderRadius: Styles.radius.tiny + 2,
  },
  webview: {width: '100%', marginBottom: 0, paddingBottom: 0},
  title: {
    fontSize: Styles.FontSize.small + 1,
    fontFamily: Styles.FontFamily.sourceSansProBold,
    color: colors.black,
    marginBottom: Styles.margin.small,
  },
  descriptionText: {
    fontSize: Styles.FontSize.small,
    fontFamily: Styles.FontFamily.sourceSansProRegular,
    color: colors.grayText,
    // marginBottom: Styles.margin.small,
  },
  dateText: {
    fontSize: Styles.FontSize.small,
    fontFamily: Styles.FontFamily.sourceSansProLightItalic,
    color: colors.grayText,
    marginVertical: Styles.margin.tiny,
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
  viewIsRead: {
    backgroundColor: '#EFEBE9',
  },
  titleTextIsRead: {
    color: colors.grayText,
  },
  descriptionTextIsRead: {
    color: '#9E9E9E',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    elevation: 7,
  },
});
