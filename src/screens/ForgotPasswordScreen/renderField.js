import React from 'react';
import {Item, Input, Text} from 'native-base';
import PropTypes from 'prop-types';
import RadioForm from 'react-native-simple-radio-button';
import {inputProps} from './constants';
import {css} from './css';
import colors from '../../common/colors';
import Styles from '../../common/styles';

class renderInputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initValue: this.props.initValue,
    };
    this.props.input.onChange(this.props.initValue);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.initValue !== prevState.initValue) {
      return {initValue: nextProps.initValue};
    } else {
      return null;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.initValue !== this.state.initValue) {
      // Thục hiện update state
      prevProps.input.onChange(this.state.initValue);
    }
  }

  render() {
    const {
      onSubmitEditing,
      autoCapitalize,
      onFocus,
      label,
      keyboardType,
      input,
      meta: {touched, error},
    } = this.props;
    let hasError = false;
    if (error !== undefined && touched) {
      hasError = true;
    }
    return (
      <Item rounded style={css['form-item']} error={hasError}>
        <Input
          onSubmitEditing={onSubmitEditing}
          autoCapitalize={autoCapitalize}
          onFocus={onFocus}
          {...inputProps(label)}
          style={css['form-item-input']}
          keyboardType={keyboardType}
          {...input}
        />
        {touched && error && <Text style={css.textError}>{error}</Text>}
      </Item>
    );
  }
}
renderInputField.propTypes = {
  onSubmitEditing: PropTypes.func,
  autoCapitalize: PropTypes.string,
  onFocus: PropTypes.func,
  label: PropTypes.string,
  onChangeText: PropTypes.func,
};

export {renderInputField};
