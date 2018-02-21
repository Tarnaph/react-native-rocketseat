import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: metrics.navBarHeight * 1.5,
    backgroundColor: colors.white,
    marginBottom: metrics.baseMargin / 4,
    marginTop: metrics.baseMargin / 2,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    borderLeftWidth: 5,
    borderLeftColor: colors.green,
  },

  left: {

  },

  right: {

  },

  title: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.dark,
    maxWidth: (metrics.screenWidth / 2) + (metrics.baseMargin * 4),
  },

  description: {
    marginTop: metrics.tinyMargin,
    fontSize: fonts.regular,
    color: colors.dark,
    maxWidth: (metrics.screenWidth / 2) + (metrics.baseMargin * 4),
  },

  time: {
    fontSize: fonts.regular,
    color: colors.regular,
  },
});

export default styles;
