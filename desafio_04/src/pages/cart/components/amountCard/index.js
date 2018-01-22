/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text } from 'react-native';

/* Redux */
import { connect } from 'react-redux';
import CartActions from 'redux/ducks/cart';

/* Styles */
import styles from './styles';

/* Class */
class AmountCard extends Component {
  /* Validações */
  static propTypes = {
    cart: PropTypes.shape({
      products: PropTypes.arrayOf(PropTypes.shape).isRequired,
    }).isRequired,
  };

  /* Antes de mountar */
  componentWillMount() {
    // console.tron.log(this.props);
  }

  /* Calcula o subTotal */
  getSubtotal = () => (
    this.props.cart.products.reduce((amount, item) =>
      amount + (item.data.price * item.qty), 0)
  );

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Subtotal</Text>
        <Text style={styles.subtitle}>R$: {this.getSubtotal().toFixed(2)}</Text>
      </View>
    );
  }
}

/* Pega o global state para o props */
const mapStateToProps = state => ({
  cart: state.cart,
});

/* Pega func para o props */
const mapDispatchToProps = dispatch => ({
  cartSubtotal: data => dispatch(CartActions.cartSubtotal(data)),
});

/* Connecta os dois, podendo ser null */
export default connect(mapStateToProps, mapDispatchToProps)(AmountCard);
