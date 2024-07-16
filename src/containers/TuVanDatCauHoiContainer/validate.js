import {REQUIRED_FIELD} from '../../shared/constants/Messages';

const validate = values => {
  const errors = {};
  // validate tieu de
  if (values.tieuDe === '') {
    errors.tieuDe = REQUIRED_FIELD;
  }

  // validate chuyen khoa
  if (values.chuyenKhoa === '') {
    errors.chuyenKhoa = REQUIRED_FIELD;
  }

  // validate noiDung
  if (values.noiDung === '') {
    errors.noiDung = REQUIRED_FIELD;
  }

  return errors;
};

export default validate;
