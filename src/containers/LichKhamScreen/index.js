import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
// import component
import LichKhamComp from '../../screens/LichKhamScreen';

import WithLoading from '../../components/WithLoading';
import {execGetCategoriesList} from '../../redux/actions/scheduleAction';
import Toast from '../../components/Toast';

const LichKhamWithLoading = WithLoading(LichKhamComp);

class LichKhamScreen extends Component {
  componentDidMount() {
    // this.initializeScreen();
  }
  initializeScreen = () => {
    this.props.execGetCategoriesList();
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
  execGetCategoriesList: data => dispatch(execGetCategoriesList(data)),
});

const mapStateToProps = state => ({
  user: state.auth.user,
  categories: state.categories.data,
  schedules: state.categories.dataSchedule,
  doctors: state.categories.dataDoctor,
  categoriesLoading: state.loading.categoriesLoading,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LichKhamScreen);
