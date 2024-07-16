import React from 'react';
import {connect} from 'react-redux';
import {BackHandler, View, Text} from 'react-native';

// import component
import ChiTietBacSiTraLoiComp from '../../screens/TuVanScreen/ChiTietBacSiTraLoiScreen';
import {execgoBack} from '../../redux/actions/authActions';
import {execGetChiTietTraLoi} from '../../redux/actions/tuVanAction';
import WithLoading from '../../components/WithLoading';

const ChiTietBacSiTraLoiWithLoading = WithLoading(ChiTietBacSiTraLoiComp);

class TuVanChiTietBacSiTraLoi extends React.Component {
  componentDidMount() {
    this.initializeScreen();
  }
  initializeScreen = () => {
    const item = this.props.navigation.getParam('item');
    this.props.execGetChiTietTraLoi(item.ID);
  };
  render() {
    const item = this.props.navigation.getParam('item');
    return (
      <ChiTietBacSiTraLoiWithLoading
        {...this.props}
        item={item}
        isLoading={this.props.tuvanLoading}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    tuvanLoading: state.loading.tuvanLoading,
    chiTietTraLoi: state.tuvan.dataChiTietTraLoi,
  };
};

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch(execgoBack()),
  execGetChiTietTraLoi: data => dispatch(execGetChiTietTraLoi(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TuVanChiTietBacSiTraLoi);
