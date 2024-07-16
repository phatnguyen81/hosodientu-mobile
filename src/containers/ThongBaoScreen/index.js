import React from 'react';
import {connect} from 'react-redux';
import {BackHandler} from 'react-native';

// import component
import ThongBaoComp from '../../screens/ThongBaoScreen';
import {execgoBack} from '../../redux/actions/authActions';
import {execGetListNotification} from '../../redux/actions/thongBaoAction';
import WithLoading from '../../components/WithLoading';
import {setLoading} from '../../redux/actions/LoadingAction';

const ThongBaoWithLoading = WithLoading(ThongBaoComp);

class ThongBao extends React.Component {
  render() {
    return (
      <ThongBaoWithLoading
        {...this.props}
        isLoading={this.props.thongBaoLoading}
        isBackground={false}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.services.user.userInfo,
    deviceId: state.auth.uniqueId,
    thongbaoList: state.thongBao.data,
    thongBaoLoading: state.loading.thongBaoLoading,
  };
};

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch(execgoBack()),
  setLoading: (scope, loading) => dispatch(setLoading(scope, loading)),
  getListNotification: () => dispatch(execGetListNotification()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ThongBao);
