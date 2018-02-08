import { StyleSheet } from 'react-native';
import { general, colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  containerInput: {

  },

  celInput: {
    height: metrics.navBarHeight,
    paddingLeft: (metrics.basePadding * 3) + metrics.basePadding,
    backgroundColor: colors.purpleDark,
    borderRadius: metrics.baseRadius,
    color: colors.white,
    marginBottom: metrics.baseMargin / 2,
  },

  phoneIcon: {
    position: 'absolute',
    left: metrics.basePadding,
    top: metrics.navBarHeight / 3,
    zIndex: 1,
    color: colors.white,
    paddingRight: metrics.basePadding,
    borderRightColor: colors.purpleDarker,
    borderRightWidth: 1,
  },
});

export default styles;
