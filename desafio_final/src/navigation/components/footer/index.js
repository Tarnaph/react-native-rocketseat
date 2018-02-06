/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Redux */
import { connect } from 'react-redux';

/* Styles */
import styles from './styles';

/* Const */
class Footer extends Component {
  componentWillMount() {
    // console.tron.log(this.props);
  }

  fuller = () => (
    <View style={styles.fullerContainer} />
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconsContainer}>
          <TouchableOpacity
            style={styles.touchIcon}
            activeOpacity={0.8}
            onPress={() => this.props.jumpToIndex(0)}
          >
            <Icon
              name="home"
              style={[styles.icon, this.props.navigationState.index === 0 && styles.iconAtive]}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touchIcon}
            activeOpacity={0.8}
            onPress={() => this.props.jumpToIndex(1)}
          >
            <Icon
              name="shopping-cart"
              style={[styles.icon, this.props.navigationState.index === 1 && styles.iconAtive]}
            />
            <View style={[styles.fullerContainer]} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

/* Validações */
Footer.propTypes = {
  navigationState: PropTypes.shape({
    index: PropTypes.number,
  }).isRequired,
  jumpToIndex: PropTypes.func.isRequired,
};

/* Pega o global state para o props */
const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

/* Connecta os dois, podendo ser null */
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
