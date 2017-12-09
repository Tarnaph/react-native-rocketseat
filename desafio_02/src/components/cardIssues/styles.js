import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 4,
    height: 80,
    borderRadius: 5,
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
    color: colors.lowLight,
  },
  containerText: {
    flex: 1,
    alignContent: 'flex-start',
    paddingLeft: 10,
  },
  description: {
    fontSize: fonts.small,
    color: '#a0a0a0',
  },
  title: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.darker,
    marginBottom: 5,
  },
});

export default styles;
