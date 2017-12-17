import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.white,
    shadowColor: colors.light,
    shadowOpacity: 0.5,
    shadowRadius: 8,
    paddingHorizontal: metrics.smallMargin,
  },

  headerTitle: {
    fontSize: fonts.regular,
    color: colors.darker,
    fontWeight: 'bold',
  },
});

export default styles;
