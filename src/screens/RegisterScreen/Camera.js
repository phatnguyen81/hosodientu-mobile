import React, {Component} from 'react';
//import react in our code.
import {View, Dimensions, SafeAreaView} from 'react-native';
// import all basic components
import {CameraKitCameraScreen} from 'react-native-camera-kit';
import {Icon} from 'native-base';
import colors from '../../common/colors';
import Header from '../../components/Header1';
//import CameraKitCameraScreen we are going to use.
const {width, height} = Dimensions.get('screen');
export default class Camera extends Component {
  constructor() {
    super();
    this.state = {
      //variable to hold the qr value
      qrvalue: '',
      opneScanner: false,
    };
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <SafeAreaView />
        <Header
          bgColor={colors.white}
          text={'Quét QR code'}
          nameL="ios-arrow-back"
          typeL="Ionicons"
          onPressL={() => {
            this.props.closeScanner();
          }}
        />
        <CameraKitCameraScreen
          showFrame={false}
          //Show/hide scan frame
          scanBarcode={true}
          //Can restrict for the QR Code only
          laserColor={'blue'}
          //Color can be of your choice
          frameColor={'yellow'}
          //If frame is visible then frame color
          colorForScannerFrame={'black'}
          //Scanner Frame color
          onReadCode={event =>
            this.props.onBarcodeScan(event.nativeEvent.codeStringValue)
          }
        />
        <Icon
          name="frame"
          type="SimpleLineIcons"
          style={{
            fontSize: 300,
            color: colors.gray,
            position: 'absolute',
            top: height / 2 - 150,
            left: width / 2 - 150,
          }}
        />
      </View>
    );
  }
}
