import React from 'react';
import {connect} from 'react-redux';
import {BackHandler} from 'react-native';

// import component
import DatCauHoiComp from '../../screens/TuVanScreen/DatCauHoiScreen';
import {execgoBack} from '../../redux/actions/authActions';
import {execGetListKhoa, execPostTuVan} from '../../redux/actions/tuVanAction';
import WithLoading from '../../components/WithLoading';
import validate from './validate';

const TuVanWithLoading = WithLoading(DatCauHoiComp);

class TuVan extends React.Component {
  state = {
    validate: '',
    dataResPostTuVan: '',
    tieuDe: '',
    chuyenKhoa: '',
    noiDung: '',
  };

  // Render any loading content that you like here
  componentDidMount() {
    this.initializeScreen();
  }

  initializeScreen = () => {
    this.props.execGetListKhoa();
  };

  _onChangeText = idInput => value => {
    this.setState({[idInput]: value});
  };

  handleGetDataFrom = () => () => {
    const value = {
      tieuDe: this.state.tieuDe,
      chuyenKhoa: this.state.chuyenKhoa,
      noiDung: this.state.noiDung,
    };
    const valCheck = JSON.stringify(validate(value));
    if (valCheck !== '{}') {
      this.setState({
        validate: validate(value),
      });
    } else {
      const data = this.formatData(value);
      this.postData(data);
    }
  };

  clearState = () => {
    this.setState({
      validate: '',
      tieuDe: '',
      // chuyenKhoa: '',
      noiDung: '',
      dataResPostTuVan: '',
    });
  };

  postData = async data => {
    await this.props.execPostTuVan(data);
    await this.setState({
      dataResPostTuVan: this.props.resTuVan,
    });
  };

  formatData = value => {
    const {user, cacKhoa} = this.props;
    const data = {
      user_id: user.userId,
      'author-name': user.ho + user.ten,
      'author-email': user.email,
      'question-title': value.tieuDe,
      'chuyenkhoa-category': cacKhoa[value.chuyenKhoa].term_id,
      'question-content': value.noiDung,
    };
    return data;
  };

  render() {
    return (
      <TuVanWithLoading
        {...this.props}
        handleGetDataFrom={this.handleGetDataFrom}
        isLoading={this.props.homeLoading}
        validate={this.state.validate}
        dataResPostTuVan={this.state.dataResPostTuVan}
        tieuDe={this.state.tieuDe}
        chuyenKhoa={this.state.chuyenKhoa}
        noiDung={this.state.noiDung}
        onChangeText={this._onChangeText}
        clearState={this.clearState}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    homeLoading: state.tuvan.tuvanLoading,
    cacKhoa: state.tuvan.dataListKhoa,
    resTuVan: state.tuvan.resTuVan,
  };
};

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch(execgoBack()),
  execGetListKhoa: data => dispatch(execGetListKhoa(data)),
  execPostTuVan: data => dispatch(execPostTuVan(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TuVan);
