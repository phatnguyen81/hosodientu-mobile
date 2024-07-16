import React, {Component} from 'react';
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  View,
  Text,
  StatusBar,
} from 'react-native';
import colors from '../../common/colors';
import Header from '../../components/Header1';
import Images from '../../common/images';
import css from './style';
import {NAVIGATION} from '../../navigations/constants';
import {timeDifferenceVN} from '../../utilities';
import {STATUS} from './constants';
import WithEmpty from '../../components/EmptyHOC';

const WithEmptyListThongBao = WithEmpty(FlatList);

export default function BacSiTraLoiScreen(props) {
  const header = props.navigation.state.params.navigationName;
  function navigate(item) {
    props.navigation.push(NAVIGATION.TU_VAN_CHI_TIET_BAC_SI_TRA_LOI, {
      item: item,
    });
  }
  return (
    <View>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={{backgroundColor: colors.submit}} />
      <Header
        bgColor={colors.white}
        text={header}
        nameL="ios-arrow-back"
        typeL="Ionicons"
        onPressL={() => props.goBack()}
      />
      <WithEmptyListThongBao
        isEmpty={props.listTraLoi.length === 0}
        text={`Bạn chưa đặt câu hỏi hoặc câu hỏi chưa được duyệt`}
        data={props.listTraLoi}
        renderItem={({item}) => (
          <Item item={item} navigate={() => navigate(item)} />
        )}
        keyExtractor={item => item.post_date}
      />
    </View>
  );
}

function Item({item, navigate}) {
  return (
    <TouchableOpacity style={css.item} onPress={navigate}>
      <View style={css.viewContent}>
        <Image source={Images.CauHoi} style={[css.itemImage]} />
        <View>
          <Text style={css.itemText}>{item.post_title}</Text>
          <Text style={css.itemDate}>
            Đã hỏi {timeDifferenceVN(item.post_date)}
          </Text>
          {item.status === STATUS.ANSWERED ? (
            <View style={css.viewStatus1}>
              <Text style={css.txtStatus}>Đã trả lời</Text>
            </View>
          ) : (
            <View style={css.viewStatus0}>
              <Text style={css.txtStatus}>Chưa trả lời</Text>
            </View>
          )}
        </View>
      </View>

      <Image source={Images.ArrowRight} style={[css.imageArrow]} />
    </TouchableOpacity>
  );
}
