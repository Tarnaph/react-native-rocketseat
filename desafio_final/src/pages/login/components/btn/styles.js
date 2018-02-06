import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    height: metrics.navBarHeight,
    backgroundColor: colors.green,
    borderRadius: metrics.baseRadius,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },

  title: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default styles;
