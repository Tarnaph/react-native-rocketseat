/* Core */
import React, { Component } from 'react';

/* Presentational */
import { Modal, TouchableOpacity, View, Text } from 'react-native';

/* Styles */
import styles from './styles';

/* Components */
import Btn from 'pages/components/btn';
import Input from 'pages/components/input';

export default class Adder extends Component {
  state = { modalVisible: true, date: '', title: '', text: '', loading: false };

  openModal() {
    this.setState({modalVisible: true });
  }

  closeModal() {
    this.setState({modalVisible: false });
  }
  render() {
    return (
      <Modal
        transparent
        visible={this.state.modalVisible}
        animationType={'fade'}
        onRequestClose={() => this.closeModal()}
      >
        <View style={styles.container}>
          <View style={styles.box}>

            <View style={styles.header}>
              <Text style={styles.title}>Criar Evento</Text>
            </View>

            <View>
              <Input
                title="Selecione data e horário"
                icon="calendar"
                onChangeText={date => this.setState({ date })}
                value={this.state.date}
                keyboardType="default"
                color="gray"
              />
              <Input
                title="Qual nome do evento ?"
                icon="user"
                onChangeText={title => this.setState({ title })}
                value={this.state.title}
                keyboardType="default"
                color="gray"
              />
              <Input
                title="Onde Ocorrerá ?"
                icon="lock"
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
              <TouchableOpacity activeOpacity={0.7} onPress={() => this.closeModal()}>
                <Text style={styles.backTitle}> Cancelar</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>
    );
  }
}
