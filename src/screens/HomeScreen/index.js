import React, {Component} from 'react';
import {SafeAreaView, RefreshControl, View, StatusBar} from 'react-native';

import {css} from './css';
import Title from './components/Title';
import {Content} from 'native-base';
import Banner from './components/Banner';
import VideoList from './components/VideoList';
import PostList from './components/PostList';
import Styles, {width} from '../../common/styles';
import WithPlaceholder from '../../components/WithPlaceholder';
import colors from '../../common/colors';
import {NAVIGATION} from '../../navigations/constants';
import AsyncStorage from '@react-native-community/async-storage';
import {ASYNC_STORAGE} from '../../shared/constants';

const INCREMENT_OFFSET_LENGTH = 15;

const BannerWithHolder = WithPlaceholder(Banner);
const VideoListWithHolder = WithPlaceholder(VideoList);
const PostListWithHolder = WithPlaceholder(PostList);
export default class Home extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.props.posts === nextProps.posts &&
      this.props.postLoading === nextProps.postLoading &&
      this.props.numberNotification === nextProps.numberNotification &&
      this.props.offset === nextProps.offset
    ) {
      return false;
    }
    return true;
  }

  _onPressNavigationThongBao = props => async () => {
    AsyncStorage.setItem(ASYNC_STORAGE.READ_ALL_NOTIFICATION, 'true');
    props.navigation.navigate(NAVIGATION.THONG_BAO_STACK);
  };

  isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    return (
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 300
    );
  };

  onRefresh = refreshing => this.setState({refreshing});
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <Content
          style={css.content}
          showsVerticalScrollIndicator={false}
          // contentContainerStyle={{flex: 1}} // important!
          onScroll={({nativeEvent}) => {
            if (
              this.isCloseToBottom(nativeEvent) &&
              !this.props.homePostLoading
            ) {
              if (
                this.props.offset + INCREMENT_OFFSET_LENGTH <=
                this.props.totalOffset
              ) {
                this.props.execgetDataPostList(
                  this.props.offset + INCREMENT_OFFSET_LENGTH,
                );
              }
            }
          }}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={this.props.execgetDataHomeList}
            />
          }>
          <View>
            {/* handle header */}
            <View style={{paddingHorizontal: Styles.padding.small}}>
              <Title
                title={'Home'}
                isIcon
                isLogo
                number="0369.03.18.18"
                onPress={this._onPressNavigationThongBao(this.props)}
                numberNotification={this.props.numberNotification}
              />
             
            </View>
            <BannerWithHolder
                type={'banner'}
                style={css.holderBanner}
                images={this.props.images}
                isLoading={this.props.homeLoading}
                navigation={this.props.navigation}
              />
            <View style={css.break} />
            <View style={{paddingHorizontal: Styles.padding.small}}>
              <Title
                title={'Thư viện video'}
                paddingVertical={Styles.padding.tiny}
              />
              <VideoListWithHolder
                isLoading={this.props.homeLoading}
                videos={this.props.videos}
                navigation={this.props.navigation}
              />
            </View>
            <View style={css.break} />
            <View style={{paddingHorizontal: Styles.padding.small}}>
              <Title
                title={'Bài viết'}
                paddingVertical={Styles.padding.medium}
              />
            </View>
            <PostListWithHolder
              isLoading={this.props.homeLoading}
              posts={this.props.posts}
              type={'post'}
              styleL={css.holderPostLeft}
              navigation={this.props.navigation}
              offset={this.props.offset}
              homePostLoading={this.props.homePostLoading}
            />
          </View>
        </Content>
      </SafeAreaView>
    );
  }
}
