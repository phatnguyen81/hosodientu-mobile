import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import GoiKhamChiTiet from '../../screens/GoiKhamChiTietScreen';

import Toast from '../../components/Toast';

class GoiKhamChiTietScreen extends Component {
  handleError = err => {
    Toast.showBottom(err.message);
  };

  render() {
    const name = this.props.navigation.getParam('name');
    const html = this.props.navigation.getParam('html');
    return <GoiKhamChiTiet {...this.props} name={name} html={html} />;
  }
}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GoiKhamChiTietScreen);
