import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  swipeout: {
    backgroundColor: colors.transparent,
    marginTop: metrics.baseMargin / 1.5,
    borderRadius: metrics.baseRadius,
  },

  eventContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: metrics.navBarHeight * 1.5,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    marginHorizontal: metrics.baseMargin / 1.5,
    padding: metrics.basePadding,
  },

  eventText: {
    justifyContent: 'center',
  },

  title: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.dark,
    maxWidth: ((metrics.screenWidth / 2) + (metrics.baseMargin * 4)) - (metrics.statusBarHeight * 1.5),
  },

  description: {
    marginTop: metrics.tinyMargin,
    fontSize: fonts.regular,
    color: colors.dark,
    maxWidth: ((metrics.screenWidth / 2 )+ (metrics.baseMargin * 4)) - (metrics.statusBarHeight * 1.5),
  },

  time: {
    fontSize: fonts.regular,
    color: colors.regular,
  },
});

export default styles;
