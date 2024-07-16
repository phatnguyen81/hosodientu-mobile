import React from 'react';
import {
  SectionList,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ScrollView} from 'react-native-gesture-handler';
import Styles, {width} from '../../common/styles';
import colors from '../../common/colors';
import {NAVIGATION} from '../../navigations/constants';
import Header from '../../components/Header1';
import WithEmpty from '../../components/EmptyHOC';

const WithEmptyHeaderTitle = WithEmpty(HeaderTitle);

function Item({item, isLast, index, navigation}) {
  const name = `${item.name.slice(0, item.name.length - 11)} ${item.name.slice(
    item.name.length - 10,
  )}`; // 11 is lengnth date (20/12/2019) = 11 chars)
  const nam = item.nam;
  const itemCondition = {
    borderBottomWidth: isLast ? 0 : 1,
    backgroundColor: index % 2 === 0 ? colors.white : '#EEEEEE',
  };
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push(NAVIGATION.BANG_TRA_CUU_CHI_TIET, {
          paramStr: item.paramStr,
          header: item.name,
        });
      }}>
      <View style={[css.item, itemCondition]}>
        <View style={css.viewItemCol1}>
          <Text style={css.textItem1}>{name}</Text>
        </View>
        <View style={css.viewItemCol3}>
          <Text style={css.textItem3}>{nam}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function HeaderTitle({data}) {
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
        data: data,
      },
    ];
  };

  const dataList = convertData(props.dataFromQrCode);
  return (
    <SafeAreaView style={css.container}>
      <StatusBar barStyle={'light-content'} />
      <Header
        bgColor={colors.white}
        text={'Tra cứu kết quả nhanh'}
        nameL="ios-arrow-back"
        typeL="Ionicons"
        onPressL={() => props.navigation.goBack()}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false} 
        showsVerticalScrollIndicator={false}
        style={css.scrollView}>
        <SectionList
          sections={dataList}
          renderItem={({item, index}) => (
            <Item
              item={item}
              index={index}
              isLast={index === dataList[0].data.length-1}
              navigation={props.navigation}
            />
          )}
          keyExtractor={item => item.id}
          scrollEnabled={false}
          renderSectionHeader={
            ({section: {title}}) => (
              <WithEmptyHeaderTitle
                isEmpty={dataList[0].data.length === 0}
                data={title}
              />
            )
          }
        />
        <View style={{height:30}}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const css = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.white
  },
  scrollView: {
    margin: Styles.margin.medium,
    borderRadius: 7,
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
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
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
    width: width - 60 - 40,
    alignItems: 'flex-start',
  },
  viewItemCol3: {
    width: 50,
    alignItems: 'center',
  },
  viewEmpty: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    left: -20,
    padding: 20,
  },
});
