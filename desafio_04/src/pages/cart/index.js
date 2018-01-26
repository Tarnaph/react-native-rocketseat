/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, ScrollView, Text } from 'react-native';

/* Components */
import CartCard from 'pages/cart/components/card';
import CartAmount from 'pages/cart/components/amountCard';

/* Redux */
import { connect } from 'react-redux';

/* Styles */
import styles from './styles';

/* Class */
class Cart extends Component {
  /* Validações */
  static propTypes = {
    cart: PropTypes.shape({
      products: PropTypes.arrayOf(PropTypes.shape).isRequired,
    }).isRequired,
  };

  /* Antes de montar */
  componentWillMount() {
    // console.tron.log(this.props);
  }

  /* Render Scrool com o Card e Card Subtotal */
  renderScroll = products => (
    <View style={styles.scrollContainer} >
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        { products.map((product,indice) => (
          <CartCard key={product.cartProductId} product={product} indice={indice} />
        ))}
        <View style={styles.space} />
      </ScrollView>
      <CartAmount style={styles.amountContainer} />
    </View>
  );

  /* Render ou Fail Msg */
  renderOrFail = products => (
    this.props.cart.products.length
      ? this.renderScroll(products)
      : <Text style={styles.errorMsg}>Carrinho Vazio</Text>
  );

  render() {
    return (
      <View style={styles.container}>
        { this.renderOrFail(this.props.cart.products) }
      </View>
    );
  }
}

/* Pega o global state para o props */
const mapStateToProps = state => ({
  cart: state.cart,
});

/* Connecta os dois, podendo ser null */
export default connect(mapStateToProps, null)(Cart);
