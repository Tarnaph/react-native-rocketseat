import { StyleSheet } from 'react-native';
import { colors, fonts, general } from 'styles';

const styles = StyleSheet.create({
  ...general,
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 5,
    height: 80,
    borderRadius: 8,
    backgroundColor: colors.white,
    alignItems: 'center',
    shadowColor: colors.darker,
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  iconRight: {
    fontSize: fonts.regular,
    color: colors.light,
    marginLeft: 5,
  },
  containerText: {
    flex: 1,
    alignContent: 'flex-start',
    paddingLeft: 10,
  },
  description: {
    fontSize: fonts.small,
    color: colors.description,
  },
  title: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.darker,
    marginBottom: 5,
  },
});

export default styles;
