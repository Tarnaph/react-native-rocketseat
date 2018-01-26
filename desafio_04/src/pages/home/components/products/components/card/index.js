/* Core */
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, TouchableOpacity, Image, Animated } from 'react-native';

/* Styles */
import { metrics } from 'styles';
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
    indice: PropTypes.number.isRequired,
  };

  state = {
    opacity: new Animated.Value(0),
    offset: new Animated.ValueXY({ y: (metrics.screenHeight) / 8, x: 0 }),
    offsetTitle: new Animated.ValueXY({ y: (metrics.screenHeight) / 8, x: 0 }),
    offsetBtn: new Animated.ValueXY({ y: (metrics.screenHeight) / 8, x: 0 }),
  };

  /* Antes de montar */
  componentWillMount() {
    // console.tron.log(this.props);
  }

  componentDidMount() {
    Animated.sequence([

      Animated.delay(20 + this.props.indice),

      Animated.parallel([
        Animated.timing(this.state.offset.y, {
          toValue: 0,
          duration: 200,
        }),
        Animated.timing(this.state.offsetTitle.y, {
          toValue: 0,
          duration: 240,
        }),
        Animated.timing(this.state.offsetBtn.y, {
          toValue: 0,
          duration: 380,
        }),
        Animated.timing(this.state.opacity, {
          toValue: 1,
          duration: 580,
        }),
      ]),
    ]).start();
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
      <Animated.View style={[
          { transform: [...this.state.offsetTitle.getTranslateTransform()] },
          { opacity: this.state.opacity }]}
      >
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
      </Animated.View>
    );
  }
}
