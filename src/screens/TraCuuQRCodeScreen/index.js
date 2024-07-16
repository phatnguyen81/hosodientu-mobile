import React, {useEffect} from 'react';
import {Text, View, SafeAreaView, StatusBar} from 'react-native';
import {Button} from 'native-base';
import Header from '../../components/Header1';
import Camera from './components/Camera';
import colors from '../../common/colors';
import {css} from './css';
import {requestOpenCameraPermission} from '../../shared/services';

const TraCuuQRcodeScreen = ({navigation, execFetchQRCodeQuickReport}) => {
  const [isVisible, setVisible] = React.useState(false);
  const [dataQrCode, setDataQrCode] = React.useState(null);

  // useEffect(() => {
  //   execFetchQRCodeQuickReport('KJuwGMGY75OhadUjgjMZkA==');
  // }, [execFetchQRCodeQuickReport]);

  const onOpneScanner = () => {
    //To Start Scanning
    requestOpenCameraPermission(setVisible);
    if (isVisible) {
      setDataQrCode(null);
    }
    setVisible(!isVisible);
  };

  const onBarcodeScan = code => {
    //called after te successful scanning of QRCode/Barcode
    setDataQrCode(code);
    setVisible(false);
    execFetchQRCodeQuickReport(code);
  };

  // navigaiton
  return (
    <View style={css.container}>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={{backgroundColor: colors.submit}} />
      <Header
        bgColor={colors.white}
        text={'Tra cứu kết quả nhanh'}
        nameL="ios-arrow-back"
        typeL="Ionicons"
        onPressL={() => navigation.goBack()}
      />
      <View style={css.content}>
        <Text style={css.textHuongDan}>
          {
            'Để xem kết quả nhanh, vui lòng đọc QRcode trên số biên lai thu tiền.'
          }
        </Text>

        <Button warning block style={css.btnQRcode} onPress={onOpneScanner}>
          <Text style={css.textQrCode}>
            {!isVisible ? 'Quét QRCode' : 'Đóng máy ảnh'}
          </Text>
        </Button>
      </View>
      {isVisible && (
        <View style={{flexGrow: 1}}>
          <Camera onBarcodeScan={onBarcodeScan} />
        </View>
      )}
    </View>
  );
};

export default TraCuuQRcodeScreen;
