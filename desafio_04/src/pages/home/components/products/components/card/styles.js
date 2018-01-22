import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    width: (metrics.screenWidth - 45) / 2,
    marginBottom: 10,
    backgroundColor: colors.white,
    borderBottomRightRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.rose,
    shadowColor: colors.rose,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.3,
    elevation: 5,
  },

  cover: {
    height: 260,
    resizeMode: 'cover',
  },

  containerText: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: colors.light,
  },

  title: {
    fontWeight: 'bold',
    fontSize: fonts.regular,
    color: colors.dark,
    minHeight: 50,
    maxHeight: 50,
  },

  subTitle: {
    fontSize: fonts.small,
    color: colors.rose,
  },

  priceContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderBottomColor: colors.light,
    borderBottomWidth: 0.5,
    borderRightColor: colors.light,
    borderRightWidth: 0.5,
    borderBottomRightRadius: 10,
  },

  price: {
    paddingTop: 5,
    paddingVertical: 5,
    fontSize: fonts.big,
    color: colors.green,
    fontWeight: 'bold',
  },

  scroll: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: metrics.basePadding,
    justifyContent: 'space-around',
  },
});

export default styles;
