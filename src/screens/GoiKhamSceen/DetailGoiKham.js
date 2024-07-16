import React from 'react';
import {View, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {WebView} from 'react-native-webview';
import {connect} from 'react-redux';
import Header from '../../components/Header1';
import Colors from '../../common/colors';
import {execLogout} from '../../redux/actions/authActions';

class DetailGoiKhamScreen extends React.Component {
  render() {
    const name = this.props.navigation.getParam('name');
    const html = this.props.navigation.getParam('html');
    return (
      <View style={styles.container}>
        {/* <SafeAreaView backgroundColor={Colors.submit} /> */}
        <StatusBar backgroundColor={Colors.submit} barStyle="light-content" />
        <Header
          bgColor={Colors.white}
          text={name}
          nameL="ios-arrow-back"
          typeL="Ionicons"
          onPressL={() => {
            this.props.navigation.goBack();
          }}
        />
        <WebView
          style={{flex: 1}}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          source={{
            html: html,
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

const mapStateToProps = state => ({
  user: state.auth.user,
});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(execLogout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailGoiKhamScreen);
