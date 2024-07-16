/*This is an Example of React Native Map
 *This is old code and i don't have free time to refactor, review and clean code
 *So, i hope you can review and make it.
 *Tks,
 *Oai
 */
import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
  Platform,
  SafeAreaView,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {Popup} from 'react-native-map-link';
import Geolocation from 'react-native-geolocation-service';
import {getDistance, getPreciseDistance} from 'geolib';
import FastImage from 'react-native-fast-image';
import Header from '../../components/Header1';
import Toast from '../../components/Toast';

import images from '../../common/images';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
  OPTION_NAVIGATION_MAP,
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
  LATITUDE_INIT,
  LONGITUDE_INIT,
} from './constants';
import colors from '../../common/colors';
import css from './css';
const STANDARD_ERROR = 300;
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMap: false,
      markers: [],
      isLoading: true,
      center: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      initialRegion: {
        latitude: LATITUDE_INIT,
        longitude: LONGITUDE_INIT,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      distance: 0,
    };
  }
  componentDidMount() {
    this.timeout = setTimeout(async () => {
      Geolocation.getCurrentPosition(
        position => {
          let lat = position.coords.latitude;
          let long = position.coords.longitude;

          let geoLocation = {
            latitude: lat, // lay vi tri latitude va longitude
            longitude: long,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          };
          var distance = getPreciseDistance(
            {latitude: lat, longitude: long},
            {latitude: LATITUDE_INIT, longitude: LONGITUDE_INIT},
            1,
          );
          let markers = this.state.markers;
          markers.push({
            latitude: 10.799274,
            longitude: 106.647147,
          });
          markers.push(geoLocation);

          this.setState({
            isLoading: false,
            distance: parseFloat((distance + STANDARD_ERROR) / 1000).toFixed(1),
            markers: markers.reverse(),
          });
        },
        error => {
          this.setState({error: error.message});
          Toast.showBottom('Không xác định được vị trí của bạn');
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
      this.timeout = null;
    }, 100);
  }

  componentWillUnmount = () => {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  };

  openPopup = () => {
    return (
      <Popup
        isVisible={this.state.isOpenMap}
        onCancelPressed={() => {
          this.setState({isOpenMap: false});
        }}
        onAppPressed={() => {
          this.setState({isOpenMap: false});
        }}
        onBackButtonPressed={() => {
          this.setState({isOpenMap: false});
        }}
        options={OPTION_NAVIGATION_MAP}
      />
    );
  };

  callNumber = () => {
    let phoneNumber = '';
    phoneNumber =
      Platform.OS === 'android'
        ? 'tel:${0369031818}'
        : 'telprompt:${0369031818}';
    Linking.openURL(phoneNumber);
  };

  showMap = () => {
    this.setState({
      isOpenMap: true,
    });
  };

  callNumber = () => {
    Linking.openURL(`tel:${'0369031818'}`);
  };

  renderMarker(data) {
    let markers = [];
    this.state.markers.map((marker, index) => {
      if (index == 1 || this.state.markers.length === 1) {
        markers.push(
          <Marker
            key={'' + marker.latitude + '_' + marker.longitude}
            title={data.titleMarker}
            description={data.descriptionMarker}
            coordinate={marker}>
            <FontAwesome
              name="map-pin"
              size={30}
              color={colors.submit}
              style={{marginBottom: 10}}
            />
          </Marker>,
        );
      } else {
        markers.push(
          <Marker
            key={'' + marker.latitude + '_' + marker.longitude}
            title={'Địa điểm của bạn'}
            coordinate={marker}>
            <View style={css.radius}>
              <View style={css.marker} />
            </View>
          </Marker>,
        );
      }
    });

    return markers;
  }

  render() {
    const {data} = this.props;
    return (
      <View style={css.container}>
        <MapView
          style={css.map}
          initialRegion={{
            latitude: 10.799274,
            longitude: 106.647147,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {this.renderMarker(data)}
        </MapView>
        <View style={css.topHeader}>
          <SafeAreaView />
          <Header
            bgColor={'#00000000'}
            text={''}
            nameL="ios-arrow-back"
            typeL="Ionicons"
            onPressL={() => this.props.navigation.goBack()}
          />
        </View>
        <View style={css.container_bottom}>
          <View style={css.view_do_bong} />
          <View style={css.view_info_text}>
            <View style={css.view_thanh_ngang} />
            <View style={css.view_tinh_khoang_cach}>
              <View style={css.viewTopDistance}>
                <View style={css.view_tron} />
                <Text style={css.textPosition}>{data.textPosition}</Text>
              </View>
              {this.state.isLoading ? (
                <ActivityIndicator size="small" color={colors.submit} />
              ) : (
                <Text style={css.textDistance}>{this.state.distance} km</Text>
              )}
            </View>
          </View>
          <View style={[css.view_content_vitri]}>
            <FastImage
              source={images.bgMap}
              resizeMode={FastImage.resizeMode.contain}
              style={css.image}
            />
            <View>
              <Text style={css.textTitle}>{data.textTitle}</Text>
              <Text style={css.positionText}>{data.address}</Text>
              <Text style={css.positionTime}>{data.time}</Text>
            </View>

            <View style={css.viewAction}>
              <TouchableOpacity
                onPress={this.callNumber}
                style={css.view_lienhe}>
                <Text style={{color: '#FFF'}}>{data.textContact}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.showMap}
                style={css.view_chiduong}>
                <Text style={css.textChiDuong}>{data.textRouter}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {this.openPopup()}
      </View>
    );
  }
}
