import React from 'react';
import {connect} from 'react-redux';
// import component
import WithLoading from '../../components/WithLoading';
import TraCuuNhanhComp from '../../screens/TraCuuQRCodeScreen';
import {execgoBack} from '../../redux/actions/authActions';
import {execFetchQRCodeQuickReport} from '../../redux/actions/traCuuNhanhActions';

const TraCuuNhanhWithLoading = WithLoading(TraCuuNhanhComp);

class TraCuuNhanh extends React.Component {
  // Render any loading content that you like here
  constructor(props) {
    super(props);
    this.countExitApp = 0;
  }

  render() {
    return (
      <TraCuuNhanhWithLoading
        isLoading={this.props.traCuuNhanhLoading}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.services.user.userInfo,
    traCuuNhanhLoading: state.loading.traCuuNhanhLoading,
    authenticated: state.auth.authenticated,
  };
};

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch(execgoBack()),
  execFetchQRCodeQuickReport: code =>
    dispatch(execFetchQRCodeQuickReport(code)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TraCuuNhanh);
