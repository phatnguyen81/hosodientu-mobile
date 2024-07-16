import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
// import component
import GoiKhamComp from '../../screens/GoiKhamSceen';

import WithLoading from '../../components/WithLoading';
import {execGetListGoiKham} from '../../redux/actions/goiKhamAction';
import Toast from '../../components/Toast';

const GoiKhamWithLoading = WithLoading(GoiKhamComp);

class GoiKhamScreen extends Component {
  componentDidMount() {
    this.initializeScreen();
  }
  initializeScreen = () => {
    this.props.execGetListGoiKham();
  };

  handleError = err => {
    Toast.showBottom(err.message);
  };

  render() {
    return (
      <GoiKhamWithLoading
        {...this.props}
        isLoading={this.props.goiKhamLoading}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  execGetListGoiKham: data => dispatch(execGetListGoiKham(data)),
});

const mapStateToProps = state => ({
  user: state.auth.user,
  goiKham: state.goiKham.data,
  goiKhamLoading: state.loading.goiKhamLoading,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GoiKhamScreen);
