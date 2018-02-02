import colors from './colors';
import metrics from './metrics';

export default {
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  contentContainer: {
    padding: metrics.basePadding,
  },

  box: {
    backgroundColor: colors.white,
    padding: metrics.basePadding,
    shadowColor: colors.light,
    shadowOpacity: 0.5,
    shadowRadius: 8,
    borderRadius: metrics.baseRadius,
    alignSelf: 'stretch',
  },
};
