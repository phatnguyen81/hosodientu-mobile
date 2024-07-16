import _ from 'lodash';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import component
import HoaDonComp from '../../screens/HoaDonDienTuChiTietScreen';

import WithLoading from '../../components/WithLoading';
import {execGetDetailReport} from '../../redux/actions/reportAction';

const HoaDonWithLoading = WithLoading(HoaDonComp);

class HoaDonDienTuChiTietScreen extends Component {
  componentDidMount() {
    const paramStr = this.props.navigation.getParam('paramStr');
    this.props.getReportDetails(paramStr);
  }

  render() {
    return (
      <HoaDonWithLoading
        {...this.props}
        isLoading={this.props.reportDetailLoading}
        isActionHeader
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getReportDetails: paramStr => dispatch(execGetDetailReport(paramStr)),

  // getReportDetails: paramStr =>
  //   dispatch({type: 'RTE_CHI_TIET_KHAM_BENH', payload: {paramStr}}),
});

const mapStateToProps = state => ({
  user: state.auth.user,
  dataDetail: state.report.dataDetail,
  reportDetailLoading: state.loading.reportDetailLoading,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HoaDonDienTuChiTietScreen);
