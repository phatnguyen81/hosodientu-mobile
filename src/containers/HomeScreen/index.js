import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
// import component
import HomeComp from '../../screens/HomeScreen';
import {
  execgetDataHomeList,
  execgetDataPostList,
} from '../../redux/actions/homeAction';
import WithLoading from '../../components/WithLoading';

const HomeWithLoading = WithLoading(HomeComp);

class Home extends React.Component {
  componentDidMount() {
    this.props.execgetDataHomeList();
  }

  render() {
    return (
      <HomeWithLoading {...this.props} isLoading={this.props.homeLoading} />
    );
  }
}

const mapStateToProps = state => {
  return {
    nav: state.nav,
    user: state.services.user.userInfo,
    posts: state.home.posts,
    images: state.home.images,
    videos: state.home.videos,
    numberNotification: state.thongBao.numberNotification,
    homeLoading: state.loading.homeLoading,
    homePostLoading: state.loading.homePostLoading,
    offset: state.home.offset,
    totalOffset: state.home.totalOffset,
  };
};

const mapDispatchToProps = dispatch => ({
  execgetDataHomeList: offset => dispatch(execgetDataHomeList(offset)),
  execgetDataPostList: offset => dispatch(execgetDataPostList(offset)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
