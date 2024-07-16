import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';
import Styles from '../../common/styles';
import Colors from '../../common/colors';
import TextCss from '../../common/styles';
import Images from '../../common/images';
import {NAVIGATION} from '../../navigations/constants';
import FastImage from 'react-native-fast-image';
import Title from './components/Title';

class GoiKhamChiTietScreen extends React.Component {
  navigate = item => () => {
    this.props.navigation.push(NAVIGATION.GOIKHAM_CHITIET, {
      name: item.title.rendered,
      html: item.content.rendered,
    });
  };

  _keyExtractor = (item, index) => '' + index;

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
        <SafeAreaView backgroundColor={Colors.white} />
        <Title title={'Danh sách gói khám'} />
        <FlatList
          style={{paddingTop: 10, backgroundColor: '#FAFAFA'}}
          data={this.props.goiKham}
          renderItem={({item, index}) => (
            <ItemPackage
              item={item}
              index={index}
              navigate={this.navigate(item)}
            />
          )}
          keyExtractor={this._keyExtractor}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

/* ====================================
 * ITEM Examination Package
 * ====================================*/

function ItemPackage({item, index, navigate}) {
  return (
    <TouchableOpacity style={[styles.item]} onPress={navigate}>
      <FastImage
        source={Images.goiKhamIcon[index]}
        style={[styles.image]}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={[styles.title, TextCss.s14b]}>{item.title.rendered}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  item: {
    height: 70,
    marginBottom: 10,
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
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default connect()(GoiKhamChiTietScreen);
