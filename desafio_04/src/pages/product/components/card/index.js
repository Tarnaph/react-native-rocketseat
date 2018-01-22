/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, Image, TouchableOpacity, AsyncStorage } from 'react-native';

/* Redux */
import { connect } from 'react-redux';
import CartActions from 'redux/ducks/cart';

/* Styles */
import styles from './styles';

/* Class */
class ProductCart extends Component {
  /* Validações */
  static propTypes = {
    product: PropTypes.shape({
      data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      }),
      cartProductId: PropTypes.string,
    }),
    cart: PropTypes.shape({
      products: PropTypes.arrayOf(PropTypes.shape).isRequired,
    }).isRequired,
    cartAdd: PropTypes.func.isRequired,
    cartRemove: PropTypes.func.isRequired,
  };

  /* Default Props */
  static defaultProps = {
    product: {
      cartProductId: () => this.props.product.cartProductId,
    },
  };

  /* Antes de Montar */
  componentWillMount() {
    // AsyncStorage.clear();
    console.tron.log(this.props);
  }

  /* Adiciona ao carrinho ou remove */
  addOrRemove = () => {
    if (this.marked()) {
      this.props.cartRemove(this.props.product.cartProductId);
    } else {
      this.props.cartAdd(this.props.product);
    }
  };

  /* Verifica se já esta no carrinho */
  marked = () => (
    this.props.cart.products.some(product =>
      product.cartProductId === this.props.product.cartProductId)
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerImg}>
          <Image
            source={{ uri: this.props.product.data.image }}
            style={styles.cover}
          />
        </View>
        <View style={styles.containerText}>
          <View style={styles.left}>
            <Text style={styles.title}>{this.props.product.data.name}</Text>
            <Text style={styles.subTitle}>{this.props.product.data.brand}</Text>
          </View>

          <View style={styles.right}>
            <Text style={styles.price}>R${this.props.product.data.price}</Text>
          </View>
        </View>
        <View style={styles.footer} >
          <TouchableOpacity
            style={[styles.btn, this.marked() ? styles.rose : styles.green]}
            activeOpacity={0.8}
            onPress={this.addOrRemove}
          >
            <Text style={styles.btnText}>
              { this.marked() ? 'Remover do Carrinho' : 'Adicionar ao Carrinho'}
            </Text>
          </TouchableOpacity>
        </View>
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
  cartAdd: data => dispatch(CartActions.cartAdd(data)),
  cartRemove: data => dispatch(CartActions.cartRemove(data)),
});

/* Connecta os dois, podendo ser null */
export default connect(mapStateToProps, mapDispatchToProps)(ProductCart);
