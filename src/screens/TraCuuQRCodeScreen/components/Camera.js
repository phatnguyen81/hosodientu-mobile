import React, {Component} from 'react';
//import react in our code.
import {View, Dimensions, SafeAreaView} from 'react-native';
// import all basic components
import {CameraKitCameraScreen} from 'react-native-camera-kit';
//import CameraKitCameraScreen we are going to use.
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
        <CameraKitCameraScreen
          showFrame={false}
          //Show/hide scan frame
          scanBarcode={true}
          //Can restrict for the QR Code only
          laserColor={'blue'}
          //Color can be of your choice
          frameColor={'yellow'}
          //If frame is visible then frame color
          colorForScannerFrame={'white'}
          //Scanner Frame color
          onReadCode={event =>
            this.props.onBarcodeScan(event.nativeEvent.codeStringValue)
          }
        />
      </View>
    );
  }
}
