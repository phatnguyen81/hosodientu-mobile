import React, {Component} from 'react';
import {SafeAreaView, View, Platform} from 'react-native';
import WebView from 'react-native-webview';
import colors from '../../common/colors';

import Header from '../../components/Header1';
import Styles from '../../common/styles';

export default class BanTinChiTietScreen extends Component {
  render() {
    const content = this.props.navigation.getParam('content');
    const formatContent = `<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>body { font-size: 120%; word-wrap: break-word; overflow-wrap: break-word; }</style></head><body>${content}</body></html>`;
    const title = this.props.navigation.getParam('title');
    const scalesPageToFit = Platform.OS === 'android';
    return (
      <View style={{flex: 1}}>
        <SafeAreaView style={{backgroundColor: colors.white}} />
        <Header
          bgColor={colors.white}
          text={title}
          nameL="ios-arrow-back"
          typeL="Ionicons"
          typeComp="left"
          onPressL={() => this.props.navigation.goBack()}
        />
        <View style={{flex: 1, padding: Styles.padding.medium, paddingTop: 0}}>
          {!!content && (
            <WebView
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              scalesPageToFit={scalesPageToFit}
              bounces={false}
              source={{
                html: formatContent,
              }}
            />
          )}
        </View>
      </View>
    );
  }
}
