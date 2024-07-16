import React from 'react';
import {connect} from 'react-redux';

// import component
import BacSiTraLoiComp from '../../screens/TuVanScreen/BacSiTraLoiScreen';
import {execgoBack} from '../../redux/actions/authActions';
import {execGetTraLoi, execResetTraLoi} from '../../redux/actions/tuVanAction';
import WithLoading from '../../components/WithLoading';

const BacSiTraLoiWithLoading = WithLoading(BacSiTraLoiComp);

class TuVanBacSiTraLoi extends React.Component {
  constructor(props) {
    super(props);
    this.props.execResetTraLoi();
  }
  componentDidMount() {
    this.initializeScreen();
  }
  initializeScreen = () => {
    this.props.execGetTraLoi(this.props.user.userId);
  };
  render() {
    return (
      <BacSiTraLoiWithLoading
        {...this.props}
        isLoading={this.props.tuvanLoading}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    tuvanLoading: state.loading.tuvanLoading,
    listTraLoi: state.tuvan.dataTraLoi,
  };
};

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch(execgoBack()),
  execGetTraLoi: data => dispatch(execGetTraLoi(data)),
  execResetTraLoi: () => dispatch(execResetTraLoi()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TuVanBacSiTraLoi);
