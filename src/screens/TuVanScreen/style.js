import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../common/colors';

export default StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.submit,
    marginBottom: 5,
    marginTop: 15,
  },
  titleDropDow: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    height: 45,
    borderColor: colors.submit,
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 10,
    alignItems: 'center',
    fontSize: 16,
  },
  modalDropdown: {
    width: '80%',
  },
  valueDropDown: {
    color: colors.text,
    fontSize: 16,
  },
  txtChuyenKhoa: {
    marginBottom: 6,
  },
  dropdownStyle: {
    width: Dimensions.get('window').width - 40,
    height: 350,
    marginTop: 15,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  renderRow: {
    color: colors.submit,
  },
  icon: {
    fontSize: 18,
    color: colors.line,
  },
  inputNoiDung: {
    height: 200,
    paddingTop: 10,
  },
  lableSend: {
    fontWeight: '600',
  },
  btnSend: {
    marginTop: 20,
    marginBottom: 120,
    width: 200,
  },
  txtValidate: {
    color: colors.warning,
    paddingVertical: 3,
  },

  item: {
    marginHorizontal: 15,
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 7,

    elevation: 7,
  },
  itemImage: {
    width: 25,
    height: 25,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darkText,
    marginLeft: 15,
  },
  itemDate: {
    paddingTop: 5,
    fontSize: 14,
    fontStyle: 'italic',
    color: colors.dimGray,
    marginLeft: 15,
  },
  viewContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageArrow: {
    height: 20,
    width: 10,
  },
  imageUser: {
    width: 40,
    height: 40,
    color: 'red',
  },
  viewCauHoi: {
    marginLeft: 15,
    flexDirection: 'row',
    marginRight: 60,
  },
  viewNoiDungCauHoi: {
    paddingRight: 20,
    paddingLeft: 15,
    paddingVertical: 10,
    backgroundColor: colors.brdark1,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    marginLeft: 10,
    marginTop: 10,
  },
  txtBenhNhan: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.warning,
    marginBottom: 10,
  },
  txtNoiDungBenhNhan: {
    fontSize: 16,
    color: colors.grayText,
    marginBottom: 10,
  },
  txtThoiGian: {
    fontSize: 12,
    fontStyle: 'italic',
    color: colors.grayText,
  },
  viewTraLoi: {
    marginRight: 15,
    flexDirection: 'row',
    marginLeft: 60,
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  viewNoiDungTraLoi: {
    paddingRight: 20,
    paddingLeft: 15,
    paddingVertical: 10,
    backgroundColor: colors.orangeLigth,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    marginRight: 10,
    marginTop: 10,
  },
  txtTraLoi: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darkText,
    marginBottom: 10,
  },
  viewStatus1: {
    marginLeft: 15,
    marginTop: 5,
    backgroundColor: colors.greenLigth,
    width: 70,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  viewStatus0: {
    marginLeft: 15,
    marginTop: 5,
    backgroundColor: colors.warningLigth,
    width: 90,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  txtStatus: {
    color: colors.white,
    fontSize: 13,
  },
});
