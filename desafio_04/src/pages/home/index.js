/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { AsyncStorage, View } from 'react-native';

/* Components */
import Categories from 'pages/home/components/categories';
import Products from 'pages/home/components/products';

/* Redux */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CategoriesActions from 'redux/ducks/categories';
import ProductsActions from 'redux/ducks/products';

/* Styles */
import styles from './styles';

/* Class */
class Main extends Component {
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
  };

  /* Antes de mountar */
  componentWillMount() {
    // AsyncStorage.clear();
    // console.tron.log(this.props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Categories />
        <Products navigation={this.props.navigation} />
      </View>
    );
  }
}

/* Pega o global state para o props */
const mapStateToProps = state => ({
  categories: state.categories,
  products: state.products,
});

/* Pega func para o props */
const mapDispatchToProps = dispatch => bindActionCreators({
  categoriesRequest: () => dispatch(CategoriesActions.categoriesRequest()),
  productsRequest: id => dispatch(ProductsActions.productsRequest(id)),
});

/* Connecta os dois, podendo ser null */
export default connect(mapStateToProps, mapDispatchToProps)(Main);
