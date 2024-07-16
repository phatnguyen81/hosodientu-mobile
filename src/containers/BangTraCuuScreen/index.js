import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
// import component
import BangTraCuuComp from '../../screens/BangTraCuuScreen';

import * as MSG from '../../shared/constants/Messages';
import Toast from '../../components/Toast';
import WithLoading from '../../components/WithLoading';

const BangTraCuuWithLoading = WithLoading(BangTraCuuComp);

class BangTraCuuScreen extends Component {
  handleError = err => {
    Toast.showBottom(err.message);
  };

  render() {
    return (
      <BangTraCuuWithLoading
        {...this.props}
        isLoading={this.props.bangTraCuuLoading}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  // execGetReportList: data => dispatch(execGetReportList(data)),
  // execGetCompanyReportList: companyId =>
  //   dispatch(execGetReportCompanyList(companyId)),
  // // getReportDetails: paramStr =>
  // //   dispatch({type: 'RTE_CHI_TIET_KHAM_BENH', payload: {paramStr}}),
});

const mapStateToProps = state => ({
  bangTraCuuLoading: state.loading.bangTraCuuLoading,
  dataFromQrCode: state.traCuuNhanh.dataFromQrCode,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BangTraCuuScreen);
