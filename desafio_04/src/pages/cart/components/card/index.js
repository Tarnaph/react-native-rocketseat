/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Redux */
import { connect } from 'react-redux';
import CartActions from 'redux/ducks/cart';

/* Styles */
import { colors } from 'styles';
import styles from './styles';

/* Class */
class CartCard extends Component {
  /* Validações */
  static propTypes = {
    product: PropTypes.shape({
      data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      }).isRequired,
      cartProductId: PropTypes.string.isRequired,
      qty: PropTypes.number.isRequired,
    }).isRequired,
    cartUpdate: PropTypes.func.isRequired,
    cartRemove: PropTypes.func.isRequired,
  };

  state = {
    qty: this.props.product.qty,
    error: false,
  };

  /* Antes de montar */
  componentWillMount() {
    // console.tron.log(this.props);
  }

  /* Timer do erro */
  hideError = () => {
    setTimeout(() => { this.setState({ error: false }); }, 800);
  };

  /* Erro no input */
  myError = () => (
    <ActivityIndicator size="small" color={colors.rose} />
  );

  /* Validação do qty */
  changeQty = (qty) => {
    if (qty === '0') {
      this.setState({ error: true });
      this.hideError();
      this.props.cartUpdate(this.props.product.cartProductId, parseInt(1, 10));
    } else if (qty === '') {
      this.props.cartUpdate(this.props.product.cartProductId, parseInt(1, 10));
    } else {
      this.props.cartUpdate(this.props.product.cartProductId, parseInt(qty, 10));
    }
  };

  /* Render Input */
  myInput = () => (
    <TextInput
      style={styles.amount}
      defaultValue={(this.state.qty).toString()}
      onChangeText={this.changeQty}
      underlineColorAndroid={colors.alfa}
      placeholder="1"
      keyboardType="numeric"
      multiline
      numberOfLines={2}
    />
  );

  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={Keyboard.dismiss}
        activeOpacity={1}
      >
        <View style={styles.left}>
          <Image
            source={{ uri: this.props.product.data.image }}
            style={styles.cover}
          />
        </View>
        <View style={styles.containerText}>
          <View style={styles.center}>
            <Text style={styles.title}>{this.props.product.data.name}</Text>
            <Text style={styles.subTitle}>{this.props.product.data.brand}</Text>
            <Text style={styles.price}>R${this.props.product.data.price}</Text>
          </View>
          <View style={styles.right}>
            { this.state.error ? this.myError() : this.myInput() }
            <TouchableOpacity
              style={styles.continerIcon}
              activeOpacity={0.8}
              onPress={() => this.props.cartRemove(this.props.product.cartProductId)}
            >
              <Icon name="remove" style={styles.removeIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

/* Pega o global state para o props */
const mapStateToProps = state => ({
  cart: state.cart,
});

/* Pega func para o props */
const mapDispatchToProps = dispatch => ({
  cartUpdate: (id, qty) => dispatch(CartActions.cartUpdate(id, qty)),
  cartRemove: data => dispatch(CartActions.cartRemove(data)),
});

/* Connecta os dois, podendo ser null */
export default connect(mapStateToProps, mapDispatchToProps)(CartCard);
