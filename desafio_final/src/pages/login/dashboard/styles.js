import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purple,
  },

  containerTitle: {
    flex: 1,
    backgroundColor: colors.purpleDark,
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: metrics.navBarHeight * 1.5,
    borderBottomWidth: 1,
    borderBottomColor: colors.purpleDarker,
  },

  title: {
    fontSize: fonts.big,
    fontWeight: 'bold',
    color: colors.white,
  },

  containerMedium: {
    flex: 1,
    padding: metrics.basePadding,
  },

  hr: {
    height: 1,
    backgroundColor: colors.purpleDark,
    marginBottom: metrics.baseMargin / 2,
    paddingHorizontal: metrics.tinyMargin * 2,
  },
});

export default styles;
