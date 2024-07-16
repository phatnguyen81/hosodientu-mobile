import React, {Component} from 'react';
import {SafeAreaView, View} from 'react-native';
import WebView from 'react-native-webview';
import colors from '../../common/colors';

import Header from '../../components/Header1';

export default class BangTraCuuChiTietScreen extends Component {
  render() {
    const paramStr = this.props.navigation.getParam('paramStr');
    const header = this.props.navigation.getParam('header');
    const formatContent = `<html><head><meta name="viewport" content="width=device-width, initial-scale=0.45"><style>body { font-size: 90%; word-wrap: break-word; overflow-wrap: break-word; }</style></head><body>${
      this.props.dataDetail ? this.props.dataDetail[paramStr] : null
    }</body></html>`;

    return (
      <View style={{flex: 1}}>
        <SafeAreaView style={{backgroundColor: colors.white}} />
        <Header
          bgColor={colors.white}
          text={header}
          nameL="ios-arrow-back"
          typeComp="left"
          padding={15}
          typeL="Ionicons"
          onPressL={() => this.props.navigation.goBack()}
        />

        {!!this.props.dataDetail && !!this.props.dataDetail[paramStr] && (
          <View style={{padding: 20, flex: 1}}>
            <WebView
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              source={{
                html: formatContent,
              }}
            />
          </View>
        )}
      </View>
    );
  }
}
