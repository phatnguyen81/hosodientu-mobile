import React from 'react';
import {
  Platform,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';
import WebView from 'react-native-webview';
import Styles, {width} from '../../../common/styles';
import {View} from 'react-native-animatable';

function Item({id}) {
  return (
    <TouchableOpacity>
      <View style={[css.item]}>
        <WebView
          style={css.webviewVideo}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{
            uri: `https://www.youtube.com/embed/${id}`,
          }}
        />
      </View>
    </TouchableOpacity>
  );
}

export default function VideoList({videos}) {
  return (
    <View>
      <FlatList
        data={videos}
        renderItem={({item}) => <Item id={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={item => item}
      />
    </View>
  );
}

const css = StyleSheet.create({
  // -------- style for video ---------
  item: {
    padding: 5,
    paddingBottom: 10,
    borderRadius: 20,
  },
  webviewVideo: {
    width: width * 0.7,
    height: (width * 9 * 0.7) / 16,
    borderRadius: 20,
  },
  textTitleVideo: {
    textAlign: 'center',
    fontSize: 30,
  },
});
