import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  containerInput: {

  },

  purple: {
    backgroundColor: colors.purpleDark,
    color: colors.white,
  },

  gray: {
    backgroundColor: colors.light,
    color: colors.dark,
  },

  celInput: {
    height: metrics.navBarHeight,
    paddingLeft: (metrics.basePadding * 3) + metrics.basePadding,
    borderRadius: metrics.baseRadius,
    marginBottom: metrics.baseMargin / 2,
  },

  phoneIcon: {
    position: 'absolute',
    left: metrics.basePadding,
    top: metrics.navBarHeight / 3,
    zIndex: 1,
    paddingRight: metrics.basePadding,
    borderRightColor: colors.purpleDarker,
    borderRightWidth: 1,
  },
});

export default styles;
