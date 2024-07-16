/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import Styles from '../../common/styles';
import Header from '../../components/Header1';
import Colors from '../../common/colors';
import TextCss from '../../common/styles';
import {ScrollView} from 'react-native-gesture-handler';
import Images from '../../common/images';

class LichKhamChiTietScreen extends React.Component {
  render() {
    const lichKham = this.props.detaileSchedule;
    return (
      <View style={styles.container}>
        <SafeAreaView backgroundColor={Colors.submit} />
        <StatusBar backgroundColor={Colors.submit} barStyle="light-content" />
        <Header
          bgColor={Colors.white}
          text={this.props.navigation.getParam('nameCategories')}
          nameL="ios-arrow-back"
          typeL="Ionicons"
          onPressL={() => {
            this.props.navigation.goBack();
          }}
        />
        <ScrollView>
          {/* <ThongTinBacSi /> */}
          <LichKham lichKham={lichKham} />
        </ScrollView>
      </View>
    );
  }
}

/* ====================================
 * THONG TIN BAC SI
 * ====================================*/

// function ThongTinBacSi() {
//   return (
//     <FlatList
//       data={inFoDoctor.inFoBacSi}
//       renderItem={({item}) => <ItemThongTinBacSi item={item} />}
//       keyExtractor={index => {
//         '' + index;
//       }}
//       showsVerticalScrollIndicator={false}
//     />
//   );
// }

// function ItemThongTinBacSi({item}) {
//   return (
//     <>
//       <View style={[styles.viewThongTinBacSi]}>
//         <Image
//           source={require('../../../assets/images/avatar.png')}
//           style={[styles.image]}
//         />
//         <View sty>
//           <Text style={[TextCss.s14b, styles.tenBacSi]}>{item.TenBacSi}</Text>
//           <Text style={[TextCss.s12i, styles.moTaBacSi]}>{item.MoTa}</Text>
//         </View>
//       </View>
//       <TouchableOpacity style={[styles.btnXemChiTiet]}>
//         <Text style={[TextCss.s14b, {color: '#fff'}]}>
//           Xem thông tin và lịch khám chi tiết -->
//         </Text>
//       </TouchableOpacity>
//     </>
//   );
// }

/* ====================================
 * LICH KHAM
 * ====================================*/

function LichKham({lichKham}) {
  if (lichKham.length !== 0) {
    return (
      <FlatList
        data={lichKham}
        renderItem={({item}) => <ItemLichKham item={item} />}
        keyExtractor={index => {
          '' + index;
        }}
        showsVerticalScrollIndicator={false}
        style={{marginBottom: 20}}
      />
    );
  } else {
    return null;
  }
}

function ItemLichKham({item}) {
  return (
    <View style={[styles.itemLicKham]}>
      <View style={styles.viewThu}>
        <Text style={[TextCss.s16b, styles.txtThu, {color: '#fff'}]}>
          {item.Thu}
        </Text>
      </View>
      <ItemBuoi item={item.Buoi} />
    </View>
  );
}

function ItemBuoi({item}) {
  const items = [];
  for (let i = 0; i < item.length; i++) {
    items.push(
      <View style={{paddingVertical: 7, paddingLeft: 10}}>
        <View>
          <Text key={i} style={[TextCss.s16b]}>
            {item[i].TenBuoi}
          </Text>
        </View>
        <ItemBacSi item={item[i].DsBacSi} />
      </View>,
    );
  }
  return <View>{items}</View>;
}

function ItemBacSi({item}) {
  const items = [];
  for (let i = 0; i < item.length; i++) {
    items.push(
      <View style={[styles.viewBacSi]}>
        <View>
          <Image source={Images.BacSi} style={[styles.imageBacSi]} />
        </View>
        <View style={{marginLeft: 5}}>
          <Text key={i} style={[TextCss.s14, {marginRight: 90}]}>
            {item[i].post_title}
          </Text>
        </View>
      </View>,
    );
  }
  return <View>{items}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  item: {
    height: 80,
    marginTop: 10,
    borderRadius: 10,
    marginHorizontal: Styles.margin.small,
    paddingHorizontal: Styles.margin.small,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    elevation: 7,
  },
  title: {
    color: Colors.black,
    paddingHorizontal: 10,
    marginRight: 25,
    marginLeft: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  viewThongTinBacSi: {
    // alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
  tenBacSi: {
    marginLeft: 15,
    marginRight: 15,
  },
  moTaBacSi: {
    marginLeft: 15,
    marginRight: 50,
    marginTop: 5,
    flexWrap: 'wrap',
    color: Colors.dark,
  },
  btnXemChiTiet: {
    marginTop: 10,
    backgroundColor: Colors.secondBackgound,
    marginHorizontal: 15,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  itemLicKham: {
    // alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.submit,
  },
  viewThu: {
    width: 60,
    backgroundColor: Colors.submit,
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
  },
  imageBacSi: {
    width: 20,
    height: 20,
  },
  viewBacSi: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  txtThu: {
    color: '#fff',
    marginHorizontal: 5,
    textAlign: 'center',
  },
});

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LichKhamChiTietScreen);
