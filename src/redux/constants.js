export const START_ASYNC_OP = 'START_ASYNC_OP';
export const END_ASYNC_OP = 'END_ASYNC_OP';

export const LOGIN = 'LOGIN';
export const WELCOME = 'Welcome';
export const GOBACK = 'GoBack';
export const HOME = 'Home';
export const TAB_NAVIGATION = 'TabNavigation';
export const THONG_BAO_STACK = 'THONG_BAO_STACK';

export const FETCH_AUTHENTICATE = 'FETCH_AUTHENTICATE';
export const AUTHENTICATED = 'AUTHENTICATED';
export const RE_AUTHENTICATED = 'RE_AUTHENTICATED';
export const UNAUTHENTICATED = 'UNAUTHENTICATED';

export const FETCH_UNAUTHENTICATE = 'FETCH_UNAUTHENTICATE';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const TOKEN = 'TOKEN';

export const RESET_USER = 'RESET_USER';
export const FETCH_REGISTER = 'FETCH_REGISTER';
export const REGISTERED = 'REGISTERED';
export const REGISTERED_ERROR = 'REGISTERED_ERROR';

export const FETCH_QRCODE = 'FETCH_QRCODE';
export const QRCODED = 'QRCODED';
export const QRCODED_ERROR = 'QRCODED_ERROR';

export const FETCH_QRCODE_TRA_CUU_NHANH = 'FETCH_QRCODE_TRA_CUU_NHANH';
export const QRCODED_TRA_CUU_NHANH = 'QRCODED_TRA_CUU_NHANH';
export const QRCODED_ERROR_TRA_CUU_NHANH = 'QRCODED_ERROR_TRA_CUU_NHANH';
export const FETCH_GET_DETAIL_QUICK_REPORT = 'FETCH_GET_DETAIL_QUICK_REPORT';
export const GET_DETAIL_QUICK_REPORT = 'GET_DETAIL_QUICK_REPORT';
export const GET_RESET_QUICK_REPORT = 'GET_RESET_QUICK_REPORT';
export const GET_DETAIL_QUICK_REPORT_ERR = 'GET_DETAIL_QUICK_REPORT_ERR';

export const FETCH_RESET_PASSWORD = 'FETCH_RESET_PASSWORD';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR';

export const FETCH_CHANGE_PASSWORD = 'FETCH_CHANGE_PASSWORD';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const CHANGE_PASSWORD_ERROR = 'CHANGE_PASSWORD_ERROR';

export const FETCH_CHANGE_AVATAR = 'FETCH_CHANGE_AVATAR';
export const CHANGE_AVATAR = 'CHANGE_AVATAR';
export const CHANGE_AVATAR_ERROR = 'CHANGE_AVATAR_ERROR';

export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

export const GET_GOALLIST = 'GET_GOALLIST';
export const STORE_STEPS = 'STORE_STEPS';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const GET_CRR = 'GET_CRR';
export const GET_PORTFOLIO = 'GET_PORTFOLIO';
export const CALCULATE_EXPECTED_RETURN = 'CALCULATE_EXPECTED_RETURN';
export const CREATE_INVESTMENT = 'CREATE_INVESTMENT';

//admin actions
export const ADMIN_REGISTER = 'ADMIN_REGISTER';
export const LOG_OUT = 'LOG_OUT';
export const SET_USER_INFO = 'SET_USER_INFO';
export const GET_USER_LIST = 'GET_USER_LIST';
export const SET_COMPANY_LIST = 'SET_COMPANY_LIST';

// report
export const FETCH_GET_REPORT_LIST = 'FETCH_GET_REPORT_LIST';
export const GET_REPORT_LIST = 'GET_REPORT_LIST';
export const GET_REPORT_LIST_ERR = 'GET_REPORT_LIST_ERR';

// report detail
export const FETCH_GET_DETAIL_REPORT = 'FETCH_GET_DETAIL_REPORT';
export const GET_DETAIL_REPORT = 'GET_DETAIL_REPORT';
export const GET_DETAIL_REPORT_ERR = 'GET_DETAIL_REPORT_ERR';

// report company
export const FETCH_GET_REPORT_COMPANY_LIST = 'FETCH_GET_REPORT_COMPANY_LIST';
export const GET_REPORT_COMPANY_LIST = 'GET_REPORT_COMPANY_LIST';
export const GET_REPORT_COMPANY_LIST_ERR = 'GET_REPORT_COMPANY_LIST_ERR';

// schedule categories
export const FETCH_GET_CATEGORIES_LIST = 'FETCH_GET_CATEGORIES_LIST';
export const GET_CATEGORIES_LIST = 'GET_CATEGORIES_LIST';
export const GET_CATEGORIES_LIST_ERR = 'GET_CATEGORIES_LIST_ERR';

// schedule medical
export const FETCH_GET_DETAIL_SCHEDULE = 'FETCH_GET_DETAIL_SCHEDULE';
export const GET_DETAIL_SCHEDULE = 'GET_DETAIL_SCHEDULE';
export const GET_DETAIL_SCHEDULE_ERR = 'GET_DETAIL_SCHEDULE_ERR';

// list goi kham
export const FETCH_GET_LIST_GOI_KHAM = 'FETCH_GET_LIST_GOI_KHAM';
export const GET_LIST_GOI_KHAM = 'GET_LIST_GOI_KHAM';
export const GET_LIST_GOI_KHAM_ERR = 'GET_LIST_GOI_KHAM_ERR';
export const GET_SCHEDULE_LIST = 'GET_SCHEDULE_LIST';
export const GET_DOCTOR_LIST = 'GET_DOCTOR_LIST';

// post
export const FETCH_GET_DATA_POST_LIST = 'FETCH_GET_DATA_POST_LIST';
export const GET_DATA_POST_LIST = 'GET_DATA_POST_LIST';
export const GET_DATA_POST_LIST_ERR = 'GET_DATA_POST_LIST_ERR';

export const FETCH_GET_DATA_HOME_LIST = 'FETCH_GET_DATA_HOME_LIST';
export const GET_DATA_HOME_LIST = 'GET_DATA_HOME_LIST';
export const GET_DATA_HOME_LIST_ERR = 'GET_DATA_HOME_LIST_ERR';
export const INCREMENT_OFFSET = 'INCREMENT_OFFSET';

// Image
export const FETCH_GET_IMAGE_LIST = 'FETCH_GET_IMAGE_LIST';
export const GET_IMAGE_LIST = 'GET_IMAGE_LIST';
export const GET_IMAGE_LIST_ERR = 'GET_IMAGE_LIST_ERR';

// Tu van
export const FETCH_GET_KHOA = 'FETCH_GET_KHOA';
export const GET_LIST_KHOA = 'GET_LIST_KHOA';
export const GET_LIST_KHOA_ERR = 'GET_LIST_KHOA_ERR';

export const FETCH_POST_TU_VAN = 'FETCH_POST_TU_VAN';
export const POST_TU_VAN = 'POST_TU_VAN';
export const POST_TU_VAN_ERR = 'POST_TU_VAN_ERR';

// thong bao
export const FETCH_GET_NOTIFICATION = 'FETCH_GET_NOTIFICATION';
export const GET_LIST_NOTIFICATION_FOR_DEVICE =
  'GET_LIST_NOTIFICATION_FOR_DEVICE';
export const READ_ALL_NOTIFICATION_FOR_DEVICE =
  'READ_ALL_NOTIFICATION_FOR_DEVICE';

export const GET_LIST_NOTIFICATION_FOR_USER = 'GET_LIST_NOTIFICATION_FOR_USER';
export const READ_ALL_NOTIFICATION_FOR_USER = 'READ_ALL_NOTIFICATION_FOR_USER';

export const FETCH_READ_ALL_NOTIFICATION = 'FETCH_READ_ALL_NOTIFICATION';
export const GET_LIST_NOTIFICATION_ERR = 'GET_LIST_NOTIFICATION_ERR';
export const FETCH_GET_TRA_LOI = 'FETCH_GET_TRA_LOI';
export const GET_TRA_LOI = 'GET_TRA_LOI';
export const RESET_TRA_LOI = 'RESET_TRA_LOI';
export const GET_TRA_LOI_ERR = 'GET_TRA_LOI_ERR';

export const FETCH_GET_CHI_TIET_TRA_LOI = 'FETCH_GET_CHI_TIET_TRA_LOI';
export const GET_CHI_TIET_TRA_LOI = 'GET_CHI_TIET_TRA_LOI';
export const GET_CHI_TIET_TRA_LOI_ERR = 'GET_CHI_TIET_TRA_LOI_ERR';