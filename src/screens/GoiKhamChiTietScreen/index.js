import React from 'react';
import {View, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {WebView} from 'react-native-webview';
import {connect} from 'react-redux';
import Header from '../../components/Header1';
import Colors from '../../common/colors';

class ChiTietGoiKhamScreen extends React.Component {
  render() {
    const {name, html} = this.props;
    const formatContent = `<html><head><meta name="viewport" content="width=device-width, initial-scale=0.6"><style>body { font-size: 100%; word-wrap: break-word; overflow-wrap: break-word; }</style></head><body>${html}</body></html>`;

    return (
      <View style={styles.container}>
        <SafeAreaView backgroundColor={Colors.submit} />
        <StatusBar backgroundColor={Colors.submit} barStyle="light-content" />
        <Header
          bgColor={Colors.white}
          text={name}
          nameL="ios-arrow-back"
          typeL="Ionicons"
          typeComp="left"
          padding={15}
          onPressL={() => {
            this.props.navigation.goBack();
          }}
        />
        <WebView
          style={{marginBottom: 30}}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          source={{
            html: formatContent,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect()(ChiTietGoiKhamScreen);
