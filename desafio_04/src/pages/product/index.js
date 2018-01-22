/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View } from 'react-native';

/* Components */
import ProductCard from 'pages/product/components/card';

/* Styles */
import styles from './styles';

/* Class */
export default class product extends Component {
  /* Validações */
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          data: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            brand: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
          }),
          cartProductId: PropTypes.string,
        }),
      }),
    }).isRequired,
  };

  /* Antes de mountar */
  componentWillMount() {
    // console.tron.log(this.props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ProductCard product={this.props.navigation.state.params} />
      </View>
    );
  }
}
