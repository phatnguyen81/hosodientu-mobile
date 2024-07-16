/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import {Icon} from 'native-base';
import TextCss from '../../common/styles';
import {Colors} from 'react-native/Libraries/NewAppScreen';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  _onPressBack = () => {};
  _onPressSave = () => {};

  render() {
    const {
      typeL = 'MaterialCommunityIcons',
      nameL,
      typeComp,
      text,
      onPressL = () => {},
      onPressR = () => {},
      bgColor,
      typeR,
      padding,
      nameR,
      height,
      colorText,
      textR,
    } = this.props;
    return (
      <View
        style={[
          css.header,
          {
            backgroundColor: bgColor,
            height: typeComp ? null : height || 60,
            justifyContent: typeComp ? 'flex-start' : 'space-between',
          },
        ]}>
        <TouchableOpacity style={css.viewIconL} onPress={onPressL}>
          <Icon type={typeL} name={nameL} style={css.icon} />
        </TouchableOpacity>
        <View
          style={[
            css.viewText,
            {width: typeComp ? '80%' : '70%', padding: padding || null},
          ]}>
          <Text
            style={[
              TextCss.s18b,
              css.text,
              {color: colorText ? colorText : Colors.black},
            ]}>
            {text}
          </Text>
        </View>
        {typeComp ? null : (
          <TouchableOpacity style={css.viewIconR} onPress={onPressR}>
            {textR ? (
              <Text
                style={[
                  TextCss.s18b,
                  css.textR,
                  {color: colorText ? colorText : Colors.black},
                ]}>
                {textR}
              </Text>
            ) : (
              <Icon type={typeR} name={nameR} style={css.icon} />
            )}
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const css = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  viewIconL: {
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    height: 25,
    width: 20,
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.black,
  },

  viewText: {
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: Colors.black,
    marginHorizontal: 10,
    textTransform: 'capitalize',
  },

  viewIconR: {
    // width: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textR: {
    marginRight: 20,
  },
});

export default Header;
