import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import Styles, {width} from '../../common/styles';
import {Container} from 'native-base';

const Empty = ({text = 'Không có dữ liệu'}) => {
  return (
    <Container style={css.container}>
      <View style={css.viewEmpty}>
        <FastImage
          source={require('../../../assets/images/empty1.png')}
          resizeMode={FastImage.resizeMode.contain}
          style={{width: 200, height: 100}}
        />
        <Text
          style={{
            fontFamily: Styles.FontFamily.robotoItalic,
            textAlign: 'center',
          }}>
          {text}
        </Text>
      </View>
    </Container>
  );
};

const css = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  viewEmpty: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

const WithEmpty = Component => {
  return function WithEmptyComponent({isEmpty, text, ...props}) {
    return isEmpty ? <Empty text={text} /> : <Component {...props} />;
  };
};
export default WithEmpty;
