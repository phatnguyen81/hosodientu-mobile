import React from 'react';
import {
  SafeAreaView,
  Image,
  View,
  Text,
  FlatList,
  StatusBar,
} from 'react-native';
import colors from '../../common/colors';
import Header from '../../components/Header1';
import Images from '../../common/images';
import css from './style';
import Avatar from '../../components/Avatar';

export default function BacSiTraLoiScreen(props) {
  return (
    <View>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={{backgroundColor: colors.submit}} />
      <Header
        bgColor={colors.white}
        text={'Chi tiết'}
        nameL="ios-arrow-back"
        typeL="Ionicons"
        onPressL={() => props.goBack()}
      />
      <ContentCauHoi item={props.item} user={props.user} />
      {props.chiTietTraLoi.length === 0 ? null : (
        <FlatList
          data={props.chiTietTraLoi.reverse()}
          renderItem={({item}) => (
            <ContentTraLoi chiTietTraLoi={item} user={props.user} />
          )}
          keyExtractor={item => item.ID}
        />
      )}
    </View>
  );
}

function ContentCauHoi({item, user}) {
  return (
    <View style={css.viewCauHoi}>
      {user.avatar ? (
        <Avatar
          source={'data:image/jpeg;base64,' + user.avatar}
          style={[css.imageUser]}
        />
      ) : (
        <Image source={user.avatar} style={[css.imageUser]} />
      )}

      <View style={css.viewNoiDungCauHoi}>
        <Text style={css.txtBenhNhan}>{user.ten}</Text>
        <Text style={css.txtNoiDungBenhNhan}>{item.post_content}</Text>
        <Text style={css.txtThoiGian}>{item.post_date}</Text>
      </View>
    </View>
  );
}

function ContentTraLoi({chiTietTraLoi, user}) {
  return (
    <View style={css.viewTraLoi}>
      <View style={css.viewNoiDungTraLoi}>
        <Text style={css.txtTraLoi}>{'Bác sĩ'}</Text>
        <Text style={css.txtNoiDungBenhNhan}>{chiTietTraLoi.post_content}</Text>
        <Text style={css.txtThoiGian}>{chiTietTraLoi.post_date}</Text>
      </View>
      <Image source={Images.UserOrange} style={[css.imageUser]} />
    </View>
  );
}
