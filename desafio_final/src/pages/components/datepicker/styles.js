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
  },

  celInput: {
    width: '100%',
    height: metrics.navBarHeight,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: (metrics.basePadding * 3) + metrics.basePadding,
    borderRadius: metrics.baseRadius,
    marginBottom: metrics.baseMargin / 2,
  },

  phoneIcon: {
    position: 'absolute',
    left: metrics.basePadding,
    top: metrics.navBarHeight / 3,
    zIndex: 1,
    paddingRight: metrics.basePadding + 1,
    borderRightColor: colors.purpleDark,
    borderRightWidth: 1,
  },
});

export default styles;
