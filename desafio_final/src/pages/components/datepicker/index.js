/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View } from 'react-native';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Styles  */
import { fonts, colors, metrics } from 'styles';
import styles from './styles';

export default class Datepicker extends Component {
  render() {
    return (

      <View style={styles.containerInput}>
        <DatePicker
          style={[styles.celInput,styles[`${this.props.color}`]]}
          date={this.props.date}
          mode="datetime"
          onDateChange={this.props.onDateChange}
          placeholder={this.props.title}
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
            }
          }}
        />
        <Icon
          name={this.props.icon}
          size={fonts.big}
          style={[styles.phoneIcon, styles[`${this.props.color}`]]}
        />
      </View>




    );
  }
}
