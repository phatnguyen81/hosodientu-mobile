import _ from 'lodash';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import component
import HoaDonComp from '../../screens/HoaDonDienTuScreen';

import * as MSG from '../../shared/constants/Messages';
import {execGetReportList} from '../../redux/actions/reportAction';
import {execGetReportCompanyList} from '../../redux/actions/reportCompanyAction';
import Toast from '../../components/Toast';
import WithLoading from '../../components/WithLoading';

const HoaDonWithLoading = WithLoading(HoaDonComp);

class HoaDonDienTuScreen extends Component {
  componentDidMount() {
    this.initializeScreen();
  }
  initializeScreen = () => {
    const {user} = this.props;
    user && user.phanQuyen === 3
      ? this.getCompanyReports(user)
      : this.getPersonalReports(user);
  };

  getPersonalReports = async user => {
    if (!user.benhNhanId) {
      return this.handleError({detail: null, message: MSG.USER_NO_PATIENT_ID});
    }
    await this.props.execGetReportList(user.benhNhanId);
  };

  getCompanyReports = async user => {
    if (!user.donViCongTacId) {
      return this.handleError({detail: null, message: MSG.USER_NO_COMPANY_ID});
    }
    await this.props.execGetCompanyReportList(user.donViCongTacId);
  };

  handleError = err => {
    Toast.showBottom(err.message);
  };

  render() {
    return (
      <HoaDonWithLoading {...this.props} isLoading={this.props.reportLoading} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  execGetReportList: data => dispatch(execGetReportList(data)),
  execGetCompanyReportList: companyId =>
    dispatch(execGetReportCompanyList(companyId)),
  // getReportDetails: paramStr =>
  //   dispatch({type: 'RTE_CHI_TIET_KHAM_BENH', payload: {paramStr}}),
});

const mapStateToProps = state => ({
  user: state.auth.user,
  reports: state.report.data,
  reportLoading: state.loading.reportLoading,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HoaDonDienTuScreen);
