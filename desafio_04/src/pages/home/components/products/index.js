/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, ScrollView, RefreshControl, ActivityIndicator } from 'react-native';
import Cards from 'pages/home/components/products/components/card';

/* Redux */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProductsActions from 'redux/ducks/products';

/* Styles */
import { colors } from 'styles';
import styles from './styles';

/* Class */
class Products extends Component {
  /* Validações */
  static propTypes = {
    categories: PropTypes.shape({
      ativeCategory: PropTypes.number.isRequired,
    }).isRequired,
    products: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
    }).isRequired,
    navigation: PropTypes.shape({
    }).isRequired,
    productsRefresh: PropTypes.func.isRequired,
    productsRequest: PropTypes.func.isRequired,
  };
  /* State */
  state = { refreshing: false };

  /* Antes de montar */
  componentWillMount() {
    // console.tron.log(this.props);
  }

  /* Refresh com categoryId 1 ou category.ative */
  refreshProducts = () => {
    if (this.props.categories.ativeCategory === 0) {
      this.props.productsRefresh(1);
    } else {
      this.props.productsRequest(this.props.categories.ativeCategory);
    }
  };

  /* Msg de erros */
  errorOrEmpty = products => (
    products.data.length === 0
      ? <Text style={styles.errorMsg}>Categoria Vazia</Text>
      : <Text style={styles.errorMsg}>Ops...Não possível carregar os produtos.</Text>
  );

  /* Render final */
  renderProducts = products => (
    products.error
      ? this.errorOrEmpty(products)
      : products.data.map((product, indice) => (
        <Cards
          key={product.id}
          product={product}
          navigation={this.props.navigation}
          ativeCategory={this.props.categories.ativeCategory}
          indice={indice}
        />))
  );

  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            title="Atualizando"
            colors={[colors.white, colors.roseDark]}
            progressBackgroundColor={colors.rose}
            refreshing={this.state.refreshing}
            onRefresh={() => this.refreshProducts()}
          />
        }
      >
        <View style={styles.scroll}>
          { this.props.products.loading
            ? <ActivityIndicator style={styles.scroll} size="small" color={colors.rose} />
            : this.renderProducts(this.props.products)
          }
        </View>
      </ScrollView>
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
  productsRefresh: id => dispatch(ProductsActions.productsRefresh(id)),
  productsRequest: id => dispatch(ProductsActions.productsRequest(id)),
}, dispatch);

/* Connecta os dois, podendo ser null */
export default connect(mapStateToProps, mapDispatchToProps)(Products);
