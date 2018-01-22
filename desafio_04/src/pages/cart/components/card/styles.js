import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    height: 105,
    marginBottom: 10,
    borderBottomRightRadius: 10,
    shadowColor: colors.rose,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.3,
    alignItems: 'center',
    elevation: 2,
    borderBottomWidth: 1,
    borderBottomColor: colors.rose,
  },

  containerText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  left: {
    borderRightColor: colors.light,
    borderRightWidth: 1,
  },

  center: {
    flex: 1,
    marginHorizontal: 10,
  },

  right: {
    maxWidth: 100,
    minWidth: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  cover: {
    height: 105,
    width: 80,
    resizeMode: 'cover',
  },

  title: {
    fontWeight: 'bold',
    fontSize: fonts.small,
    color: colors.dark,
  },

  subTitle: {
    fontSize: fonts.smaller,
    color: colors.rose,
  },

  price: {
    fontSize: fonts.regular,
    color: colors.green,
    fontWeight: 'bold',
  },

  amount: {
    fontSize: fonts.smaller,
    fontWeight: 'bold',
    color: colors.dark,
    height: 25,
    minWidth: 40,
    maxWidth: 60,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    borderRightColor: colors.rose,
    borderRightWidth: 3,
    borderBottomRightRadius: 5,
  },

  continerIcon: {
    height: 20,
    width: 20,
    backgroundColor: colors.alfa,
    justifyContent: 'center',
    alignItems: 'center',
  },

  removeIcon: {
    color: colors.gray,
    fontSize: fonts.small,
    shadowColor: colors.rose,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.3,
  },
});

export default styles;
