/*eslint-disable */

const log = (...message) => {
  if (__DEV__) console.log(...message);
};
const warn = (...message) => {
  if (__DEV__) console.warn(...message);
};
const err = (...message) => {
  if (__DEV__) console.error(...message);
};

export default {
  log,
  warn,
  err
};
