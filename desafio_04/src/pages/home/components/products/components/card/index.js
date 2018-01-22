/* Core */
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, TouchableOpacity, Image } from 'react-native';

/* Styles */
import styles from './styles';

/* Class */
export default class cards extends Component {
  /* Validações */
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        routeName: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
      }),
      dispatch: PropTypes.func.isRequired,
      goBack: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired,
      setParams: PropTypes.func.isRequired,
    }).isRequired,
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
    ativeCategory: PropTypes.number.isRequired,
  };

  /* Antes de montar */
  componentWillMount() {
    // console.tron.log(this.props);
  }

  /* Navega até o produto */
  navigateToProduct = () => (
    this.props.navigation.dispatch(NavigationActions.navigate({
      routeName: 'Product',
      params: {
        data: this.props.product,
        cartProductId: `#${this.props.ativeCategory}@${this.props.product.id}`,
      },
    }))
  );

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.container}
        onPress={this.navigateToProduct}
      >
        <Image
          source={{ uri: this.props.product.image }}
          style={styles.cover}
        />
        <View style={styles.containerText}>
          <Text style={styles.title}>{this.props.product.name}</Text>
          <Text style={styles.subTitle}>{this.props.product.brand}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>R${this.props.product.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
