import React from 'react';
import {connect} from 'react-redux';
import {createAppContainer} from 'react-navigation';
// import {Root} from 'native-base';
import {
  createReactNavigationReduxMiddleware,
  reduxifyNavigator,
} from 'react-navigation-redux-helpers';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {createStackNavigator} from 'react-navigation-stack';

import {AuthStack} from './AuthStack';

import SplashScreen from '../screens/SplashScreen';
import data from '../data/data.json';
// import DrawerStack from './DrawerStackNavigaiton';
import {TabNavigator} from './BottomStack';
import {NAVIGATION} from './constants';
import HoaDonDienTuScreen from '../containers/HoaDonDienTuScreen';
import HoaDonDienTuChiTietScreen from '../containers/HoaDonDienTuChiTietScreen';
import BanTinChiTietScreen from '../screens/BanTinChiTietScreen';
import ZoomImage from '../screens/ImageZoomScreen';
import ContactScreen from '../containers/ContactScreen';
import LichKhamChiTietScreen from '../containers/LichKhamChitietScreen';
import GoiKhamChiTietScreen from '../containers/GoiKhamChiTietScreen';
import TuVanTuyChonContainer from '../containers/TuVanTuyChonContainer';
import TuVanDatCauHoiScreen from '../containers/TuVanDatCauHoiContainer';
import TuVanBacSiTraLoiContainer from '../containers/TuVanBacSiTraLoiContainer';
import TuVanChiTietBacSiTraLoiContainer from '../containers/TuVanChiTietBacSiTraLoiContainer';

import SettingScreen from '../containers/SettingScreen';
import DoiMatKhauScreen from '../containers/DoiMatKhauScreen';
import ChiTietBannerScreen from '../containers/ChiTietBannerScreen';
import ThongBaoScreen from '../containers/ThongBaoScreen';
import ContentModal from '../screens/SettingScreen/ContentModal';
import TraCuuQRcodeScreen from '../containers/TraCuuQRcodeScreen';
import BangTraCuuScreen from '../containers/BangTraCuuScreen';
import BangTraCuuChiTietScreen from '../containers/BangTraCuuChiTietScreen';
const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

const StartStackNavigator = createAppContainer(
  createStackNavigator(
    {
      [NAVIGATION.TAB_NAVIGATION]: {screen: TabNavigator},
      [NAVIGATION.AUTH_STACK]: {
        screen: AuthStack,
      },
      [NAVIGATION.HOA_DON_DIEN_TU]: {
        screen: props => (
          <HoaDonDienTuScreen {...props} data={data.main.bill} />
        ),
      },
      [NAVIGATION.HOA_DON_DIEN_TU_CHI_TIET]: {
        screen: props => (
          <HoaDonDienTuChiTietScreen {...props} data={data.main.bill} />
        ),
      },
      [NAVIGATION.LICHKHAM_CHITIET]: {
        screen: props => <LichKhamChiTietScreen {...props} />,
      },
      [NAVIGATION.GOIKHAM_CHITIET]: {
        screen: props => <GoiKhamChiTietScreen {...props} />,
      },

      [NAVIGATION.BAN_TIN_CHI_TIET]: {
        screen: props => <BanTinChiTietScreen {...props} />,
      },
      [NAVIGATION.ZOOM_IMAGE]: {
        screen: props => <ZoomImage {...props} />,
      },
      [NAVIGATION.LIEN_HE]: {
        screen: props => <ContactScreen {...props} data={data.main.contact} />,
      },
      [NAVIGATION.TU_VAN]: {
        screen: props => <TuVanTuyChonContainer {...props} />,
      },
      [NAVIGATION.TU_VAN_DAT_CAU_HOI]: {
        screen: props => <TuVanDatCauHoiScreen {...props} />,
      },
      [NAVIGATION.TU_VAN_BAC_SI_TRA_LOI]: {
        screen: props => <TuVanBacSiTraLoiContainer {...props} />,
      },
      [NAVIGATION.TU_VAN_CHI_TIET_BAC_SI_TRA_LOI]: {
        screen: props => <TuVanChiTietBacSiTraLoiContainer {...props} />,
      },

      [NAVIGATION.SETTING]: {
        screen: props => <SettingScreen {...props} />,
      },
      [NAVIGATION.SETTING_MATKHAU]: {
        screen: props => <DoiMatKhauScreen {...props} />,
      },
      [NAVIGATION.CHI_TIET_BANNER]: {
        screen: props => <ChiTietBannerScreen {...props} />,
      },
      [NAVIGATION.THONG_BAO]: {
        screen: props => <ThongBaoScreen {...props} />,
      },
      [NAVIGATION.VE_CHUNG_TOI]: {
        screen: props => <ContentModal {...props} />,
      },
      [NAVIGATION.TRA_CUU_NHANH]: {
        screen: props => <TraCuuQRcodeScreen {...props} />,
      },
      [NAVIGATION.BANG_TRA_CUU]: {
        screen: props => <BangTraCuuScreen {...props} />,
      },
      [NAVIGATION.BANG_TRA_CUU_CHI_TIET]: {
        screen: props => <BangTraCuuChiTietScreen {...props} />,
      },
    },
    {
      headerMode: 'none',
    },
  ),
);

const MainAppNavigator = createAppContainer(
  createAnimatedSwitchNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      [NAVIGATION.SPLASH]: {
        screen: props => <SplashScreen {...props} data={data.main.splash} />,
      },
      [NAVIGATION.START_STACK]: StartStackNavigator,
    },
    {
      headerMode: 'none',
    },
  ),
);

const MainNavigationBeginState = reduxifyNavigator(MainAppNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppAuthNavigator = connect(mapStateToProps)(MainNavigationBeginState);

export {AppAuthNavigator, MainAppNavigator, middleware};
