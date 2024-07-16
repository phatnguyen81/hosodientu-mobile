import React, {Component} from 'react';
import {SafeAreaView, View} from 'react-native';
import WebView from 'react-native-webview';
import colors from '../../common/colors';

import Header from '../../components/Header1';

export default class HoaDonDienTuChiTietScreen extends Component {
  render() {
    const header = this.props.navigation.getParam('header');
    const formatContent = `<html><head><meta name="viewport" content="width=device-width, initial-scale=0.5"><style>body { font-size: 90%; word-wrap: break-word; overflow-wrap: break-word; }</style></head><body>${
      this.props.dataDetail
    }</body></html>`;
    return (
      <View style={{flex: 1}}>
        <SafeAreaView style={{backgroundColor: colors.white}} />
        <Header
          bgColor={colors.white}
          text={header}
          nameL="ios-arrow-back"
          typeL="Ionicons"
          onPressL={() => this.props.navigation.goBack()}
        />

        {!!this.props.dataDetail && (
          <WebView
            source={{
              html: formatContent,
            }}
          />
        )}
      </View>
    );
  }
}
