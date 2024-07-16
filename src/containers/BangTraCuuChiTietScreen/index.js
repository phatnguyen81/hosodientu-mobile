import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
// import component
import BangTraCuuChiTietComp from '../../screens/BangTraCuuChiTietScreen';

import WithLoading from '../../components/WithLoading';
import {
  execGetDetailQuickReport,
  execResetDetailQuickReport,
} from '../../redux/actions/traCuuNhanhActions';

const BangTraCuuChiTietWithLoading = WithLoading(BangTraCuuChiTietComp);

class BangTraCuuChiTietScreen extends Component {
  constructor(props) {
    super(props);
    this.props.execResetDetailQuickReport();
  }

  componentDidMount() {
    const paramStr = this.props.navigation.getParam('paramStr');
    this.props.getReportDetails(paramStr);
  }

  render() {
    return (
      <BangTraCuuChiTietWithLoading
        {...this.props}
        isLoading={this.props.quickReportDetailLoading}
        isActionHeader
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getReportDetails: paramStr => dispatch(execGetDetailQuickReport(paramStr)),
  execResetDetailQuickReport: () => dispatch(execResetDetailQuickReport()),
});

const mapStateToProps = state => ({
  user: state.auth.user,
  dataDetail: state.traCuuNhanh.dataDetail,
  quickReportDetailLoading: state.loading.quickReportDetailLoading,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BangTraCuuChiTietScreen);
