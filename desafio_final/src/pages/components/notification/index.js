/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View } from 'react-native';

/* Redux */
import { connect } from 'react-redux';
import NotificationActions from 'redux/ducks/notification';

/* Components */
import Msg from './components/msg';

/* Styles */
import styles from './styles';

/* Class Redux style */
class Notification extends Component {
  /* Validacoes */
  static propTypes = {
    notification: PropTypes.shape({
      show: PropTypes.bool.isRequired,
      msg: PropTypes.string.isRequired,
      error: PropTypes.bool.isRequired,
    }).isRequired,
    notificationHide: PropTypes.func.isRequired,
  }

  /* Antes de montar o component */
  componentWillMount() { this.hideMsg(); }

  /* Qualquer update do props */
  componentDidUpdate() { this.hideMsg(); }

  /* Chama Action Hide */
  hideMsg = () => {
    if (this.props.notification.show) {
      setTimeout(() => { this.props.notificationHide(); }, 3000);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        { this.props.notification.show === true
          ? <Msg msg={this.props.notification.msg} error={this.props.notification.error} />
          : <View />
        }
      </View>
    );
  }
}

/* Pega o global state para o props */
const mapStateToProps = state => ({
  notification: state.notification,
});

/* Pega func para o props */
const mapDispatchToProps = dispatch => ({
  notificationHide: () => dispatch(NotificationActions.notificationHide()),
});

/* Connecta os dois, podendo ser null */
export default connect(mapStateToProps, mapDispatchToProps)(Notification);
