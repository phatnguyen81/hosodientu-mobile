import 'whatwg-fetch';
// import {sendHttpRequest} from './http-handler';
import {sendHttpRequest} from './http-handler-without-auth';
// import { SET_USER_INFO } from '../../actions/types';

// URLs
const quickReportByQrCodeUrl = `${'https://apidientu.goldenhealthcarevn.com:4001'}/api/Report`;
const quickReportListByQrCodeUrl = `${'https://apidientu.goldenhealthcarevn.com:4001'}/api/QuickReports`;

// Get quickReport info by QR code
export const execGetQuickReportByQrCode = data => {
  const parameters = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {'Content-Type': 'application/json'},
  };
  return new Promise((resolve, reject) => {
    sendHttpRequest(quickReportListByQrCodeUrl, parameters)
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};

// data requires property: paramStr
export const execGetQuickReportDetails = dataObj => {
  const queryParams = Object.keys(dataObj)
    .map(
      key => `${encodeURIComponent(key)}=${encodeURIComponent(dataObj[key])}`,
    )
    .join('&');
  const parameters = {
    method: 'POST',
    body: queryParams,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  };

  return new Promise((resolve, reject) => {
    sendHttpRequest(quickReportByQrCodeUrl, parameters)
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};
