import React from 'react';
import {connect} from 'react-redux';
import {BackHandler} from 'react-native';

// import component
import ChiTietBannerComp from '../../screens/ChiTietBannerScreen';
import {execgoBack} from '../../redux/actions/authActions';
import WithLoading from '../../components/WithLoading';

const ChiTietBannerWithLoading = WithLoading(ChiTietBannerComp);

class ChiTietBanner extends React.Component {
  // Render any loading content that you like here
  render() {
    return (
      <ChiTietBannerWithLoading
        {...this.props}
        isLoading={this.props.homeLoading}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.services.user.userInfo,
    homeLoading: state.loading.homeLoading,
  };
};

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch(execgoBack()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChiTietBanner);
