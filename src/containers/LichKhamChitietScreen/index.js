import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
// import component
import LichKhamComp from '../../screens/LichKhamChiTietScreen';

import {execGetDetailSchedule} from '../../redux/actions/scheduleAction';
import Toast from '../../components/Toast';
import WithLoading from '../../components/WithLoading';

const LichKhamWithLoading = WithLoading(LichKhamComp);

class LichKhamChiTietScreen extends Component {
  componentDidMount() {
    this.initializeScreen();
  }
  initializeScreen = () => {
    const idCategories = this.props.navigation.getParam('idCategories');
    const schedules = this.props.navigation.getParam('schedules');
    const doctors = this.props.navigation.getParam('doctors');
    this.props.execGetDetailSchedule({idCategories, schedules, doctors});
  };

  handleError = err => {
    Toast.showBottom(err.message);
  };

  render() {
    return (
      <LichKhamWithLoading
        {...this.props}
        isLoading={this.props.categoriesLoading}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  execGetDetailSchedule: data => dispatch(execGetDetailSchedule(data)),
});

const mapStateToProps = state => ({
  user: state.auth.user,
  detaileSchedule: state.categories.dataDetail,
  categoriesLoading: state.loading.categoriesLoading,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LichKhamChiTietScreen);
