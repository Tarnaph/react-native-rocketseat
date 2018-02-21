/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View } from 'react-native';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Styles  */
import { fonts, colors } from 'styles';
import styles from './styles';

/* Const Datepicker */
const Datepicker = ({
  color, date, onDateChange, title, icon,
}) => (
  <View style={styles.containerInput}>
    <DatePicker
      style={[styles.celInput, styles[`${color}`]]}
      date={date}
      mode="datetime"
      onDateChange={onDateChange}
      placeholder={title}
      format="YYYY-MM-DD HH:mm"
      confirmBtnText="Confirmar"
      cancelBtnText="Cancelar"
      showIcon={false}
      customStyles={{
        dateInput: {
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          flexDirection: 'row',
          justifyContent: 'flex-start',
        },
        placeholderText: {
          color: colors.dark,
        },
      }}
    />
    <Icon
      name={icon}
      size={fonts.big}
      style={[styles.phoneIcon, styles[`${color}`]]}
    />
  </View>
);

/* PropTypes */
Datepicker.propTypes = {
  color: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onDateChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Datepicker;
