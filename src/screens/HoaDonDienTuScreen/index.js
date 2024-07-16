import React, {Component} from 'react';
import {Text, View, SafeAreaView, StatusBar} from 'react-native';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import {Icon, Content} from 'native-base';
import FastImage from 'react-native-fast-image';

import Header from '../../components/Header1';
import ListData from './ListData';
import {css} from './css';
import colors from '../../common/colors';
import images from '../../common/images';
import Styles from '../../common/styles';

export default class HoaDonDienTu extends Component {
  ItemCollapse;

  render() {
    const {reports, data, navigation} = this.props;
    return (
      <View style={css.container}>
        <SafeAreaView style={{backgroundColor: colors.white}} />
        <Header
          bgColor={colors.white}
          text={data.header}
          nameL="ios-arrow-back"
          typeL="Ionicons"
          onPressL={() => this.props.navigation.goBack()}
        />
        <Content
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          {reports.map((report, idx) => (
            <ItemCollapse
              key={`report_${idx}`}
              text={report.name}
              source={images.billIcon[report.iconIdx]}
              navigation={navigation}
              data={report}
            />
          ))}
        </Content>
      </View>
    );
  }
}

const ItemCollapse = ({text, source, data = [], navigation}) => {
  return (
    <Collapse>
      <CollapseHeader>
        <FeatureItem text={text} source={source} />
      </CollapseHeader>
      <CollapseBody>
        {data.length !== 0 && <ListData data={data} navigation={navigation} />}
      </CollapseBody>
    </Collapse>
  );
};

const FeatureItem = ({text, source}) => {
  return (
    <View style={[css.containerItem]}>
      <View style={[css.viewFeatureItem]}>
        <View style={[Styles.Common.RowCenterLeft]}>
          <FastImage
            style={css.imgFeatureItem}
            source={source}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Text style={css.textFeatureItem}>{text}</Text>
        </View>
        <View style={css.viewIconFeatureItem}>
          <Icon
            name="expand-more"
            type="MaterialIcons"
            style={css.iconFeatureItem}
          />
        </View>
      </View>
    </View>
  );
};
