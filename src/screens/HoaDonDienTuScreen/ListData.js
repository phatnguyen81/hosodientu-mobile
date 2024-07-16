import React from 'react';
import {
  SectionList,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
import Styles, {width} from '../../common/styles';
import colors from '../../common/colors';
import {NAVIGATION} from '../../navigations/constants';
import FastImage from 'react-native-fast-image';

function ItemEmpty() {
  return (
    <View style={css.viewEmpty}>
      <FastImage
        source={require('../../../assets/images/nodata.png')}
        resizeMode={FastImage.resizeMode.contain}
        style={{width: 200, height: 100}}
      />
      <Text>Không có dữ liệu</Text>
    </View>
  );
}

function Item({item, isLast, index, navigation}) {
  const name = `${item.name.slice(0, item.name.length - 11)} ${item.name.slice(
    item.name.length - 10,
  )}`; // 11 is lengnth date (20/12/2019) = 11 chars)
  // const ngayThucHien = item.ngayThucHien;
  const nam = item.nam;
  // const kq = item.isKetQua ? 'Đã khám' : 'Đang đợi';
  const itemCondition = {
    borderBottomWidth: isLast ? 0 : 1,
    backgroundColor: index % 2 === 0 ? colors.white : '#EEEEEE',
  };
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push(NAVIGATION.HOA_DON_DIEN_TU_CHI_TIET, {
          paramStr: item.paramStr,
          header: item.name,
        });
      }}>
      <View style={[css.item, itemCondition]}>
        <View style={css.viewItemCol1}>
          <Text style={css.textItem1}>{name}</Text>
        </View>
        {/* <View style={css.viewItemCol2}>
          <Text style={css.textItem2}>{ngayThucHien}</Text>
        </View> */}
        <View style={css.viewItemCol3}>
          <Text style={css.textItem3}>{nam}</Text>
        </View>
        {/* <View style={css.viewItemCol4}>
          <Text style={css.textItem4}>{kq}</Text>
        </View> */}
      </View>
    </TouchableOpacity>
  );
}

function Header({data}) {
  return (
    <View style={css.itemHeader}>
      <View style={css.viewItemCol1}>
        <Text style={css.title}>{data.title1}</Text>
      </View>
      <View style={css.viewItemCol3}>
        <Text style={css.title}>{data.title3}</Text>
      </View>
    </View>
  );
}

export default function ListData(props) {
  const convertData = data => {
    return [
      {
        title: {
          title1: 'Mã nhóm',
          title3: 'Năm',
        },
        data: data.children || [],
      },
    ];
  };

  const dataList = convertData(props.data);
  return (
    <ScrollView
      directionalLockEnabled={false}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      style={css.scrollView}>
      <SectionList
        sections={dataList}
        renderItem={({item, index}) => (
          <Item
            item={item}
            index={index}
            isLast={index === dataList[0].data.length - 1}
            navigation={props.navigation}
          />
        )}
        keyExtractor={item => item.id}
        scrollEnabled={false}
        renderSectionHeader={({section: {title}}) =>
          dataList[0].data.length === 0 ? (
            <ItemEmpty />
          ) : (
            <Header data={title} />
          )
        }
      />
    </ScrollView>
  );
}

const css = StyleSheet.create({
  scrollView: {
    margin: Styles.margin.small,
    borderRadius: Styles.radius.small,
    backgroundColor: colors.white,
    borderColor: colors.dimGray,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: Styles.margin.small,
    paddingHorizontal: Styles.padding.small,
    borderBottomWidth: 1,
    backgroundColor: colors.white,
    width: '100%',
  },
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderTopLeftRadius: Styles.radius.small,
    borderTopRightRadius: Styles.radius.small,
    backgroundColor: colors.submit,
    paddingVertical: Styles.margin.small,
    paddingHorizontal: Styles.padding.small,
  },
  title: {
    fontSize: Styles.FontSize.medium,
    fontFamily: Styles.FontFamily.robotoBold,
    color: colors.white,
  },
  header: {
    flexDirection: 'row',
  },
  viewItemCol1: {
    width: 0.8 * width,
    alignItems: 'flex-start',
  },
  viewItemCol3: {
    width: 0.2 * width,
    alignItems: 'flex-start',
  },
  viewEmpty: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    left: -20,
    padding: 20,
  },
});
