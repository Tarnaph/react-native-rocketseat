import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.blue,
    paddingVertical: metrics.smallMargin,
    paddingHorizontal: metrics.baseMargin,
    height: metrics.navBarHeight,
    borderBottomWidth: 1,
    borderBottomColor: colors.blueDark,
    elevation: 5,
  },

  title: {
    fontSize: fonts.big,
    fontWeight: 'bold',
    color: colors.white,
  },

});

export default styles;
