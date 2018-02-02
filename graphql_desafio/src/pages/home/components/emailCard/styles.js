import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: metrics.basePadding,
    height: (metrics.screenHeight - 54) / 8,
    width: metrics.screenWidth,
    backgroundColor: colors.white,
    borderBottomColor: colors.light,
    marginBottom: 1,
    borderBottomWidth: 1,
  },

  containerLeft: {
    flexDirection: 'column',
  },

  title: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.dark,
    marginBottom: metrics.tinyMargin,
  },

  subTitle: {
    fontSize: fonts.small,
    color: colors.regular,
  },

  containerRight: {
    flexDirection: 'column',
  },

  date: {
    fontSize: fonts.small,
    color: colors.regular,
  },

});

export default styles;
