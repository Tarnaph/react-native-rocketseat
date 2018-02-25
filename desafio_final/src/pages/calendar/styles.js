import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purple,
  },

  top: {
    flexDirection: 'row',
    backgroundColor: colors.purpleDark,
    borderBottomWidth: 1,
    borderBottomColor: colors.purpleDarker,
  },

  medium: {
    flex: 1,
  },

  list: {
    paddingHorizontal: metrics.basePadding / 2,
    marginBottom: metrics.baseMargin,
    marginTop: metrics.baseMargin / 2,
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  loading: {
    marginTop: metrics.basePadding * 4,
  },

  containerEmpty: {
    marginTop: metrics.basePadding * 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loadingText: {
    position: 'absolute',
    alignSelf: 'center',
    color: colors.purpleDarker,
    fontSize: fonts.smaller,
    fontWeight: 'bold',
  },

  titleEmpty: {
    color: colors.purpleDarker,
    fontSize: fonts.smaller,
    fontWeight: 'bold',
  },

});

export default styles;
