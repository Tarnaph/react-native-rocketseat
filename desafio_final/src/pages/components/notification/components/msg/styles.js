import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    minWidth: metrics.screenWidth,
    height: metrics.navBarHeight,
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    elevation: 10,
  },
  error: {
    backgroundColor: colors.danger,
  },

  success: {
    backgroundColor: colors.success,
  },

  show: {
    top: 0,
  },

  hide: {
    top: -35,
  },

  title: {
    padding: 5,
    fontWeight: 'bold',
    fontSize: fonts.regular,
    color: colors.lighter,
  },

});

export default styles;
