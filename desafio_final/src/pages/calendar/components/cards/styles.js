import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: metrics.navBarHeight * 1.5,
    backgroundColor: colors.white,
    marginBottom: metrics.baseMargin / 2,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    elevation: 6,
  },

  left: {
    flexDirection: 'column',
  },

  right: {

  },

  title: {
    fontSize: fonts.big,
    fontWeight: 'bold',
    color: colors.purpleDarker,
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
