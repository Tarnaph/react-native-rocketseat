import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderBottomRightRadius: 10,
    shadowColor: colors.rose,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.3,
    elevation: 30,
    borderBottomWidth: 1,
    borderBottomColor: colors.rose,
    justifyContent: 'space-between',
  },

  containerImg: {
    minHeight: (metrics.screenHeight - (metrics.baseNavs * 2)) - (metrics.screenHeight * 0.3),
    width: '100%',
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
  },

  cover: {
    minHeight: (metrics.screenHeight - (metrics.baseNavs * 2)) - (metrics.screenHeight * 0.3),
    width: '100%',
    resizeMode: 'cover',
  },

  containerText: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  right: {
    justifyContent: 'flex-end',
  },

  title: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: fonts.regular,
    color: colors.dark,
    minWidth: 180,
    maxWidth: 180,
  },

  subTitle: {
    marginTop: 5,
    fontSize: fonts.small,
    color: colors.rose,
  },

  price: {
    fontSize: fonts.big,
    color: colors.green,
    fontWeight: 'bold',
  },

  footer: {
    padding: 10,
    height: 55,
  },

  btn: {
    flex: 1,
    borderBottomRightRadius: 10,

    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
  },

  green: {
    backgroundColor: colors.green,
  },

  rose: {
    backgroundColor: colors.roseDark,
  },

  btnText: {
    color: colors.white,
    fontSize: fonts.regular,
    fontWeight: 'bold',
  },
});

export default styles;
