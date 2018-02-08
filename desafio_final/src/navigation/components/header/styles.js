import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.purple,
    paddingVertical: metrics.smallMargin,
    paddingHorizontal: metrics.baseMargin,
    height: metrics.navBarHeight,
    borderBottomWidth: 1,
    borderBottomColor: colors.purpleDarker,
    elevation: 10,
  },

  title: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.white,
  },

  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: metrics.baseMargin,
    height: metrics.navBarHeight,
  },

  iconAddContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
    borderRadius: (metrics.baseMargin * 1.5) / 2,
    width: metrics.baseMargin * 1.5,
    height: metrics.baseMargin * 1.5,
  },

});

export default styles;
