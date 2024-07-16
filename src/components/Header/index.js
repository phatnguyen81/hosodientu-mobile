import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Icon} from 'native-base';
import PropTypes from 'prop-types';

// import {styleRadient} from '../../shared/common/style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Styles from '../../common/styles';
import {StatusBarHeight} from '../../shared/getDeviceInfos';
import {ViewGradient} from '../CoreUI/GradientButton';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  _onPressBack = () => {};
  _onPressSave = () => {
    // this.props.save();
  };

  render() {
    const {type, name, text, onPress = () => {}} = this.props;
    return (
      <ViewGradient>
        <View style={eStyle.statusBar} />
        <View style={eStyle.header}>
          <TouchableOpacity onPress={onPress}>
            <Icon type={type} name={name} style={eStyle.icon} />
          </TouchableOpacity>
          <Text style={eStyle.text_title}>{text}</Text>
          <View style={{width: 30}} />
        </View>
      </ViewGradient>
    );
  }
}

const eStyle = StyleSheet.create({
  // media queries
  text_title: {
    fontSize: Styles.FontSize.large,
    color: '#FFF',
    fontWeight: 'bold',
  },
  icon: {
    fontSize: Styles.FontSize.large,
    color: '#FFF',
  },
  header: {
    flexDirection: 'row',
    padding: Styles.padding.small,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusBar: {
    height: StatusBarHeight,
    width: '100%',
  },
});

export default Header;

Header.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  colors: PropTypes.array,
  text: PropTypes.string,
};

Header.defaultProps = {
  colors: ['#006eff', '#00abfa'],
  type: 'MaterialCommunityIcons',
  name: 'home',
  text: 'Title',
};
