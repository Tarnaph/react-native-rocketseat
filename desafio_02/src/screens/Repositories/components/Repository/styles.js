import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    height: 75,
    borderRadius: 5,
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 15,
  },
  avatar: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    height: 45,
    justifyContent: 'space-between',
    marginLeft: 20,
    paddingVertical: 2,
  },
  title: {
    color: colors.darker,
    fontWeight: 'bold',
    fontSize: fonts.middle,
  },
  sub: {
    color: colors.light,
    fontSize: fonts.small,
  },
  icon: {
    color: colors.lighter,
    fontSize: fonts.icon,
  },
});

export default styles;
