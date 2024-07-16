import React, {useEffect} from 'react';
import {
  View,
  RefreshControl,
  StatusBar,
  SafeAreaView,
  Platform,
} from 'react-native';
import {Container, Content} from 'native-base';

// import component
import {Title, CardSetting, ListThongBao} from './components';

// import css
import {css} from './css';
import AsyncStorage from '@react-native-community/async-storage';
import {ASYNC_STORAGE} from '../../shared/constants';
import colors from '../../common/colors';
import WithEmpty from '../../components/EmptyHOC';

const WithEmptyListThongBao = WithEmpty(ListThongBao);
const ThongBaoScreen = props => {
  const {data, thongbaoList, getListNotification, setLoading} = props;
  const [deviceId, setDeviceId] = React.useState(null);
  const [userId, setUserId] = React.useState(null);
  useEffect(() => {
    AsyncStorage.getItem(ASYNC_STORAGE.DEVICE_ID).then(value =>
      setDeviceId(value),
    );
    AsyncStorage.getItem(ASYNC_STORAGE.USER_ID).then(value => setUserId(value));
  });
  return (
    <View style={css.container}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <SafeAreaView backgroundColor={colors.white} />
      {/* handle header */}
      <Title title={data.title} />
      <Content
        style={css.content}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => getListNotification(deviceId)}
          />
        }
        showsVerticalScrollIndicator={false}>
        <View>
          <View>
            {/* handle card UI */}
            {Platform.OS === 'ios' && (
              <View style={css.viewCardSetting}>
                <CardSetting data={data} />
              </View>
            )}
            {/* handle list UI */}
            <WithEmptyListThongBao
              isEmpty={thongbaoList.length === 0}
              text="Hiện tại không có thông báo nào!"
              thongbaoList={thongbaoList}
              setLoading={setLoading}
              deviceId={deviceId}
              userId={userId}
            />
          </View>
        </View>
      </Content>
    </View>
  );
};

export default ThongBaoScreen;
