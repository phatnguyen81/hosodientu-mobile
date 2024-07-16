import {REQUIRED_FIELD, INVALID_EMAIL} from '../../shared/constants/Messages';

const validate = values => {
  const errors = {};
  // validate email
  if (!values.email) {
    errors.email = REQUIRED_FIELD;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = INVALID_EMAIL;
  }
  return errors;
};

export default validate;
