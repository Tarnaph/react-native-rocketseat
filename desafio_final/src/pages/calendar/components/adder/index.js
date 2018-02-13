/* Core */
import React, { Component } from 'react';

/* Presentational */
import { Modal, TouchableOpacity, View, Text } from 'react-native';

/* Components */
import Btn from 'pages/components/btn';
import Input from 'pages/components/input';
import Datepicker from 'pages/components/datepicker';

/* Styles */
import styles from './styles';

export default class Adder extends Component {
  state = { modalVisible: true, datetime: '', title: '', text: '', loading: false };
  render() {
    return (
      <Modal
        transparent
        visible={this.state.modalVisible}
        animationType={'fade'}
        onRequestClose={() => this.setState({modalVisible: false })}
      >
        <View style={styles.container}>
          <View style={styles.box}>

            <View style={styles.header}>
              <Text style={styles.title}>Criar Evento</Text>
            </View>

            <View>
              <Datepicker
                title="Selecione data e horário"
                icon="calendar"
                color="gray"
                date={this.state.datetime}
                onDateChange={(datetime) => {this.setState({datetime: datetime})}}
              />
              <Input
                title="Qual nome do evento ?"
                icon="comment"
                onChangeText={title => this.setState({ title })}
                value={this.state.title}
                keyboardType="default"
                color="gray"
              />
              <Input
                title="Onde Ocorrerá ?"
                icon="comments"
                onChangeText={text => this.setState({ text })}
                value={this.state.text}
                keyboardType="default"
                color="gray"
              />
              <Btn
                title="Criar evento"
                link={this.login}
                loading={this.state.loading}
              />
            </View>

            <View style={styles.bottom}>
              <TouchableOpacity activeOpacity={0.7} onPress={() => this.setState({modalVisible: false })}>
                <Text style={styles.backTitle}> Cancelar</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>
    );
  }
}
