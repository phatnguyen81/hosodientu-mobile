import 'whatwg-fetch';
import _ from 'lodash';
import baseUrl from './base-url';
import {sendHttpRequest} from './http-handler';
// import { SET_USER_INFO } from '../../actions/types';

// URLs
const adminRegisterApiUrl = `${baseUrl}/api/User/AdminRegister`;
const userRegisterApiUrl = `${baseUrl}/api/User/UserRegister`;
// const activateUrl = `${baseUrl}/api/User/Active`;
// const userListUrl = `${baseUrl}/api/Users`;
// const userDetailUrl = `${baseUrl}/api/User?id=`;
const changePasswordUrl = `${baseUrl}/api/User/ChangePassword`;
// const getUserByPatientCodeUrl = `${baseUrl}/api/PatientByCode?code=`;
// const userUpdate = `${baseUrl}/api/User/AdminUpdate`;
// const deleteUserUrl = `${baseUrl}/api/User?id=`;
const updateAvatarUrl = `${baseUrl}/api/User/Avatar`;
// const adminApprove = `${baseUrl}/api/User/AdminApprove`;
const patientByQrCodeUrl = `${'https://apidientu.goldenhealthcarevn.com:4001'}/api/PatientByQRCode`;
const userInfoByEmailUrl = `${baseUrl}/api/UserByEmail?email=`;
const resetPasswordUrl = `${baseUrl}/api/User/ResetPassword`;
// const listCompanyUsersUrl = `${baseUrl}/api/users?status=1&role=3`;
// Actions
// export const adminRegister = createAction(ADMIN_REGISTER);

// Get user info
function* execGetUserInfo(username) {
  const parameters = {
    method: 'GET',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  };

  const userInfoUrl = userInfoByEmailUrl + username;
  return new Promise((resolve, reject) => {
    sendHttpRequest(userInfoUrl, parameters)
      .then(({status, json}) => {
        const safeJson = _.omit(json, ['password']);
        return resolve(safeJson);
      })
      .catch(err => reject(err));
  });
}

// // Activate user
// export const execActivateUser = data => dispatch => {
//   const parameters = {
//     method: 'PUT',
//     body: JSON.stringify(data),
//     headers: {'Content-Type': 'application/json'},
//   };

//   return new Promise((resolve, reject) => {
//     sendHttpRequest(activateUrl, parameters)
//       .then(data => resolve(data))
//       .catch(err => reject(err));
//   });
// };

// // User register
export const execRegister = ({user, type, isForce}) => {
  const parameters = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {'Content-Type': 'application/json'},
  };

  const url =
    type === 'user'
      ? `${userRegisterApiUrl}?isForce=${!!isForce}`
      : adminRegisterApiUrl;
  return new Promise((resolve, reject) => {
    sendHttpRequest(url, parameters)
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};

// // Get user list
// export const execGetUserList = () => dispatch => {
//   const parameters = {
//     method: 'GET',
//     headers: {'Content-Type': 'application/x-www-form-urlencoded'},
//   };

//   return new Promise((resolve, reject) => {
//     sendHttpRequest(userListUrl, parameters)
//       .then(data => resolve(data))
//       .catch(err => reject(err));
//   });
// };

// // Get user detail
// export const execGetUserDetail = id => dispatch => {
//   const parameters = {
//     method: 'GET',
//     headers: {'Content-Type': 'application/x-www-form-urlencoded'},
//   };

//   return new Promise((resolve, reject) => {
//     sendHttpRequest(userDetailUrl + id, parameters)
//       .then(data => resolve(data))
//       .catch(err => reject(err));
//   });
// };

// //Change password
export const execChangePassword = params => {
  const parameters = {
    method: 'PUT',
    body: JSON.stringify(params),
    headers: {'Content-Type': 'application/json'},
  };

  return new Promise((resolve, reject) => {
    sendHttpRequest(changePasswordUrl, parameters)
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};

// // Get user by patient keyCode
// export const execGetUserInfoByPatientCode = data => dispatch => {
//   const parameters = {
//     method: 'GET',
//     headers: {'Content-Type': 'application/x-www-form-urlencoded'},
//   };
//   return new Promise((resolve, reject) => {
//     sendHttpRequest(getUserByPatientCodeUrl + data.code, parameters)
//       .then(data => resolve(data))
//       .catch(err => reject(err));
//   });
// };

// // User update

// export const execUpdate = data => dispatch => {
//   const parameters = {
//     method: 'PUT',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

//   return new Promise((resolve, reject) => {
//     sendHttpRequest(userUpdate, parameters)
//       .then(data => resolve(data))
//       .catch(err => reject(err));
//   });
// };

// // Delete user
// export const execDeleteUser = id => dispatch => {
//   const parameters = {
//     method: 'DELETE',
//     headers: {'Content-Type': 'application/x-www-form-urlencoded'},
//   };

//   return new Promise((resolve, reject) => {
//     sendHttpRequest(deleteUserUrl + id, parameters)
//       .then(data => resolve(data))
//       .catch(err => reject(err));
//   });
// };

// Update users avatar
export const execUpdateAvatar = data => {
  const parameters = {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {'Content-Type': 'application/json'},
  };

  return new Promise((resolve, reject) => {
    sendHttpRequest(updateAvatarUrl, parameters)
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};

// // Update users avatar
// export const execAdminApprove = id => dispatch => {
//   const parameters = {
//     method: 'PUT',
//     body: JSON.stringify(id),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

//   return new Promise((resolve, reject) => {
//     sendHttpRequest(adminApprove, parameters)
//       .then(data => resolve(data))
//       .catch(err => reject(err));
//   });
// };

// Reset password
export const execResetPassword = ({email}) => {
  const parameters = {
    method: 'PUT',
    body: JSON.stringify(email),
    headers: {'Content-Type': 'application/json'},
  };
  return new Promise((resolve, reject) => {
    sendHttpRequest(resetPasswordUrl, parameters)
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

// Get patient info by QR code
export const execGetPatientByQrCode = data => {
  const parameters = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {'Content-Type': 'application/json'},
  };
  return new Promise((resolve, reject) => {
    sendHttpRequest(patientByQrCodeUrl, parameters)
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};

export {execGetUserInfo};
