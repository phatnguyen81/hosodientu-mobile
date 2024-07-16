import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Styles, {width} from '../../common/styles';
import {View} from 'react-native-animatable';
import colors from '../../common/colors';
const DATA = [
  {
    id: 'cqOeQnJQ_bo',
  },
  {
    id: '9gsxKuPcR84',
  },
  {
    id: 'gRlxVKWF5kw',
  },
];

function Item({id}) {
  return <View style={[css.item, css.webviewVideo]} />;
}

export default function VideoListHolder() {
  return (
    <View style={{width: width}}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item id={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const css = StyleSheet.create({
  // -------- style for video ---------
  item: {
    margin: 5,
  },
  webviewVideo: {
    backgroundColor: colors.sliver,
    width: width * 0.7,
    height: (width * 9 * 0.7) / 16,
    borderRadius: Styles.radius.small,
  },
  textTitleVideo: {
    textAlign: 'center',
    fontSize: 30,
  },
});
