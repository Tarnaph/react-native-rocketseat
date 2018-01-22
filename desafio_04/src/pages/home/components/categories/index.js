/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Redux */
import { connect } from 'react-redux';
import CategoriesActions from 'redux/ducks/categories';
import ProductsActions from 'redux/ducks/products';

/* Styles */
import { colors } from 'styles';
import styles from './styles';

class menuCategories extends Component {
  /* Validações */
  static propTypes = {
    categoriesAtive: PropTypes.func.isRequired,
    productsRequest: PropTypes.func.isRequired,
    categoriesRequest: PropTypes.func.isRequired,
    categories: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.bool,
      ativeCategory: PropTypes.number,
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
      })).isRequired,
    }).isRequired,
  };

  /* Antes de Mountar */
  componentWillMount() {
    this.requestCategories();
    // console.tron.log(this.props);
  }

  /* Define categoria(id) & produto(id) */
  setCategoryandProducts = (id) => {
    this.props.categoriesAtive(id);
    this.props.productsRequest(id);
  };

  /* Carrega Categorias & Produtos */
  requestCategories = () => {
    if (this.props.categories.ativeCategory === 0) {
      this.setCategoryandProducts(1);
      this.props.categoriesRequest();
    } else {
      this.props.categoriesRequest();
    }
  };

  /* Render Error ou Menu */
  categoryOrFail = () => (
    this.props.categories.error
      ? this.renderError()
      : this.renderScroll()
  );

  /* Erro & Msg */
  renderError = () => (
    <TouchableOpacity style={styles.errorContainer} onPress={() => this.requestCategories()}>
      <Text style={styles.errorMsg}>
        Opss... Vefique sua coneção com internet e tente novamente.
      </Text>
      <Icon name="refresh" style={styles.errorIcon} />
    </TouchableOpacity>
  );

  /* Menu */
  renderScroll = () => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
      {this.props.categories.data.map(category => (
        <TouchableOpacity
          style={[styles.menu]}
          key={category.id}
          activeOpacity={0.8}
          onPress={() => this.setCategoryandProducts(category.id)}
        >
          <View />
          <Text
            style={[styles.title,
            category.id === this.props.categories.ativeCategory && styles.active]}
          >
            {category.title.toUpperCase()}
          </Text>
          <View
            style={category.id === this.props.categories.ativeCategory
            && styles.activeContainer}
          />
        </TouchableOpacity>))}
    </ScrollView>
  );

  /* Render Final */
  renderMenu = data => (
    this.props.categories.loading
      ? <ActivityIndicator style={styles.scroll} size="small" color={colors.white} />
      : this.categoryOrFail(data)
  );

  render() {
    return (
      <View style={styles.container}>
        {this.renderMenu(this.props.categories.data)}
      </View>
    );
  }
}

/* Pega o global state para o props */
const mapStateToProps = state => ({
  categories: state.categories,
});

/* Pega func para o props */
const mapDispatchToProps = dispatch => ({
  categoriesRequest: () => dispatch(CategoriesActions.categoriesRequest()),
  categoriesAtive: id => dispatch(CategoriesActions.categoriesAtive(id)),
  productsRequest: id => dispatch(ProductsActions.productsRequest(id)),
});

/* Connecta os dois, podendo ser null */
export default connect(mapStateToProps, mapDispatchToProps)(menuCategories);
