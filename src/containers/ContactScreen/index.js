import React from 'react';
import {connect} from 'react-redux';
import {BackHandler} from 'react-native';

// import component
import ContactComp from '../../screens/ContactScreen';
import {execgoBack} from '../../redux/actions/authActions';
// import {execgetDataContactList} from '../../redux/actions/contactAction';
import WithLoading from '../../components/WithLoading';
import {requestLocationPermission} from '../../shared/services';

const ContactWithLoading = WithLoading(ContactComp);

class HoSo extends React.Component {
  async componentDidMount() {
    await requestLocationPermission();
  }
  render() {
    return (
      <ContactWithLoading
        {...this.props}
        isLoading={this.props.contactLoading}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.services.user.userInfo,
    contactLoading: state.loading.contactLoading,
  };
};

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch(execgoBack()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HoSo);
