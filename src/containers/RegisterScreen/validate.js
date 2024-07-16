import {
  REQUIRED_FIELD,
  INVALID_EMAIL,
  INCORRECT_EMAIL,
  INVALID_PHONE_NUMBER,
} from '../../shared/constants/Messages';

const validate = values => {
  const errors = {};
  // validate ten
  if (!values.ten) {
    errors.ten = REQUIRED_FIELD;
  }

  // validate email
  if (!values.email) {
    errors.email = REQUIRED_FIELD;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = INVALID_EMAIL;
  }
  // validate re_email
  if (!values.re_email) {
    errors.re_email = REQUIRED_FIELD;
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.re_email)
  ) {
    errors.re_email = INVALID_EMAIL;
  } else if (values.email !== values.re_email) {
    errors.re_email = INCORRECT_EMAIL;
  }

  // validate phone
  if (!values.phone) {
    errors.phone = REQUIRED_FIELD;
  } else if (!isNumberPhone(values.phone)) {
    errors.phone = INVALID_PHONE_NUMBER;
  }
  return errors;
};

const isNumberPhone = phone => {
  var reg = /^(03[2|3|4|5|6|7|8|9]|05[|6|8|9]|07[0|6|7|8|9]|08[1|2|3|4|5|6|8]|09[0|1|2|3|4|6|7|8|9])+([0-9]{7})/;
  return reg.test(phone) && phone.length === 10;
};

export default validate;
