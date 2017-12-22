/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { AsyncStorage, View, Text, Image, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import MapView from 'react-native-maps';

/* Redux */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showModal, hideModal, setCoord, removeUser } from 'redux/ducks/modal';

/* Components */
import MyModal from './components/modal';
import MyButton from './components/button';
import Error from './components/error';

/* Styles */
import styles from './styles';

/* Class */
class Main extends Component {
  static navigationOptions = {
    header: null,
  };

  /* Validação */
  static propTypes = {
    showModal: PropTypes.func.isRequired,
    removeUser: PropTypes.func.isRequired,
    visibilityModal: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
  };

  /* Estado inicial */
  state = {
    latitude: -27.2177659,
    longitude: -49.6451598,
    latitudeDelta: 0.0042,
    longitudeDelta: 0.0031,
    local: '',
  };

  componentWillMount() {
    // AsyncStorage.clear();
  }

  openModal = (e) => {
    this.setState({ local: e.coordinate });
    this.props.showModal();
  };

  render() {
    const {
      latitude,
      longitude,
      latitudeDelta,
      longitudeDelta,
    } = this.state;
    return (
      <View style={styles.container}>
        <MapView
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta,
            longitudeDelta,
          }}
          style={styles.mapView}
          onLongPress={e => this.openModal(e.nativeEvent)}
        >
          { this.props.marker.map(mk => (
            <MapView.Marker
              key={mk.user.id}
              coordinate={mk.local}
              title={mk.user.login}
              description={mk.user.bio}
            >
              <Image source={{ uri: mk.user.avatar_url }} style={styles.avatar} />
              <MapView.Callout style={styles.callout} tooltip>
                <View style={styles.card}>
                  <View style={styles.headerCard}>
                    <View style={styles.headerCardLeft}>
                      <Text style={styles.title}>{mk.user.login}</Text>
                    </View>
                    <View style={styles.headerCardRight}>
                      <Text style={styles.infos}>
                        <Icons name="users" style={styles.iconGithub} />
                        {mk.user.following}
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.bio}>{mk.user.bio}</Text>
                  <TouchableOpacity onPress={() => this.props.removeUser(mk.user.id)}>
                    <MyButton title="Deletar" bg="Danger" style={styles.btnTrash} />
                  </TouchableOpacity>
                </View>
              </MapView.Callout>
            </MapView.Marker>
            ))}
        </MapView>
        <MyModal status={this.props.visibilityModal} local={this.state.local} />
        { this.props.error ? <Error /> : null }
      </View>
    );
  }
}

/* Pega o global state para o props */
const mapStateToProps = state => ({
  visibilityModal: state.modal.visibilityModal,
  marker: state.modal.marker,
  error: state.modal.error,
  loading: state.modal.loading,
});

/* Pega func para o props */
const mapDispatchToProps = dispatch =>
  bindActionCreators({
    showModal,
    hideModal,
    setCoord,
    removeUser
  }, dispatch);

/* Connecta os dois, podendo ser null */
export default connect(mapStateToProps, mapDispatchToProps)(Main);
