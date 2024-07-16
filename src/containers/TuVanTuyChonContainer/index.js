import React from 'react';
import {connect} from 'react-redux';

// import component
import TuyChonTuVanComp from '../../screens/TuVanScreen/TuyChonTuVanScreen';

class TuVanTuyChon extends React.Component {
  render() {
    return <TuyChonTuVanComp {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TuVanTuyChon);
