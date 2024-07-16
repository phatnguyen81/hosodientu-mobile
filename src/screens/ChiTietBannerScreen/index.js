import React, {Component} from 'react';
import {SafeAreaView, View, ActivityIndicator, Text} from 'react-native';
import WebView from 'react-native-webview';
import colors from '../../common/colors';

import Header from '../../components/Header1';
import Styles, {width, height} from '../../common/styles';

export default class ChiTietBannerScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  _onLoadEnd = event => {
    this.setState({isLoading: false});
  };

  _onLoad = event => {
    this.setState({isLoading: true});
  };

  _onLoadStart = event => {
    this.setState({isLoading: true});
  };

  getHeaderName = (name, refWebview) => {
    if (!!refWebview && refWebview.props.source) {
    }
  };

  render() {
    const {title, link} = this.props.navigation.getParam('item');
    const myRule = `
    document.getElementById("header").parentNode.removeChild(document.getElementById("header"));
    document.getElementById("footer").parentNode.removeChild(document.getElementById("footer"));
    let breadcrumbHeath = document.getElementsByClassName("breadcrumbHeath");
    breadcrumbHeath[0].remove();
    let h4 = document.getElementsByClassName("column-title");
    h4[0].remove();
    let x = document.getElementsByClassName("col-md-4 col-sm-12 col-xs-12");
    x[0].firstElementChild.remove();
    document.getElementsByClassName("posts")[0].style.fontSize = '150%';
    document.getElementsByClassName("posts")[0].style.color = 'black';
    document.getElementsByClassName("row")[1].remove();
    document.getElementsByClassName("posts")[0].style.fontSize = 'initial';
    document.getElementsByClassName("container container-bd")[0].style.paddingTop = "0px"
    `;
    return (
      <View style={{flex: 1}}>
        <SafeAreaView style={{backgroundColor: colors.submit}} />
        <Header
          bgColor={colors.white}
          text={title
            .replace(
              /<(?:[^><\"\']*?(?:([\"\']).*?\1)?[^><\'\"]*?)+(?:>|$)/g,
              '',
            )
            .split('&#8211;')
            .join('-')
            .replace('&#8211;', '-')
            .replace('&#8230;', '...')}
          nameL="ios-arrow-back"
          typeL="Ionicons"
          onPressL={() => this.props.navigation.goBack()}
        />

        <WebView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          onLoad={this._onLoad}
          onLoadEnd={this._onLoadEnd}
          onLoadStart={this._onLoadStart}
          onNavigationStateChange={this._onNavigationStateChange}
          injectedJavaScript={
            'function injectRules() {' + myRule + '};injectRules();'
          }
          cacheEnabled
          source={{
            uri: link,
          }}
        />
        {this.state.isLoading && (
          <View
            style={{
              width,
              height,
              alignItems: 'center',
              paddingTop: height / 4,
            }}>
            <ActivityIndicator size="small" color={colors.submit} />
            <Text style={{color: colors.submit, marginTop: 5}}>
              Đang tải dữ liệu
            </Text>
          </View>
        )}
      </View>
    );
  }
}
