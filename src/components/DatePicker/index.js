import React, {useState} from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-native-datepicker';
import {View, Text, Platform} from 'react-native';
import Styles from '../../common/styles';
import {Icon} from 'native-base';
import moment from 'moment';

class CustomDatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initValue: this.props.initValue,
      date: this.props.initValue
        ? moment(this.props.initValue).format('DD/MM/YYYY')
        : '',
    };
    this.props.input.onChange(this.props.initValue);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.initValue !== prevState.initValue) {
      return {
        initValue: nextProps.initValue,
        date: moment(nextProps.initValue).format('DD/MM/YYYY'),
      };
    } else return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.initValue !== this.state.initValue) {
      // Thục hiện update state
      prevProps.input.onChange(this.state.date);
    }
  }
  render() {
    const {
      label = 'label',
      labelStyle,
      input: {onChange, value, ...resInput},
      minDate,
      maxDate,
      confirmBtnText = 'Confirm',
      cancelBtnText = 'Cancel',
      iconComponent = (
        <Icon
          type="MaterialCommunityIcons"
          name="calendar-today"
          style={css.icon}
        />
      ),
    } = this.props;
    const onOpenModal = () => {
      this.setState({date: value || new Date()});
    };
    return (
      <View style={css.container}>
        <Text style={[css.label, labelStyle]}>{label}</Text>
        <DatePicker
          style={css.main}
          date={value || this.state.date}
          mode="date"
          placeholder="-- / -- / ----"
          format="DD/MM/YYYY"
          minDate={minDate}
          maxDate={maxDate}
          confirmBtnText={confirmBtnText}
          cancelBtnText={cancelBtnText}
          customStyles={css.customStyles}
          onDateChange={onChange}
          onOpenModal={onOpenModal}
          iconComponent={iconComponent}
          {...resInput}
        />
      </View>
    );
  }
}

CustomDatePicker.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
  confirmBtnText: PropTypes.string,
  cancelBtnText: PropTypes.string,
};

export default CustomDatePicker;

// handle css
const css = {
  label: {
    fontSize: Styles.FontSize.medium,
    color: '#707070',
    marginBottom: Styles.margin.tiny,
  },
  main: {
    padding: 0,
    paddingHorizontal: Styles.padding.tiny,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: Styles.radius.tiny,
  },
  customStyles: {
    dateInput: {
      marginLeft: 0,
      borderWidth: 0,
      padding: 0,
    },
    placeholderText: {
      fontSize: Platform.select({
        ios: Styles.FontSize.medium,
        android: Styles.FontSize.large,
        default: 0,
      }),
    },
  },
  icon: {
    color: '#C9C9C8',
  },
};
