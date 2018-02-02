import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: metrics.basePadding,
  },

  containerScroll: {
    flex: 1,
  },

  containerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: metrics.basePadding * 2,
    borderBottomColor: colors.regular,
    borderBottomWidth: 0.5,
    marginTop: metrics.basePadding,

  },

  title: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.dark,
  },

  containerBottom: {
    flex: 1,
    marginTop: metrics.basePadding,
  },

  text: {
    fontSize: fonts.regular,
    color: colors.regular,
  },

  date: {
    fontSize: fonts.small,
    color: colors.regular,
  },

  btn: {
    backgroundColor: colors.blue,
  },

});

export default styles;
