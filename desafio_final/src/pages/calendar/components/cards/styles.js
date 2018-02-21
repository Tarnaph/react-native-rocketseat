import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: metrics.navBarHeight * 1.5,
    backgroundColor: colors.white,
    marginBottom: metrics.baseMargin / 4,
    marginTop: metrics.baseMargin / 2,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    borderLeftWidth: 5,
    borderLeftColor: colors.green,
  },

  left: {
    flexDirection: 'column',
  },

  right: {

  },

  title: {
    fontSize: fonts.big,
    fontWeight: 'bold',
    color: colors.dark,
  },

  description: {
    fontSize: fonts.regular,
    color: colors.dark,
  },

  time: {
    fontSize: fonts.regular,
    color: colors.regular,
  },
});

export default styles;
