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
   state = {
    modalVisible: true,
  };

  openModal() {
    this.setState({modalVisible: true});
  }

  closeModal() {
    this.setState({modalVisible: false});
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
              <Text style={styles.title}>Scheduler</Text>
            </View>

            <View>
              <Input title="Seu número de telefone" icon="phone" />
              <Input title="Nome Completo" icon="user" />
              <Input title="Sua senha secreta" icon="lock" />
              <Btn title="Criar evento" link={this.login}/>

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
